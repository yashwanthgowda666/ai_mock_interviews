"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";


enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

interface SavedMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

interface AgentProps {
  userName?: string;
  userId?: string;
  type: "generate" | "interview";
  questions?: string[];
}

const Agent = ({ userName, userId, type, questions }: AgentProps) => {
  const router = useRouter();

  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [messages, setMessages] = useState<SavedMessage[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lastMessage, setLastMessage] = useState("");

  // ================= VAPI EVENTS =================
 

  // ================= TRANSCRIPT =================
  useEffect(() => {
    if (messages.length > 0) {
      setLastMessage(messages[messages.length - 1].content);
    }

    if (callStatus === CallStatus.FINISHED && type === "generate") {
      router.push("/");
    }
  }, [messages, callStatus, router, type]);

  // ================= CALL START =================
  const handleCall = async () => {
  setCallStatus(CallStatus.CONNECTING);

  // simulate connecting delay
  setTimeout(() => {
    setCallStatus(CallStatus.ACTIVE);
    setIsSpeaking(true);

    // greeting message like video
    setMessages([
      {
        role: "assistant",
        content: "Hello, my name is PrepWise AI. Nice to meet you!",
      },
    ]);

    // stop speaking after animation time
    setTimeout(() => {
      setIsSpeaking(false);
    }, 2500);
  }, 800);
};



 const handleDisconnect = () => {
  setCallStatus(CallStatus.FINISHED);
};


  return (
    <>
      {/* ================= CALL UI ================= */}
      <div className="call-view">
        {/* AI CARD */}
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt="AI"
              width={70}
              height={70}
              className="object-cover"
            />
            {isSpeaking && (
  <span className="absolute w-full h-full rounded-full border-2 border-blue-400 animate-ping" />
)}

          </div>
          <h3>AI Interviewer</h3>
        </div>

        {/* USER CARD */}
        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="User"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>

      {/* ================= TRANSCRIPT ================= */}
      {messages.length > 0 && (
        <div className="transcript-border">
          <div className="transcript">
            <p
              className={cn(
                "transition-opacity duration-500 opacity-0",
                "animate-fadeIn opacity-100"
              )}
            >
              {lastMessage}
            </p>
          </div>
        </div>
      )}

      {/* ================= BUTTON ================= */}
      <div className="w-full flex justify-center">
        {callStatus !== "ACTIVE" ? (
          <button className="btn-call" onClick={handleCall}>
            {callStatus === "INACTIVE" || callStatus === "FINISHED"
              ? "Call"
              : "..."}
          </button>
        ) : (
          <button className="btn-disconnect" onClick={handleDisconnect}>
            End
          </button>
        )}
      </div>
    </>
  );
};

export default Agent;
