import './globals.css';
import Navbar from '@/components/Navbar';
import Menu from '@/components/Menu';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'WhatBytes Dashboard',
  description: 'Skill Test Dashboard',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex flex-col min-h-screen">
          {/* Navbar at the top */}
          <Navbar />

          {/* Below navbar, flex row: sidebar (Menu) + main content */}
          <div className="flex flex-1">
            {/* Left-side Menubar */}
            <Menu />

            {/* Main content area */}
            <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
