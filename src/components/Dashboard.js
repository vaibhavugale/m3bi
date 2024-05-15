import React, { useState } from "react";
import InactiveDatable from "./InactiveTable";
import { TABLE_HEAD } from "../data";
import ActiveDatable from "./ActiveDatable";
import { AiFillEnvironment } from "react-icons/ai";
import { useEffect } from "react";
import { volumeData } from "../data";
import { SearchSelect, SearchSelectItem } from "@tremor/react";

const Dashboard = () => {
  const [activeUserData,setActiveUserData] = useState([]);
  const [inactiveUserData,setInactiveUserData] = useState([]);
  const [totalStorageInactive, setTotalStorageInactive] = useState(0);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://m3bi-backend.onrender.com/userData");
      const data = await res.json();

      // console.log( data?.data);
       await data?.data.map((item)=>{
        if(item?._id=="ACTIVE") setActiveUserData(item?.users);
        if(item?._id=="INACTIVE") setInactiveUserData(item?.users);
      })

      // console.log(inactiveUserData);
      // const result = inactiveUserData.reduce(
      //   (acc, item) => acc + parseInt(item?.storage),
      //   0
      // );
      // setTotalStorageInactive(result);
    };
    getData();
  }, []);
  const [optionData, setOptionData] = useState({
    location: "USA",
    environment: "Sliver",
    clusterType: "Batch",
    clusterName: "SliverM5",
    volume: "",
  });

  const handleChange = (name, value) => {
    if (!value) return;
    setOptionData((prevSelectedValues) => ({
      ...prevSelectedValues,
      [name]: value,
    }));
  };

  const getTotalStorage = (data) =>{
    return data.reduce(
      (acc, item) => acc + parseInt(item?.storage),
      0
    );
  }

  return (
    <div className=" w-[100vw] flex  items-center flex-col  px-5 py-3  min-h-[80vh]  ">
      <div className=" w-[85%]  min-h-[50%] rounded-lg shadow-2xl border p-5  ">
        <p className=" text-center tracking-wide  font-bold p-5  text-2xl">
          ClaimIt: Cornerstone Usecase(s) directory [MapR Volume] MetaData
          Management Hub
        </p>

        <div className="   flex flex-col  md:flex-row justify-between  mb-5">
          <div className="flex-grow ">
            <p className=" font-semibold">Location:</p>
            <SearchSelect
              onValueChange={(e) => handleChange("location", e)}
              className="  outline-none rounded-md py-1 w-[70%] "
            >
              <SearchSelectItem value="US" selected>
                US
              </SearchSelectItem>
              <SearchSelectItem value="IN">IN</SearchSelectItem>
            </SearchSelect>
          </div>

          <div className="flex-grow ">
            <p className=" font-semibold">Environment:</p>
            <SearchSelect
              onValueChange={(e) => handleChange("environment", e)}
              className="  outline-none rounded-md py-1 w-[70%] "
            >
              <SearchSelectItem value="Sliver">Sliver</SearchSelectItem>
              <SearchSelectItem value="Gold">Gold</SearchSelectItem>
              <SearchSelectItem value="Platinum">Platinum</SearchSelectItem>
              <SearchSelectItem value="Palladium">Palladium</SearchSelectItem>
            </SearchSelect>
          </div>

          <div className="flex-grow ">
            <p className=" font-semibold">MapR Cluster Type::</p>
            <SearchSelect
              onValueChange={(e) => handleChange("clusterType", e)}
              className="  outline-none rounded-md py-1 w-[70%] "
            >
              <SearchSelectItem value="Batch">Batch</SearchSelectItem>
              <SearchSelectItem value="RealTime">Real Time</SearchSelectItem>
            </SearchSelect>
          </div>

          <div className="flex-grow ">
            <p className=" font-semibold">MapR Cluster Name:</p>
            <SearchSelect
              onValueChange={(e) => handleChange("clusterName", e)}
              className="  outline-none rounded-md py-1 w-[70%] "
            >
              <SearchSelectItem value="SilverM5">Silver M5</SearchSelectItem>
              <SearchSelectItem value="GoldM5">Gold M5</SearchSelectItem>
              <SearchSelectItem value="PlatinumM5">
                Platinum M5
              </SearchSelectItem>
              <SearchSelectItem value="PalladiumM5">
                Palladium M5
              </SearchSelectItem>
            </SearchSelect>
          </div>
        </div>

        <div className="  p-8">
          <div className=" bg-blue-200/30  border shadow-xl border-b-blue w-[40%] mx-auto rounded-sm p-3 ">
            <p className=" text-center  text-xl font-semibold text-blue-900/80">
              Selection Path:
            </p>
            <p className=" text-center mt-5 tracking-wider text-blue-400 text-lg">
              {optionData?.location}/{optionData?.environment}/
              {optionData?.clusterType}/{optionData?.clusterName}
            </p>
          </div>
        </div>

        <SearchSelect
          onValueChange={(e) => handleChange("volume", e)}
          className="  w-full px-3 py-1 rounded-md"
        >
          <SearchSelectItem disabled selected>
            Select
          </SearchSelectItem>
          <SearchSelectItem value="volume1">Volume1</SearchSelectItem>
          <SearchSelectItem value="volume2">volume2</SearchSelectItem>
        </SearchSelect>

        {optionData?.volume != "" && (
          <>
            <table className=" border  bg-dark-blue w-full mt-3 rounded-md overflow-hidden text-white p-2">
              <thead>
                <tr>
                  {TABLE_HEAD.map((item, index) => {
                    return (
                      <td key={index} className=" px-3">
                        {item?.columName}
                      </td>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {optionData?.volume &&
                  volumeData[optionData.volume].map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className={` w-full text-black ${
                          parseFloat((item?.Used/item?.Quota)*100).toFixed(2) >= 50
                            ? "bg-[#F24A3F]"
                            : "bg-[#54B358]"
                        } `}
                      >
                        <td className="p-3">{item?.Name}</td>
                        <td className="p-3">{item?.Path}</td>
                        <td className="p-3">{item?.Quota}</td>
                        <td className="p-3">{item?.Used}</td>
                        <td className="p-3">{parseFloat((item?.Used/item?.Quota)*100).toFixed(2) }</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>

            <div className=" w-full bg-[#006AFF]  shadow-2xl border mt-5 text-white font-semibold rounded-md px-5 py-3">
              Eagle Volume Usage Statistics for: volume2
            </div>

            <p className=" mt-2 font-semibold">
              Storage Occupied by Inactive Users
            </p>
            <InactiveDatable TABLE_ROWS={inactiveUserData} />

            <div className=" w-full bg-[#FF9000] shadow-2xl border mt-5 text-white font-semibold rounded-md px-5 py-3">
              Total Storage Occupied by Inactive Users [TB]: {parseFloat(getTotalStorage(inactiveUserData)).toFixed(2) }
            </div>
            <div className=" w-full bg-[#006AFF] shadow-2xl border mt-5 text-white font-semibold rounded-md px-5 py-3">
              Storage Occupied by Active Users
            </div>

            <ActiveDatable row={activeUserData} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
