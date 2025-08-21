import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./Sidebar";
import ScrollTopButton from "./components/ScrollTopButton";
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
  title: "John Smile Mella | Developer & Designer",
  description: "I need help",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <ThemeProvider>
          <Sidebar />
          {children}

          {/* Sticky bottom-right button (client component) */}
          <ScrollTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
