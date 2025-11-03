'use client'

import Home from "./home";
import { ThemeProvider } from "next-themes";

export default function App() {
  return (
    <>
      <ThemeProvider attribute="class">
        <Home />
      </ThemeProvider>
    </>
  );
}
