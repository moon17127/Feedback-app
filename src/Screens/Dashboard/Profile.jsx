import React from "react";
import UpLoader from "../../components/UpLoader";
import SideBar from "./SideBar";

function Profile() {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Profile</h2>
        {/* upload Images*/}
        <UpLoader />
        <div className="text-sm w-full">
          <label className="text-border font-semibold">FullName</label>
          <input
            className={`w-full text-sm mt-2 px-6 py-4 text-white border border-border rounded bg-main`}
            required
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div className="text-sm w-full">
          <label className="text-border font-semibold">Email</label>
          <input
            className={`w-full text-sm mt-2 px-6 py-4 text-white border border-border rounded bg-main`}
            required
            type="email"
            placeholder="netflix@gmail.com"
          />
        </div>
        <div className="flex gap-2 flex-wrap  flex-col-reverse sm:flex-row  justify-between items-center my-4">
          <button className="bg-subMain transitions border border-subMain hover:bg-main font-medium text-white py-3 px-6 rounded w-full sm:w-auto">
            Delete Account
          </button>
          <button className="bg-main transitions border border-subMain hover:bg-subMain font-medium text-white py-3 px-6 rounded w-full sm:w-auto">
            Update Profile
          </button>
        </div>
      </div>
    </SideBar>
  );
}

export default Profile;
