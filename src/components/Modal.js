
import React, { useState } from "react";

const Modal = ({ children, active  , setActive ,title}) => {

  return (
    <div
      
      className={` z-50  fixed bottom-0 top-0 right-0 left-0   ${
        active  ? " flex " : " hidden"
      }  justify-center items-center  bg-slate-600/50`}
    >
      <div className=" bg-white  rounded-md w-[50%] max-h-[50%] ">
        <div className=" flex justify-between  text-center p-2 w-full rounded-t-md bg-blue-600">
          <p className="  text-white font-bold text-center mx-auto ">
           {title}
          </p>

          <button onClick={()=>setActive(!active)}>close</button>
        </div>
       <div className=" p-3 flex flex-col   gap-3 justify-between ">
       {children}
       </div>
      </div>
    </div>
  );
};

export default Modal;
