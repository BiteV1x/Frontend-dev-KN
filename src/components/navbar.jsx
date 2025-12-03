import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row text-xl w-[100vw] justify-between">
        <li>
          <Link to="/">lab1</Link>
        </li>
        <li>
          <Link to="/lab2">lab2-3</Link>
        </li>
        <li>
          <Link to="/lab4">lab4</Link>
        </li>
        <li>
          <Link to="/lab4await">lab4 await</Link>
        </li>
        <li>
          <Link to="/lab5">lab5 </Link>
        </li>
        <li>
          <Link to="/lab5axios">lab5 axios </Link>
        </li>
        <li>
          <Link to="/containerLab6">lab 6 container</Link>
        </li>
        <li>
          <Link to="/profile/123">profile id</Link>
        </li>
      </ul>
    </nav>
  );
}
