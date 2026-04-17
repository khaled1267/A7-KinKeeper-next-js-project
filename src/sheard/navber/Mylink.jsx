"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Mylink = ({ href, children }) => {
  const pathname = usePathname();

  // বর্তমান পেজের URL আর লিঙ্কের href মিলে গেলে এটি true হবে
  const isActive = pathname === href;

  return (
    <div>
      <Link href={href}>
        <button
          className={`px-3 py-1 rounded  transition-all ${
            isActive
              ? "bg-[#244D3F] text-white " // একটিভ থাকলে পার্পল কালার
              : "bg-white text-[#64748B]" // একটিভ না থাকলে সাদা
          }`}
        >
          <span
            className={isActive ? "pb-1 font-bold border-b-2 border-white" : ""}
          >
            {children}
          </span>
        </button>
      </Link>
    </div>
  );
};

export default Mylink;
