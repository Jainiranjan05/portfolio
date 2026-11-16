import type { Metadata } from "next";
import "./globals.css";
const site = process.env.NEXT_PUBLIC_SITE_URL || "https://jai-niranjan.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: "Jai Niranjan | AI, Software & Data Engineering", template: "%s | Jai Niranjan" },
  description: "Jai Niranjan is a Computer Science Engineering student at SRMIST exploring AI/ML, data engineering, software systems, applied research and entrepreneurship.",
  applicationName: "Jai Niranjan Portfolio",
  alternates: { canonical: "/" },
  openGraph: { title: "Jai Niranjan | AI, Software & Data Engineering", description: "Projects, research, experience and ventures by Jai Niranjan.", url: site, siteName: "Jai Niranjan", type: "website", images: [{ url: "/jai.jpg", width: 480, height: 600, alt: "Jai Niranjan" }] },
  twitter: { card: "summary_large_image", title: "Jai Niranjan | AI, Software & Data Engineering", description: "Projects, research, experience and ventures by Jai Niranjan.", images: ["/jai.jpg"] },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><head>
    <meta name="theme-color" content="#0e0f12" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Instrument+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
  </head><body>{children}</body></html>);
}
