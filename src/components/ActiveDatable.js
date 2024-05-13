import React, { useEffect, useState } from 'react'
import {userTableCol as col} from "../data"

//  const row =[

//     {
//         userName:"user1",
//         email:"user1@gmail.com",
//         ads:"1",
//         storage:67
//     },
//     {
//         userName:"user2",
//         email:"user2@gmail.com",
//         ads:"2",
//         storage:63
//     },
//     {
//         userName:"user3",
//         email:"user3@gmail.com",
//         ads:"3",
//         storage:7
//     },
//     {
//         userName:"user4",
//         email:"user4@gmail.com",
//         ads:"4",
//         storage:60
//     },
// ]
  



const ActiveDatable = ({row}) => {

 
  return (
    <table className=" w-full mt-5  table-auto  rounded-lg bg-blue-950 py-3 overflow-hidden">
      <thead className=" rounded-md text-white py-2">
        <tr className="   rounded-lg ">
          {col?.map((item,index) => {
            return <td key={index} className="px-3">{item?.columName}</td>;
          })}
        </tr>
      </thead>

      <tbody className=" p-2">
        {row?.map((rowData,index) => {
          return (
            <tr key={index} className=" rounded-full  border-b bg-white">
              <td className=" p-3">{rowData?.userName}</td>
              <td className=" p-3">{rowData?.email}</td>
              <td className=" p-3">{rowData?.ADS}</td>
              <td className=" p-3">{rowData?.storage}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

export default ActiveDatable