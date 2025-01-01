import StreamVideoProvider from "@/providers/StreamClientProvider";
import * as React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "YOOM",
    description: "Video Calling app",
    icons:{
      icon:'/icons/logo.svg'
    }
  }

const RootLayout = ({children}) => {
    return (
        <main>
            <StreamVideoProvider>
                {children}
            </StreamVideoProvider>
        </main>
    )
}

export default RootLayout;