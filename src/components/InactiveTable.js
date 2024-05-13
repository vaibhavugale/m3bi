import React, { useState } from "react";
import Modal from "./Modal";
import { setActive } from "@material-tailwind/react/components/Tabs/TabsContext";
const  TABLE_HEAD =[
{columName:"Inactive Users"},
{columName:"Storage Occupied in TB"},
{columName:"Delete Data"},
{columName:"Claim Ownership"},

]

const TABLE_ROWS =[
  {
    userID:"653424332",
    storage:"5.5",
    delete:"",
  },
  {
    userID:"653424332",
    storage:"5.5",
    delete:"",
  },
  {
    userID:"653424332",
    storage:"5.5",
    delete:"",
  }
]


const InactiveDatable = () => {
  const [active , setActive] = useState(false);
  return (
    <>
      <table className=" w-full  table-auto mt-2 rounded-lg bg-blue-950 py-3 overflow-hidden">
      <thead className=" rounded-md text-white py-2">
        <tr className="   rounded-lg ">
          {TABLE_HEAD?.map((item) => {
            return <td className="px-3">{item?.columName}</td>;
          })}
        </tr>
      </thead>

      <tbody className=" p-2">
        {TABLE_ROWS?.map((rowData) => {
          return (
            <tr className=" rounded-full bg-white px-5 border-b ">
              <td className=" p-3">{rowData?.userID}</td>
              <td className=" p-3">{rowData?.storage}</td>
               <td className=" p-3"><button onClick={()=>setActive(true)}  className="  bg-blue-950 px-2 rounded-md mt-2  text-white">Delete data owned by this Inactive User</button></td>
               <td className="p-3"><button className="  bg-blue-950 px-2 rounded-md mt-2  text-white">Claim ownership of this data</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>

    <Modal  active={active} setActive={setActive}/>
    </>
  );
};

export default InactiveDatable;
