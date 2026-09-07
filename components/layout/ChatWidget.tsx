"use client";

import Link from "next/link";
import {
  type FormEvent,
  type KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type ChatSource = {
  title: string;
  url: string;
};

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: ChatSource[];
};

type ChatResponse = {
  message?: string;
  sources?: ChatSource[];
  error?: string;
};

const initialMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! I’m the Product Hub Africa assistant. Ask me about our programmes, courses, community, partnerships, or talent pool.",
};

const starterPrompts = [
  "Which programme is right for me?",
  "How can I hire from the talent pool?",
  "How do I join the PHA community?",
];

function createMessageId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [draft, setDraft] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const frame = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    messageEndRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "nearest",
    });
  }, [isSending, messages, open]);

  async function sendMessage(prompt: string) {
    const content = prompt.trim();
    if (!content || isSending) return;

    const userMessage: ChatMessage = {
      id: createMessageId(),
      role: "user",
      content,
    };
    const conversation = [...messages, userMessage];

    setMessages(conversation);
    setDraft("");
    setError(null);
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: conversation
            .slice(-12)
            .map(({ role, content: text }) => ({
              role,
              content: text,
            })),
        }),
      });
      const data = (await response.json()) as ChatResponse;

      if (!response.ok || !data.message) {
        throw new Error(data.error || "The assistant could not respond.");
      }

      const assistantMessage = data.message;
      setMessages((current) => [
        ...current,
        {
          id: createMessageId(),
          role: "assistant",
          content: assistantMessage,
          sources: data.sources,
        },
      ]);
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "The assistant is unavailable right now. Please try again.",
      );
    } finally {
      setIsSending(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(draft);
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  }

  return (
    <aside
      className={`chat-widget ${open ? "chat-widget--open" : ""}`}
      aria-label="Product Hub Africa assistant"
    >
      {open ? (
        <div
          className="chat-widget__panel"
          id="support-chat"
          role="dialog"
          aria-labelledby="support-chat-title"
        >
          <header className="chat-widget__header">
            <div className="chat-widget__identity">
              <strong id="support-chat-title">PHA Assistant</strong>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close Product Hub Africa assistant"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </header>

          <div
            className="chat-widget__conversation"
            role="log"
            aria-live="polite"
            aria-relevant="additions text"
            aria-busy={isSending}
          >
            {messages.map((message) => (
              <article
                className={`chat-widget__bubble chat-widget__bubble--${message.role}`}
                key={message.id}
              >
                <span>{message.role === "assistant" ? "PHA Assistant" : "You"}</span>
                <p>{message.content}</p>
                {message.sources?.length ? (
                  <div className="chat-widget__sources">
                    <strong>Sources</strong>
                    <ul>
                      {message.sources.map((source) => (
                        <li key={source.url}>
                          <a
                            href={source.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {source.title}
                            <span aria-hidden="true">↗</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </article>
            ))}

            {messages.length === 1 ? (
              <div className="chat-widget__starters" aria-label="Suggested questions">
                {starterPrompts.map((prompt) => (
                  <button
                    type="button"
                    key={prompt}
                    onClick={() => void sendMessage(prompt)}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            ) : null}

            {isSending ? (
              <div className="chat-widget__typing" aria-label="PHA Assistant is typing">
                <span />
                <span />
                <span />
              </div>
            ) : null}

            {error ? (
              <div className="chat-widget__error" role="alert">
                <p>{error}</p>
                <button type="button" onClick={() => setError(null)}>
                  Dismiss
                </button>
              </div>
            ) : null}
            <div ref={messageEndRef} />
          </div>

          <footer className="chat-widget__footer">
            <form className="chat-widget__composer" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="pha-chat-message">
                Ask Product Hub Africa a question
              </label>
              <textarea
                id="pha-chat-message"
                ref={inputRef}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Ask about Product Hub Africa…"
                rows={1}
                maxLength={1200}
                disabled={isSending}
              />
              <button
                type="submit"
                disabled={isSending || !draft.trim()}
                aria-label="Send message"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20">
                  <path d="m4 4 17 8-17 8 3-8-3-8Zm3.2 7h8.65L6.5 6.6 8.15 11h-.95Zm.95 2L6.5 17.4l9.35-4.4H8.15Z" fill="currentColor" />
                </svg>
              </button>
            </form>
            <p>
              AI can make mistakes. For official help, <Link href="/contact">contact our team</Link>.
            </p>
          </footer>
        </div>
      ) : null}

      <button
        className="chat-widget__trigger"
        type="button"
        aria-label={open ? "Close Product Hub Africa assistant" : "Open Product Hub Africa assistant"}
        aria-expanded={open}
        aria-controls="support-chat"
        onClick={() => setOpen((current) => !current)}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none">
          <path d="M5.25 5.75h13.5v9.5H9l-3.75 3v-12.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M8.5 9.25h7M8.5 12.25h4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>
    </aside>
  );
}
