"use client";

import { useState } from "react";

export function ShareActions() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
  };
  const share = async () => {
    if (navigator.share) await navigator.share({ title: document.title, url: window.location.href });
    else await copy();
  };
  return <div className="article-actions"><button type="button" onClick={share}>Share</button><button type="button" onClick={copy}>{copied ? "Copied" : "Copy link"}</button></div>;
}
