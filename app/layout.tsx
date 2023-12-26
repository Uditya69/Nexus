import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "./components/theme-provider";
import { ChatContextProvider } from "./context/ChatContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEXUS",
  description: "",
  icons: {
    icon: {
      url: "/favicon.ico",
      href: "/favicon.ico",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader />
          <AuthContextProvider>
            
            <ChatContextProvider> {children}</ChatContextProvider>
          </AuthContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
