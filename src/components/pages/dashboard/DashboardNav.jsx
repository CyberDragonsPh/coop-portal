import { Icon } from "@iconify/react";
import React from "react";

export default function DashboardNav() {
  return (
    // Nav Container
    <div className="bg-secondary flex flex-col items-end justify-center h-16">
      <div className="flex flex-row space-x-3 mr-10">
        {/* inbox icon */}
        <button className="btn">
          <Icon className="btn-icon" icon="zondicons:envelope" />
          <h2 className="btn-txt">Inbox</h2>
        </button>
        {/* logout icon */}
        <button className="btn">
          <Icon className="btn-icon" icon="fa:sign-out" />
          <h2 className="btn-txt">Inbox</h2>
        </button>
      </div>
    </div>
  );
}
