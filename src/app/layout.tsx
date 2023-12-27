import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";

import "@/styles/globals.css";
import Navbar from "@/components/global/Navbar";

const openSans = Open_Sans({ subsets: ["latin"] });

const options = {
    title: "Victor Barreto | Software Developer",
    description:
        "Victor Eke is a Software Developer and Technical Writer who is passionate about building solutions and contributing to open source communities",
};

export const metadata: Metadata = {
    title: options.title,
    description: options.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={openSans.className}>
            <body className="dark:bg-zinc-900 bg-white dark:text-white text-zinc-700">
                {children}
            </body>
        </html>
    );
}
