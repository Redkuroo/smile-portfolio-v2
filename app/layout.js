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
      <head>
        {/* Space Grotesk (heading) + Roboto (body) */}
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <style>{` :root{ --font-heading: 'Space Grotesk', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; --font-body: 'Roboto', system-ui, -apple-system, 'Segoe UI', Inter, 'Helvetica Neue', Arial, sans-serif; } body { font-family: var(--font-body); } h1,h2,h3,.font-heading{ font-family: var(--font-heading); } `}</style>
      </head>
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
