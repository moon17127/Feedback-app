import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 p-10 px-6">
      <img
        src="https://media.istockphoto.com/id/972609398/video/hacker-element-and-pixel-noise-glitch-with-the-404-error.jpg?s=640x640&k=20&c=kU-qO3R2s-PX3LFd8p10IcdghuWsMu4TsQ_pIZOc-Ks="
        alt="NotFound"
        className="w-full h-96 object-contain "
      />

      <h1 className="lg:text-4xl font-bold"> Page Not Found</h1>
      <p className="font-medium text-border italic leading-6">
        The page you are looking for does not exist. You may have mistyped the
        URL
      </p>
      <Link
        to="/"
        className="bg-subMain flex-rows gap-4 text-white font-medium py-2 px-4 rounded-md hover:text-main transitions"
      >
        <BiHomeAlt />
        Back Home
      </Link>
    </div>
  );
}

export default NotFound;
