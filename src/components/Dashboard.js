import React, { useState } from "react";
import InactiveDatable from "./InactiveTable";
import { TABLE_HEAD } from "../data";
import ActiveDatable from "./ActiveDatable";
import { AiFillEnvironment } from "react-icons/ai";
import { useEffect } from "react";
import { volumeData } from "../data";
import {
  MultiSelect,
  MultiSelectItem,
  SearchSelect,
  SearchSelectItem,
  Select,
  SelectItem,
} from '@tremor/react';


const Dashboard = () => {
  const [userData , setUserData] = useState([]);
  useEffect(()=>{
    const getData =async () =>{
       const res = await fetch("https://m3bi-backend.onrender.com/userData");
       const data = await res.json();
       setUserData(data?.data);
    }
    getData();
  },[])
  const [optionData, setOptionData] = useState({
    location: "USA",
    environment: "Sliver",
    clusterType: "Batch",
    clusterName: "SliverM5",
    volume: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log(name, value);
    setOptionData((prevSelectedValues) => ({
      ...prevSelectedValues,
      [name]: value,
    }));
  };

  return (
    <div className=" w-[100vw] flex  items-center flex-col  px-5 py-3  min-h-[80vh]  ">
      <div className=" w-[85%]  min-h-[50%] rounded-lg shadow-2xl border p-5  ">
        <p className=" text-center tracking-wide  font-bold p-5  text-2xl">
          ClaimIt: Cornerstone Usecase(s) directory [MapR Volume] MetaData
          Management Hub
        </p>

        <div className="   flex flex-col  md:flex-row justify-between  mb-5">
          <div className=" flex-grow">
            <p className="  font-bold ">Location:</p>

            <select
              onChange={handleChange}
              name="location"
              className="border px-4  outline-none rounded-md  py-1  w-[50%] "
            >
              <option value={"USA"}>USA</option>
              <option value={"IN"}>IN</option>
            </select>
          </div>

          <div className="flex-grow">
            <p>Environment:</p>
            <select
              onChange={handleChange}
              name="environment"
              className=" border px-4  outline-none rounded-md py-1 w-[60%] "
            >
              <option value={"Sliver"}>Sliver</option>
              <option value={"Gold"}>Gold</option>
              <option value={"Platinum"}>Platinum</option>
              <option value={"Palladium"}> Palladium</option>
            </select>
          </div>
        
     


     

     

        


          <div className="flex-grow">
            <p>MapR Cluster Type:</p>
            <select
              onChange={handleChange}
              name="clusterType"
              className=" border px-4  outline-none rounded-md py-1 w-[60%]"
            >
              <option value={"Batch"}>Batch</option>
              <option value={"Realtime"}>Real Time</option>
            </select>
          </div>

          <div className=" flex-grow">
            <p>MapR Cluster Name:</p>
            <select
              onChange={handleChange}
              name="clusterName"
              className=" border px-4 outline-none rounded-md py-1 w-[60%] "
            >
              <option value={"SliverM5"}>Silver M5</option>
              <option value={"GoldM5"}>Gold M5</option>
              <option value={"PlatinumM5"}>Platinum M5</option>
              <option value={"PalladiumM5"}>Palladium M5</option>
            </select>
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

        <select
          onChange={handleChange}
          name="volume"
          className=" border w-full px-3 py-1 rounded-md"
        >
          <option value={"volume1"}>Volume1</option>
          <option value={"volume2"}>Volume2</option>
        </select>

        {optionData?.volume != "" && (
          <>
            <table className=" border  bg-dark-blue w-full mt-3 rounded-md overflow-hidden text-white p-2">
              <thead>
                <tr>
                  {TABLE_HEAD.map((item) => {
                    return <td className=" px-3">{item?.columName}</td>;
                  })}
                </tr>
              </thead>

              <tbody>
                {optionData?.volume &&
                  volumeData[optionData.volume].map((item) => {
                    return (
                      <tr className={` w-full text-black bg-white  ${item?.Percentage >=50 ? "bg-[#F24A3F]":"bg-[#54B358]"} `}>
                        <td className="p-3">{item?.Name}</td>
                        <td className="p-3">{item?.Path}</td>
                        <td className="p-3">{item?.Quota}</td>
                        <td className="p-3">{item?.Used}</td>
                        <td className="p-3">{item?.Percentage}</td>
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
            <InactiveDatable  TABLE_ROWS={userData}/>

            <div className=" w-full bg-[#FF9000] shadow-2xl border mt-5 text-white font-semibold rounded-md px-5 py-3">
              Total Storage Occupied by Inactive Users [TB]: 15.0{" "}
            </div>
            <div className=" w-full bg-[#006AFF] shadow-2xl border mt-5 text-white font-semibold rounded-md px-5 py-3">
              Storage Occupied by Active Users
            </div>

            <ActiveDatable row={userData} />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
