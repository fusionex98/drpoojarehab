import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/Topbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dr.Pooja's Rehab and therapy Clinic",
  description: "Dr.Pooja's Rehab and therapy Clinic is a leading provider of comprehensive rehabilitation and therapy services, dedicated to helping individuals recover and thrive.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-800 min-h-screen flex flex-col`}
      >
        <a
          href="#main-content"
          className="sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-primary focus:px-3 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>

        {/* TopBar (z-50 so it sits on top, no border) */}
        <div className="w-full z-50">
          <TopBar />
        </div>
        {/* <Navbar /> */}

        {/* Main: no top padding that could create a gap above full-bleed Ad */}
        <main id="main-content" className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-0">
          {children}
        </main>
        
      </body>
    </html>
  );
}