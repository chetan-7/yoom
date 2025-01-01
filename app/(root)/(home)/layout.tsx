import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import * as React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video Calling app",
  icons:{
    icon:'/icons/logo.svg'
  }
}

const HomeLayOut = ({children}) => {
    return (
        <main className="relative">
        <Navbar />
  
        <div className="flex">
          <Sidebar />
          
          <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
            <div className="w-full">{children}</div>
          </section>
        </div>
      </main>
    )
}

export default HomeLayOut;