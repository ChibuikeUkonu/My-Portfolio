"use client";

import { useState } from "react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋 I’m here to help you learn about Chibyke." },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Something went wrong." },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* 🔵 Floating Launcher (WhatsApp/Intercom style) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white shadow-xl flex items-center justify-center hover:scale-105 transition top-90 right-0 cursor-pointer z-50"
      >
        {isOpen ? "✕" : "💬"}
      </button>

      {/* 🟣 Chat Panel */}
      <div
        className={`fixed bottom-24 right-6 w-[360px] h-[400px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* 🔹 Header (Intercom style) */}
        <div className="bg-blue-600 text-white p-3 flex items-center justify-between">
          <div>
            <p className="font-semibold">Chibyke Assistant</p>
            <p className="text-xs opacity-80">Online</p>
          </div>
          <button onClick={() => setIsOpen(false)}>✕</button>
        </div>

        {/* 🔹 Messages */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-3 py-2 text-sm max-w-[75%] rounded-2xl shadow-sm ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-br-sm"
                    : "bg-white text-gray-800 rounded-bl-sm border"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <p className="text-xs text-gray-500">Typing...</p>
          )}
        </div>

        {/* 🔹 Input (sticky feel like Intercom) */}
        <div className="p-3 border-t flex gap-2 bg-white">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Write a message..."
            className="flex-1 text-sm px-3 py-2 rounded-full bg-gray-100 outline-none"
          />

          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-4 rounded-full text-sm"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}