import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex w-full items-center justify-between py-16">
      <h1 className="text-lg font-bold text-secondary">Projet AS</h1>
      <ul className="flex items-center gap-6">
        <Link
          href={"#"}
          className="transition-all duration-200 hover:text-secondary"
        >
          Home
        </Link>
        <Link
          href={"#"}
          className="transition-all duration-200 hover:text-secondary"
        >
          About
        </Link>
        <Link
          href={"#"}
          className="transition-all duration-200 hover:text-secondary"
        >
          Courses
        </Link>
        <Link
          href={"#"}
          className="transition-all duration-200 hover:text-secondary"
        >
          Our Service
        </Link>
        <Link
          href={"#"}
          className="transition-all duration-200 hover:text-secondary"
        >
          Contact
        </Link>
        <Link
          href={"#"}
          className="w-24 rounded-full bg-secondary p-2 text-center text-white"
        >
          Sign In
        </Link>
      </ul>
    </div>
  );
}
