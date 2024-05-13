
import React, { useState } from "react";

const Modal = ({ children, active  , setActive}) => {

  return (
    <div
      
      className={` z-50  fixed bottom-0 top-0 right-0 left-0  ${
        active  ? " flex " : " hidden"
      }  justify-center items-center  bg-slate-600/50`}
    >
      <div className=" bg-white  rounded-md w-[50%] h-[50%]">
        <div className=" flex justify-between  p-2 w-full rounded-t-md bg-blue-600">
          <p className="  ">
            Delete files owned by Inactive User [Irrevocable Action]
          </p>

          <button onClick={()=>setActive(!active)}>close</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
