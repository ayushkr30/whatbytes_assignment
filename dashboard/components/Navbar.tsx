'use client';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-4 border-b border-gray-200 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/image.png" alt="" width={24} height={24} />
        <h1 className="font-bold text-lg">WhatBytes</h1>
      </div>

      {/* Profile Button */}
      <button className="flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded--md shadow-sm hover:shadow-md transition rounded-md">
        <Image
          src="/profile.png"
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="font-semibold text-sm">Rahil Siddique</span>
      </button>
    </nav>
  );
}
