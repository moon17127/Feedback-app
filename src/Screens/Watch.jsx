import { BiArrowBack } from "react-icons/bi";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { FaCloudDownloadAlt, FaHeart } from "react-icons/fa";

function Watch() {
  const { id } = useParams();
  const videoUrl = `https://www.youtube.com/embed/${id}`;
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="container  h-full md:h-[calc(100vh-30px)] mx-auto bg-dry p-6 mb-12">
        <div className="flex-btn flex-wrap mb-6 gap-2  bg-main rounded border border-gray-800 p-6">
          <button
            onClick={() => navigate(-1)}
            className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray"
          >
            <BiArrowBack />
          </button>
          <div className="flex-btn sm:w-auto w-full gap-5">
            <button className="bg-white hover:text-subMain transitions bg-opacity-30 text-white rounded px-4 py-3  text-sm ">
              <FaHeart />
            </button>
            <button className="bg-subMain hover:text-main transitions  flex flex-rows gap-2 text-white rounded px-8 py-3 font-medium text-sm ">
              <FaCloudDownloadAlt /> Download
            </button>
          </div>
        </div>
        {/* video */}
        <div className="  h-96 md:h-4/5">
          <iframe
            className="  w-full h-full  rounded"
            frameborder="0"
            allowfullscreen=""
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            oallowfullscreen="true"
            msallowfullscreen="true"
            title="W3Schools Free Online Web Tutorials"
            src={videoUrl}
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}

export default Watch;
