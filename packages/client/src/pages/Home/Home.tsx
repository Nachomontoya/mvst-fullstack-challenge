import React from "react";
import Layout from "../../components/Layout";
import Timer from "../../components/TimerButton";

function Home(): React.ReactElement {
  return (
    <Layout>
      <Timer />
    </Layout>
  );
}

export default Home;
