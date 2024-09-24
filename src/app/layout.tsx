import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/custom/header";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navList = [
    {
      title: "博客",
      path: "/",
    },
    {
      title: "关于",
      path: "/about",
    },
  ];

  return (
    <html lang="en">
      <body>
        <div className="w-[1024px] mx-auto absolute top-0 left-0 right-0 z-10 bg-white/30 backdrop-blur-sm">
          <Header navList={navList} />
        </div>
        <ScrollArea className="h-[calc(100vh-40px)]">
          <div className="w-[1024px] mx-auto pt-20">{children}</div>
        </ScrollArea>
        <div className="flex justify-center items-center h-10 text-gray-400">
          © 2024 Cakeroll
        </div>
      </body>
    </html>
  );
}
