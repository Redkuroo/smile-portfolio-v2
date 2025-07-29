import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./Sidebar";
import { ThemeProvider } from "./ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Teressa Conde | UI/UX Designer",
  description: "UI/UX Designer specializing in creating user-centered experiences and intuitive interfaces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <ThemeProvider>
          <Sidebar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
