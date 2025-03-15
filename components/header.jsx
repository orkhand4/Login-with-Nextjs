import React from "react";

export default function Header() {
  return (
<header className="flex justify-between items-center p-[24px] bg-black text-white">
      <h1 className="text-3xl font-semibold cursor-pointer">Logo</h1>
      <button className="cursor-pointer border border-white rounded py-2 px-6 tracking-wider">Login</button>
    </header>
  );
}
