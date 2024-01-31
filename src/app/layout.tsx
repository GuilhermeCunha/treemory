import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Treemory",
    default: "Treemory: Weave Your Family Tree with Memories",
  },
  description:
    "Treemory is an innovative platform designed to intertwine your family tree with rich personal memories and stories. Discover, preserve, and share your family's legacy in a tapestry of cherished moments and ancestral connections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
