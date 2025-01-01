"use client"
import  { useState } from "react";
import { useUser } from "@clerk/nextjs";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useGetCallById } from "@/hooks/useGetCallById";
import Loader from "@/components/Loader";
import { useParams } from "next/navigation";
const Meeting = () => {
    const { id } = useParams();
    const {user,isLoaded} = useUser();
    const [isSetupComplete,setIsSetupComplete] = useState(false);
    const {call,isCallLoading} = useGetCallById(id);
    if(!isLoaded || isCallLoading) return <Loader />

    return (
        <main className="h-screen w-full">
            <StreamCall call={call}>
                <StreamTheme>
                    {!isSetupComplete ? (
                         <MeetingSetup setIsSetupComplete={setIsSetupComplete}  />
                    ) : (<MeetingRoom />)}
                </StreamTheme>
            </StreamCall>
        </main>
    )
}

export default Meeting;