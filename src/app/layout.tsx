import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piyush Vyawahare — Software Engineer",
  description:
    "Software Engineer with 3+ years building scalable web applications using MERN stack, React.js, Next.js and TypeScript.",
  keywords: [
    "Piyush Vyawahare",
    "Software Engineer",
    "Full Stack Developer",
    "MERN Stack",
    "React.js",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Piyush Vyawahare" }],
  openGraph: {
    title: "Piyush Vyawahare — Software Engineer",
    description:
      "Software Engineer with 3+ years building scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
