import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdul Hadi Jalil | Data, AI & Full-Stack Engineer",
  description: "Portfolio of Abdul Hadi Jalil, a data and AI engineer and Flutter and Python full-stack developer.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
