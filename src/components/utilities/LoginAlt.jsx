import React from "react";
import { Icon } from "@iconify/react";

export default function LoginAlt() {
  return (
    <div className="flex flex-row items-center mt-3 md:mt-8">
      <h4 className="font-sans font-extralight text-white text-xl p-3">
        or Login Using
      </h4>
      <button className="group overflow-hidden h-12 rounded-lg flex items-center  hover:text-secondary font-sans font-medium text-xl text-white indent-2">
        <Icon className="text-4xl" icon="akar-icons:google-contained-fill" />
        Google Account
      </button>
    </div>
  );
}
