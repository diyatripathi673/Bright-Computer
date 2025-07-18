import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Logo from "../components/Logo";
import { MdManageSearch } from "react-icons/md";
import { Outlet } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] flex">
      {" "}
      {/* ✅ Fixed spacing */}
      <aside className="bg-gray-200 min-h-190 w-full max-w-60 shadow-lg p-4 ">
        <div className="flex items-center justify-center mb-6">
          <div
            className="text-2xl text-gray-500 hover:text-gray-700 cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12"
            onClick={() => setDropdownOpen((prev) => !prev)} // Optional: define setDropdownOpen if needed
          >
            <FaUser />
          </div>
        </div>
        <p>username</p>
        <p>userole</p>
        <div>
          <nav className="grid p-4">
            <Link to={"all-users"} className="px-2 py-1 hover:bg-slate-100">
              All Users
            </Link>
            <Link to={"all-product"} className="px-2 py-1 hover:bg-slate-100">
              product
            </Link>
          </nav>
        </div>
      </aside>
      <main>main</main>
    </div>
  );
};

export default AdminPanel;
