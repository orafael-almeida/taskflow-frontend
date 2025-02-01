import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/themeProvider";

export const metadata: Metadata = {
  title: "TaskFlow App",
  description: "Gerencie suas notas e tarefas de forma simples e eficiente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
