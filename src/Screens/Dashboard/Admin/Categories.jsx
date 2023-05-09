import React from "react";
import { useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import MainModal from "../../../components/Modals/MainModal";
import SideBar from "./../SideBar";

function Categories() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <SideBar>
      <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className="flex flex-col gay-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Categories</h2>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded"
          >
            <HiPlusCircle /> Create
          </button>
        </div>
      </div>
    </SideBar>
  );
}

export default Categories;
