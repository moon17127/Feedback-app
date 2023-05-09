import React from "react";

function Head({ title }) {
  return (
    <div className=" bg-deepGray h-40 lg:h-72 relative overflow-hidden rounded-md">
      <img
        src="https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png"
        className="w-full h-full object-cover"
        alt="aboutUS"
      />
      <div className=" absolute lg:top-24 top-16 w-full flex-colo">
        <h1 className="text-2x lg:text-h1 text-white text-center font-bold">
          {title && title}
        </h1>
      </div>
    </div>
  );
}

export default Head;
