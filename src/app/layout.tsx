import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/themeProvider";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "TaskFlow App",
  description: "Gerencie suas notas e tarefas de forma simples e eficiente.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          inter.className +
          `min-h-screen pt-[80px] sm:pt-[90px] md:pt-[100px] antialiased`
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
