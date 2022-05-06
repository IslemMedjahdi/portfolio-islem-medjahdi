import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="top-0 flex h-[10vh] items-center self-start py-4 px-4">
      <Link to={"/"} className="font-Yellowtail text-4xl text-[#188AEC]">
        Medjahdi <span className="text-[#EC4899]">.</span>
      </Link>
    </div>
  );
}
