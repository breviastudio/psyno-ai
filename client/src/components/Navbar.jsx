import React from "react";

function Navbar() {
  return (
    <div className="nav flex items-center justify-center p-2 my-5 w-72 backdrop-blur-xl bg-transparent m-auto">
      {/* <ul className="flex items-end gap-5 text-white font-medium font-mono text-xl">
        <li className="cursor-pointer hover:rotate-y-360 hover:translate-y-[-1px] hover:font-bold transition-transform duration-700">
          overview
        </li>
        <li className="cursor-pointer hover:rotate-y-360 hover:translate-y-[-1px] hover:font-bold transition-transform duration-700">
          home
        </li>
        <li className="cursor-pointer hover:rotate-y-360 hover:translate-y-[-1px] hover:font-bold transition-transform duration-700">
          account
        </li>
      </ul> */}
      <span className="font-mono text-2xl font-bold text-[#722f37] hover:rotate-y-360 transition-transform duration-700 cursor-pointer">
        psyona.ai
      </span>
    </div>
  );
}

export default Navbar;
