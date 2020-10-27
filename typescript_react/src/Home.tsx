import React from "react";

interface homeProps {
  title: string;
  desc: string;
  id: number;
}

const Home = ({ title, desc, id }: homeProps) => {
  return (
    <>
      <h2>{title}</h2>
      <h3>{desc}</h3>
      <h4>{id}</h4>
    </>
  );
};

Home.defaultProps = {
  id: 1,
};

export default Home;
