import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { AuthProvider } from "@/components/auth/auth-provider";
import { NavbarNew as Navbar } from "@/components/layout/navbar-new";
import { FooterFixed as Footer } from "@/components/layout/footer-fixed";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false, // Disable preloading
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false, // Disable preloading
});

export const metadata: Metadata = {
  title: "KiTS Hub - CRM Solutions & Business Software",
  description: "Empowering businesses with cutting-edge CRM solutions and custom software development. Transform your operations with our comprehensive suite of tools and services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense>
          <AuthProvider>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
