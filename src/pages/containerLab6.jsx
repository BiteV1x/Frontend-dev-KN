import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default function ContainerLab6() {
  return (
    <div className="flex-col flex items-center justify-center w-full">
      <Navbar />
      <h1 className="text-3xl py-10">Lab 6 Page</h1>
      <nav className="flex w-full flex-row justify-between text-base text-red-600 px-5 py-6">
        <Link to="lab6Cookie">lab6Cookie</Link> |{" "}
        <Link to="lab6Local">lab6Local</Link> |{" "}
        <Link to="lab6Session">lab6Session</Link>
      </nav>
      <Outlet />
    </div>
  );
}
