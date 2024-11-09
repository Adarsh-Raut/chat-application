import React from "react";
import CreateUser from "./components/CreateUser";
import { Toaster } from "react-hot-toast";

type Props = {};

function Home({}: Props) {
  return (
    <>
      <CreateUser />
      <Toaster position="top-right" />
    </>
  );
}

export default Home;
