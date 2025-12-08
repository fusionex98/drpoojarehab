"use client";

import { useState, useEffect, useRef } from "react";

export default function FAQBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const API_URL = "https://carebot-kdyr.onrender.com/ask";

  // Wake up Render backend
  useEffect(() => {
    const wakeUpServer = () => {
      fetch("https://carebot-kdyr.onrender.com")
        .then(() => console.log("✅ Render backend wake-up triggered"))
        .catch(() => console.log("⚠️ Failed to wake Render server"));
    };

    wakeUpServer();
    const interval = setInterval(wakeUpServer, 12 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input.trim();
    setInput("");

    // Show user message
    addMessage("user", userText);

    // Temporary "typing..." bubble
    addMessage("bot", "Typing...");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: userText }), // FIXED
      });

      const data = await res.json();

      // Replace "Typing..." with actual reply
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { sender: "bot", text: data.response || "No response" }, // FIXED
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      // Replace typing with error message
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { sender: "bot", text: "⚠️ Server not responding." },
      ]);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-full w-16 h-16 text-2xl shadow-xl hover:scale-105 transition-transform"
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-3 font-semibold flex justify-between items-center rounded-t-2xl">
            FAQ Bot
            <button
              onClick={() => setOpen(false)}
              className="text-white font-bold hover:text-gray-200 transition-colors"
            >
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto bg-gray-50 space-y-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-4 py-2 rounded-2xl text-sm max-w-[75%] shadow-sm break-words ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-200 text-gray-800 self-start mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex border-t border-gray-200 p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your question..."
              className="flex-1 p-3 rounded-2xl border border-gray-300 outline-none text-sm text-gray-900 placeholder-gray-400 focus:ring-1 focus:ring-blue-400"
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-gradient-to-br from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-2xl text-sm hover:opacity-90 transition-opacity"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}