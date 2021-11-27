import React from "react";
import Layout from "../../components/Layout";
import Timer from "../../components/Timer";

function Home(): React.ReactElement {
  return (
    <Layout>
      <Timer />
    </Layout>
  );
}

export default Home;
