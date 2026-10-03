import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteUrl } from "./site-config";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Krzysztof Furman | Lead Data Engineer",
    template: "%s | Krzysztof Furman",
  },
  description:
    "Lead Data Engineer focused on reliable data systems, developer tooling, and cloud infrastructure across C++, Go, Python, Rust, SQL, TypeScript, Airflow, AWS, Azure, and Snowflake.",
  applicationName: "Krzysztof Furman",
  keywords: [
    "Krzysztof Furman",
    "Lead Data Engineer",
    "Data Engineering",
    "C++",
    "Go",
    "Python",
    "Rust",
    "SQL",
    "TypeScript",
    "Apache Airflow",
    "AWS",
    "Azure",
    "Snowflake",
  ],
  authors: [{ name: "Krzysztof Furman" }],
  creator: "Krzysztof Furman",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Krzysztof Furman",
    title: "Krzysztof Furman | Lead Data Engineer",
    description:
      "Lead Data Engineer focused on reliable data systems, developer tooling, and cloud infrastructure.",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krzysztof Furman | Lead Data Engineer",
    description:
      "Lead Data Engineer focused on reliable data systems, developer tooling, and cloud infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
