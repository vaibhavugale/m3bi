import React from 'react'
import { waringData } from '../data'

const Footer = () => {
  return (
    <div className={` flex rounded-md p-3 bg-red-500 sticky bottom-0  mr-2 ml-2 ` }>
        {
          waringData.map((waring,index)=>{
             return <p className={` text-white text-center  ${(index!==waringData.length-1 ) ? "border-r-2 ":""}`}>
              {waring}              
             </p>
          })
        }
    </div>
  )
}

export default Footer