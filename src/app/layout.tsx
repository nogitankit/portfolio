import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Ankit Sharma (mayo_) — Full-Stack Developer",
  description:
    "Portfolio of Ankit Sharma (mayo_): Specializing in Next.js, Node.js, and full-stack applications.",
  authors: [{ name: "Ankit Sharma", url: "https://github.com/nogitankit" }],
  openGraph: {
    title: "Ankit Sharma — Full-Stack Engineer",
    description:
      "Building robust full-stack web platforms, secure database architectures, and automated infrastructure using Docker.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Sharma (mayo_) — Full-Stack Developer",
    description:
      "Full-stack engineer building scalable web applications and automated infrastructure.",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
