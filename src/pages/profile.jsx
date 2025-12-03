import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Profile() {
  const { id } = useParams();
  return (
    <section>
      <Navbar />
      <h1>Profile Page, ID: {id}</h1>
    </section>
  );
}
