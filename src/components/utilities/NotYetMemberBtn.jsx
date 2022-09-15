import React from "react";
import { NavLink } from "react-router-dom";

export default function NotYetMemberBtn() {
  return (
    <div className="flex flex-col items-center justify-center content-center p-2">
      <h1 className="font-sans font-light text-white text-2xl">
        Not yet a Member?
      </h1>
      <NavLink
        className="font-sans font-bold text-white hover:text-secondary text-2xl"
        to="/register"
      >
        Register Here.
      </NavLink>
    </div>
  );
}
