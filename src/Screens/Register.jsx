import React from "react";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

function Register() {
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-14 md:w-3/5 bg-dry rounded-lg border border-border">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_tlwPeTs9RqrYxSoaeiDtuXMPXU2JcwCt6w&usqp=CAU"
            alt="logo"
            className="w-full h-12 object-contain"
          />
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
          <div className="text-sm w-full">
            <label className="text-border font-semibold">Password</label>
            <input
              className={`w-full text-sm mt-2 px-6 py-4 text-white border border-border rounded bg-main`}
              required
              type="password"
              placeholder="*********"
            />
          </div>
          <Link
            to="/dashboard"
            className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
          >
            <FiLogIn /> Sign up
          </Link>
          <p className="text-center  text-dryGray ">
            Already have an account ?
            <Link
              to="/login"
              className="text-border text-sm font-semibold ml-2 italic"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
