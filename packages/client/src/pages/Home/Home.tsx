import React from "react";
import Layout from "../../components/Layout";
import TimerButton from "../../components/TimerButton";
import TotalTime from "../../components/TotalTime";

function Home(): React.ReactElement {
  return (
    <Layout>
      <TotalTime />
      <TimerButton />
    </Layout>
  );
}

export default Home;
