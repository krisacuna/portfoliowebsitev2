import React from "react";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Kristopher Acuna. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">This website runs on: </span>
        Next.js & React, Framer Motion, Tailwind CSS,
        TypeScript, React Email & Resend.
      </p>
      
    </footer>
  );
}
