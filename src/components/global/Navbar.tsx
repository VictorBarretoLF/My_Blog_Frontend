"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";

const data = [
    {
        title: "Sobre",
        href: "/sobre",
    },
    {
        title: "Projetos",
        href: "/projetos",
    },
    {
        title: "Blog",
        href: "/blog",
    },
];

export default function Navbar() {
    const [scrolledToTop, setScrolledToTop] = useState(true);

    const handleScroll = () => {
        setScrolledToTop(window.scrollY < 50);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="w-full flex justify-between items-center text-sm fixed top-0 h-24 px-7 md:px-10 lg:px-12 border-b border-zinc-800 filter-none pointer-events-auto select-none backdrop-blur">
            <div>
                <Link href="/">B</Link>
            </div>

            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <nav className="md:block hidden">
                    <ul className="flex items-center gap-x-8">
                        {data.map((link, id) => (
                            <li key={id}>
                                <Link
                                    href={link.href}
                                    className="font-incognito dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900 duration-300 text-13"
                                >
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="flex items-center gap-x-4">
                menu
                <MobileMenu />
            </div>
        </header>
    );
}
