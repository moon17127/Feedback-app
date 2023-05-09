import React from "react";
import { HiPlusCircle } from "react-icons/hi";

function CategoryModal({ setModalOpen }) {
  return (
    <>
      <h2 className="text-3xl font-bold"> Create </h2>
      <form className="flex flex-col gap-6 text-left mt-6">
        <div className="text-sm w-full">
          <label className="text-border font-semibold">Category Name</label>
          <input
            className={`w-full text-sm mt-2 px-6 py-4 text-white border border-border rounded bg-main`}
            type="text"
            placeholder="Action"
          />
        </div>
        <button
          type="submit"
          onClick={() => setModalOpen(false)}
          className="w-full transitions flex-rows gap-3 text-lg py-4 rounded bg-subMain text-white hover:bg-dry font-bold border-2 border-subMain"
        >
          <HiPlusCircle /> Add
        </button>
      </form>
    </>
  );
}

export default CategoryModal;
