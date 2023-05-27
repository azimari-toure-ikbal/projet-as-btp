import React from "react";

export default function Navbar() {
  return (
    <div className="flex w-full justify-between py-16">
      <h1 className="text-lg font-bold text-primary">Projet AS</h1>
      <ul className="flex gap-6">
        <li>Home</li>
        <li>About</li>
        <li>Courses</li>
        <li>Our Service</li>
        <li>Contact</li>
        <li>Sign In</li>
      </ul>
    </div>
  );
}
