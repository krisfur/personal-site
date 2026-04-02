import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteUrl } from "./site-config";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Krzysztof Furman | Senior Data Engineer",
    template: "%s | Krzysztof Furman",
  },
  description:
    "Senior Data Engineer focused on reliable data systems, developer tooling, and cloud infrastructure across Python, Go, Rust, SQL, TypeScript, Airflow, Snowflake, AWS, and Azure.",
  applicationName: "Krzysztof Furman",
  keywords: [
    "Krzysztof Furman",
    "Senior Data Engineer",
    "Data Engineering",
    "Python",
    "Go",
    "Rust",
    "TypeScript",
    "SQL",
    "Apache Airflow",
    "Snowflake",
    "AWS",
    "Azure",
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
    title: "Krzysztof Furman | Senior Data Engineer",
    description:
      "Senior Data Engineer focused on reliable data systems, developer tooling, and cloud infrastructure.",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krzysztof Furman | Senior Data Engineer",
    description:
      "Senior Data Engineer focused on reliable data systems, developer tooling, and cloud infrastructure.",
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
