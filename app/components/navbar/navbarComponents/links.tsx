"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

interface linkProps {
    name: string;
    href: string;
}

export function Links(): JSX.Element {
    const pathName = usePathname()
    
    const links: linkProps[] = [
        { name: "Home", href: "/home" },
        { name: "Tv Shows", href: "/home/shows" },
        { name: "Movies", href: "/home/movies" },
        { name: "Recently Added", href: "/home/recently" },
        { name: "My List", href: "/home/user/list" }
    ]

    return (
        <ul className="md:flex gap-x-4 ml-14 hidden">
            {links.map((link, idx) => (
                <div key={idx}>
                    {pathName === link.href ? (
                        <li>
                            <Link
                                href={link.href}
                                className="text-white font-semibold underline text-sm"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ) : (
                        <li>
                            <Link
                                className="text-gray-300 font-normal text-sm"
                                href={link.href}
                            >
                                {link.name}
                            </Link>
                        </li>
                    )}
                </div>
            ))}
        </ul>
    )
}