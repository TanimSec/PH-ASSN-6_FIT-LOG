"use client";

import { useEffect, useState } from "react";

export default function Toast() {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout>;

    function handleToast(event: Event) {
      const customEvent = event as CustomEvent<string>;

      setMessage(customEvent.detail);
      setVisible(true);

      clearTimeout(hideTimer);

      hideTimer = setTimeout(() => {
        setVisible(false);
      }, 2500);
    }

    window.addEventListener("fitlog-toast", handleToast);

    return () => {
      window.removeEventListener("fitlog-toast", handleToast);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="
        fixed
        left-4
        right-4
        top-4
        z-[9999]
        mx-auto
        flex
        max-w-sm
        items-center
        gap-3
        rounded-xl
        border
        border-[#2d313b]
        bg-[#15171d]
        px-4
        py-3
        text-sm
        text-white
        shadow-2xl
        sm:left-auto
        sm:right-5
        sm:top-5
        sm:max-w-md
      "
      role="status"
      aria-live="polite"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#c2f800] text-sm font-bold text-black">
        ✓
      </span>

      <span>{message}</span>
    </div>
  );
}