"use client"

import React, { useEffect, useState } from "react";

// Client-side component that attempts to detect device architecture.
// Strategy:
// 1. Prefer User-Agent Client Hints (navigator.userAgentData.getHighEntropyValues)
// 2. Fallback to parsing navigator.userAgent for common architecture tokens
// Notes:
// - iOS/Safari and some browsers intentionally omit or reduce UA data for privacy.
// - Detection is best-effort and not 100% reliable.

const parseUA = (ua) => {
  const s = (ua || "").toLowerCase();
  if (/armv8|aarch64|arm64/.test(s)) return "arm64";
  if (/armv7|armeabi-v7a/.test(s)) return "armv7";
  if (/x86_64|x86-64|amd64/.test(s)) return "x86_64";
  if (/wow64|win64|x64/.test(s)) return "x86_64";
  if (/i686|i386/.test(s)) return "x86";
  // Some Android devices include "arm" without version
  if (/\barm\b/.test(s)) return "arm";
  return "unknown";
};

export default function DeviceArchitecture() {
  const [arch, setArch] = useState("detecting...");
  const [ua, setUa] = useState("");

  useEffect(() => {
    let mounted = true;
    async function detect() {
      if (typeof navigator === "undefined") {
        if (mounted) setArch("server-side");
        return;
      }

      setUa(navigator.userAgent || "");

      // Prefer User-Agent Client Hints when available (Chrome 89+ and other Chromium browsers)
      const uaData = navigator.userAgentData;
      if (uaData && typeof uaData.getHighEntropyValues === "function") {
        try {
          // Request several high-entropy hints; browsers may provide some or none
          const hints = await uaData.getHighEntropyValues([
            "architecture",
            "bitness",
            "model",
            "platform",
            "platformVersion",
            "uaFullVersion",
            "mobile",
          ]);

          // architecture is the most direct (values like 'arm', 'x86')
          if (hints && hints.architecture) {
            if (mounted) setArch(hints.architecture);
            return;
          }

          // fallback to bitness (e.g., '64') as a hint
          if (hints && hints.bitness) {
            if (mounted) setArch(hints.bitness + "-bit");
            return;
          }
        } catch (e) {
          // getHighEntropyValues may throw if the browser denies the hint or for older API
          // continue to fallback
        }
      }

      // Last resort: parse userAgent string
      if (mounted) setArch(parseUA(navigator.userAgent));
    }

    detect();
    return () => { mounted = false; };
  }, []);

  return (
    <div>
      <p className="text-sm mt-2">Arch: {arch}</p>
  <p className="text-sm mt-2 wrap-break-word">UA: {ua}</p>
    </div>
  );
}
