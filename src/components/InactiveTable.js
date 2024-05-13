import React, { useState } from "react";
import Modal from "./Modal";
import { setActive } from "@material-tailwind/react/components/Tabs/TabsContext";
const TABLE_HEAD = [
  { columName: "Inactive Users" },
  { columName: "Storage Occupied in TB" },
  { columName: "Delete Data" },
  { columName: "Claim Ownership" },
];

const TABLE_ROWS = [
  {
    userID: "653424332",
    storage: "5.5",
    delete: "",
  },
  {
    userID: "653424334",
    storage: "5.5",
    delete: "",
  },
  {
    userID: "653424339",
    storage: "5.5",
    delete: "",
  },
];

const InactiveDatable = () => {
  const [active, setActive] = useState(false);
  const [selectedID, setSelectedId] = useState([]);
  const [modalData, setModalData] = useState({});
  const [modalName, setModalName] = useState("");
  const [claimIds,setClaimIds] = useState([]);

  const handleDelete = (id) => {
   
    alert("Selected data owned by this inactive user is marked for deletion");
    setSelectedId( (prv)=>[...prv,id]);
    setModalName("")
   
  };

  const checkDeleteId = (id) => {
    
    let result = false;
    selectedID.map((_id) =>{
      if(_id == id) result=true;
    })
     return result;
  };
  const checkClaimId = (id) => {

    
    let result = false;
    claimIds.map((_id) =>{
      if(_id == id) result=true;
    })
     return result;
  };

  const handleClaim =(id)=>{
    alert("Successfully initiated ownership transfer");
     setClaimIds((prv) => [...prv,id]);
     const filterDete = selectedID.filter((d_id)=> d_id!=id);
     setSelectedId(filterDete);
     setModalName("")
  }

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
              <tr
                className={`rounded-full px-5 border-b  ${
                  checkDeleteId(rowData?.userID) ? "bg-red-500" : ` ${
                  checkClaimId(rowData?.userID) ? "bg-[#E6BE3A]" : "bg-white"
                }`
                } 
                
                `}
              >
                <td className=" p-3">{rowData?.userID}</td>
                <td className=" p-3">{rowData?.storage}</td>
                <td className=" p-3">
                  <button
                    onClick={() => {
                      setActive(true);
                      setModalData(rowData);
                      setModalName("delete_modal");
                    }}
                    className="  bg-blue-950 px-2 rounded-md mt-2  text-white"
                  >
                    Delete data owned by this Inactive User
                  </button>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => {
                      setActive(true);
                      setModalData(rowData);
                      setModalName("claim_modal");
                    }}
                    className="  bg-blue-950 px-2 rounded-md mt-2  text-white"
                  >
                    Claim ownership of this data
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {modalName == "delete_modal" && (
        <Modal active={active} setActive={setActive} title={"Delete files owned by Inactive User [Irrevocable Action]"}>
          <p className=" font-semibold">Selected Inactive User Data</p>

          <table className=" w-full bg-dark-blue mt-3  table-auto rounded-md text-white">
            <thead className=" w-full">
              <tr className="  ">
                <td>Inactive User ID</td>
                <td>Storage Occupied in TB</td>
              </tr>
            </thead>
            <tbody>
              <tr className=" bg-white text-black border">
                <td>{modalData?.userID}</td>
                <td>{modalData?.storage}</td>
              </tr>
            </tbody>
          </table>

          <p className="  font-bold">File path details</p>

          <table className=" w-full bg-dark-blue  overflow-hidden table-auto rounded-md text-white">
            <thead className=" w-full">
              <tr className="  ">
                <td>Filepath</td>
                <td>Filesize (bytes)</td>
              </tr>
            </thead>

            <tbody className=" text-black">
              <tr className=" bg-white border">
                <td className=" ">/path/to/file1.txt</td>
                <td>1024</td>
              </tr>
              <tr className="bg-white border ">
                <td>/path/to/file1.txt</td>
                <td>1024</td>
              </tr>
            </tbody>
          </table>

          <p className="  ">Total no.of files: 223943243</p>

          <button
            onClick={() => handleDelete(modalData?.userID)}
            className="  bg-red-600 w-[100px] text-white px-2 py-2 border-none outline-none rounded-md"
          >
            Delete
          </button>
        </Modal>
      )}

      {modalName == "claim_modal" && (
        <Modal
          active={active}
          setActive={setActive}
          title={"Ownership Transfer"}
        >
          <table className=" w-full bg-dark-blue mt-3  table-auto rounded-md text-white">
            <thead className=" w-full">
              <tr className="  ">
                <td>Inactive User ID</td>
                <td>Storage Occupied in TB</td>
              </tr>
            </thead>
            <tbody>
              <tr className=" bg-white text-black border">
                <td>{modalData?.userID}</td>
                <td>{modalData?.storage}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <p>
              To which user do you want to transfer the ownership of this data?
            </p>
            <p className=" font-semibold text-lg text-red-500">
              Note: Ownership can be transferred only to members who are part of
              the use case group.
            </p>
          </div>

          <div>
            <label>User Name or ADS ID:</label>
            <input type="text" className=" border mx-2" />
            <button onClick={()=> handleClaim(modalData?.userID)} className=" bg-[#005B9C] text-white px-4  rounded-md py-3">
              Claimit
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default InactiveDatable;
