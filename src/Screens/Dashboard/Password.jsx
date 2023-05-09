import React from "react";
import SideBar from "./SideBar";

function Password() {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Change Password</h2>
        {/* upload Images*/}
        <div className="text-sm w-full">
          <label className="text-border font-semibold">Previous Password</label>
          <input
            className={`w-full text-sm mt-2 px-6 py-4 text-white border border-border rounded bg-main`}
            required
            type="password"
            placeholder="**********"
          />
        </div>
        <div className="text-sm w-full">
          <label className="text-border font-semibold">New Password</label>
          <input
            className={`w-full text-sm mt-2 px-6 py-4 text-white border border-border rounded bg-main`}
            required
            type="password"
            placeholder="**********"
          />
        </div>
        <div className="text-sm w-full">
          <label className="text-border font-semibold">Confirm Password</label>
          <input
            className={`w-full text-sm mt-2 px-6 py-4 text-white border border-border rounded bg-main`}
            required
            type="password"
            placeholder="**********"
          />
        </div>
        <div className="flex  justify-end items-center my-4">
          <button className="bg-main transitions border border-subMain hover:bg-subMain font-medium text-white py-3 px-6 rounded w-full sm:w-auto">
            Change Password
          </button>
        </div>
      </div>
    </SideBar>
  );
}

export default Password;
