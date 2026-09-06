"use client";

import { useState } from "react";
import Link from "next/link";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <aside className={`chat-widget ${open ? "chat-widget--open" : ""}`} aria-label="Product Hub Africa support">
      {open ? (
        <div className="chat-widget__panel" id="support-chat" role="dialog" aria-label="How can we help?">
          <div className="chat-widget__header">
            <div>
              <strong>Hi there!</strong>
              <p>How can we help?</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close support chat">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <p className="chat-widget__message">Choose a topic and we’ll point you in the right direction.</p>
          <nav className="chat-widget__links" aria-label="Support topics">
            <Link href="/#programmes" onClick={() => setOpen(false)}>Explore programmes <span aria-hidden="true">→</span></Link>
            <Link href="/talent-pool" onClick={() => setOpen(false)}>Hire a talent <span aria-hidden="true">→</span></Link>
            <Link href="/#contact" onClick={() => setOpen(false)}>Contact our team <span aria-hidden="true">→</span></Link>
          </nav>
        </div>
      ) : null}

      <button
        className="chat-widget__trigger"
        type="button"
        aria-label={open ? "Close support chat" : "Open support chat"}
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
