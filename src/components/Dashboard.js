import React from "react";
import InactiveDatable from "./InactiveTable";
import {
  TABLE_HEAD,
  TABLE_ROWS,
  inactiveUser,
  userData,
  userTableCol,
} from "../data";
import ActiveDatable from "./ActiveDatable";
import Modal from "./Modal";

const Dashboard = () => {
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

            <select className="border px-4border px-2 outline-none rounded-md  py-1  w-[50%] ">
              <option>USA</option>
              <option>IN</option>
            </select>
          </div>

          <div className="flex-grow">
            <p>Environment:</p>
            <select className=" border px-4border px-2 outline-none rounded-md py-1 w-[60%] ">
              <option>Sliver</option>
              <option>Gold</option>
              <option>Platinum</option>
              <option>Palladium</option>
            </select>
          </div>

          <div className="flex-grow">
            <p>MapR Cluster Type:</p>
            <select className=" border px-4 border px-2 outline-none rounded-md py-1 w-[60%]">
              <option>Batch</option>
              <option>Real Time</option>
            </select>
          </div>

          <div className=" flex-grow">
            <p>MapR Cluster Name:</p>
            <select className=" border px-4 border px-2 outline-none rounded-md py-1 w-[60%] ">
              <option>Silver M5</option>
              <option>Gold M5</option>
              <option>Platinum M5</option>
              <option>Palladium</option>
            </select>
          </div>
        </div>

        <div className="  p-8">
          <div className=" bg-blue-200/30  border shadow-xl border-b-blue w-[40%] mx-auto rounded-sm p-3 ">
            <p className=" text-center  text-xl font-semibold text-blue-900/80">
              Selection Path:
            </p>
            <p className=" text-center mt-5 tracking-wider text-blue-400 text-lg">
              US/Silver/Batch/SilverM5
            </p>
          </div>
        </div>

        <select className=" border w-full px-3 py-1 rounded-md">
          <option>Volume1</option>
          <option>Volume2</option>
        </select>

        <div className=" w-full bg-blue-500 shadow-2xl border mt-5 text-white font-semibold rounded-md px-5 py-3">
          Eagle Volume Usage Statistics for: volume2
        </div>

        <p className=" mt-2 font-semibold">
          Storage Occupied by Inactive Users
        </p>
        <InactiveDatable />

        <div className=" w-full bg-blue-500 shadow-2xl border mt-5 text-white font-semibold rounded-md px-5 py-3">
          Total Storage Occupied by Inactive Users [TB]: 15.0{" "}
        </div>
        <div className=" w-full bg-orange-600 shadow-2xl border mt-5 text-white font-semibold rounded-md px-5 py-3">
          Storage Occupied by Active Users
        </div>

        <ActiveDatable />

        
      </div>
    </div>
  );
};

export default Dashboard;
