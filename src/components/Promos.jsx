import React from "react";
import { FiUser } from "react-icons/fi";

function Promos() {
  return (
    <div className="my-20 py-10 md:px-20 px-8 rounded bg-dry">
      <div className="lg:grid lg:grid-cols-2 text-center lg:gap-10 items-center">
        <div className="lg:grid lg:gap-10 gap-6 flex-col">
          <h1 className="xl:text-3xl text-xl capitalize mb-4 font-sans font-medium xl:leading-relaxed ">
            Download Your Movies Watch Offline .
            <br />
            Enjoy On Your Mobile
          </h1>
          <p className=" text-text mb-4 lg:mb-0 text-sm xl:text-bas leading-6 xl:leading-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </p>
          <div className="flex gap-4   justify-center md:text-lg  text-sm">
            <span className="flex-colo bg-black text-subMain px-6 py-3 rounded font-bold">
              HD 4k
            </span>
            <span className="flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded font-bold">
              <FiUser className="w-5 h-5" /> 2k
            </span>
          </div>
        </div>
        <div className="mt-6  ">
          <img
            src="https://variety.com/wp-content/uploads/2021/08/Stranger-Things-Netflix-Mobile-Games.jpg"
            alt="mobile.PNG"
            className=" w-full  rounded-xl  mx-auto  object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Promos;
