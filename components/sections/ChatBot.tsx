"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function ChatBot() {
  const { t } = useLang();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/.netlify/functions/chat", {
        method: "POST",
        body: JSON.stringify({
          message: input,
          conversationHistory: messages,
        }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="chat" className="relative bg-onyx py-24 sm:py-32 lg:py-36">
      <Container size="wide">
        <SectionHeader
          index="05"
          eyebrow="Ask ManageFlow"
          title="Chat with our AI assistant."
          sub="Ask anything about our services, pricing, or how we work. Powered by Claude, trained on ManageFlow expertise."
        />

        <Reveal y={14} className="mt-12 sm:mt-14">
          <div className="mx-auto max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-4 rounded-[24px] border border-paper/12 bg-ink p-6 sm:p-8"
            >
              {/* Chat messages */}
              <div className="flex h-[400px] flex-col gap-4 overflow-y-auto rounded-[12px] bg-onyx/50 p-4">
                {!started && messages.length === 0 && (
                  <div className="flex h-full items-center justify-center text-center">
                    <div>
                      <p className="text-[14px] leading-relaxed text-paper/65">
                        Ask me anything about ManageFlow's services, pricing, or process.
                      </p>
                      <p className="mt-3 text-[12px] text-paper/40">
                        I'm here to help 24/7
                      </p>
                    </div>
                  </div>
                )}

                <AnimatePresence>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-[12px] px-4 py-2.5 text-[13px] leading-relaxed ${
                          msg.role === "user"
                            ? "bg-champagne/15 text-paper"
                            : "bg-paper/10 text-paper/80"
                        }`}
                      >
                        {msg.content}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {loading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="rounded-[12px] bg-paper/10 px-4 py-2.5">
                      <div className="flex gap-1.5">
                        <div className="h-2 w-2 rounded-full bg-paper/40 animate-pulse" />
                        <div className="h-2 w-2 rounded-full bg-paper/40 animate-pulse delay-100" />
                        <div className="h-2 w-2 rounded-full bg-paper/40 animate-pulse delay-200" />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input form */}
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask about services, pricing, process..."
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    if (!started) setStarted(true);
                  }}
                  disabled={loading}
                  className="flex-1 rounded-[8px] border border-paper/20 bg-onyx px-4 py-2.5 text-[13px] text-paper placeholder:text-paper/40 outline-none transition-colors focus:border-champagne/55 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="inline-flex items-center justify-center rounded-[8px] bg-champagne/20 p-2.5 text-paper/70 transition-colors hover:bg-champagne/30 disabled:opacity-50"
                >
                  <Send size={16} strokeWidth={1.5} />
                </button>
              </form>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
