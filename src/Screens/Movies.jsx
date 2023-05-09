import React from "react";
import Filters from "../components/Filters";
import Layout from "../Layout/Layout";

function Movies() {
  return (
    <Layout>
      <div className=" container mx-auto px-2 my-6">
        <Filters />
      </div>
    </Layout>
  );
}

export default Movies;
