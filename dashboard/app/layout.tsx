import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
     <body>
    <div className="h-screen flex ">
    {/* LEFT */}
    <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] px-5 ">
    <Link
       href="/"
       className="flex items-center justify-center lg:justify-start gap-2"
     >
     </Link>
     <Menu />

    </div>
      {/* RIGHT */}
    <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
    
    </div>
   </div>
   </body>
 </html>
  );
}
