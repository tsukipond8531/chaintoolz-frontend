import React from "react";
import Link from "next/link";
import Router from "@/constants/router";
const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-96 border-r border-r-slate-700 py-5">
      <h2 className="text-4xl px-5">panels</h2>
      <div className="flex flex-col gap-3 mt-5">
        <Link
          href={Router.MintBot}
          className="text-xl p-5 hover:bg-green-300 block"
        >
          Mint Bot
        </Link>
        <Link href="" className="text-xl p-5 hover:bg-green-300 block">
          Mint Bot
        </Link>
        <Link href="" className="text-xl p-5 hover:bg-green-300 block">
          Mint Bot
        </Link>
        <Link href="" className="text-xl p-5 hover:bg-green-300 block">
          Mint Bot
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
