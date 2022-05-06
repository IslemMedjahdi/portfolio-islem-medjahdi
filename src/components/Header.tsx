import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="px-4 h-[10vh] flex items-center self-start">
      <Link to={"/"} className="font-Yellowtail text-[#188AEC] text-4xl">
        Medjahdi <span className="text-[#EC4899]">.</span>
      </Link>
    </div>
  );
}
