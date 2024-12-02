"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { UserButton } from '@clerk/nextjs';
import { CreditCard } from 'lucide-react';
import { ToggleMenu } from './toggle-menu';
import { useTheme } from 'next-themes';
import { dark } from "@clerk/themes"

const Navbar = () => {
    const { theme } = useTheme();
    const [active, setActive] = useState(false);

    if (typeof window != "undefined") {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 8.5) {
                setActive(true)
            } else {
                setActive(false)
            }
        })
    }

    return (
        <header className={`${active ? "mx-auto max-w-7xl sticky top-0 left-0 shadow-md z-50 onbackdrop-blur transition-all durantion-300" : "max-w-7xl z-50 sticky w-full mx-auto"}`}>
            <div className=" p-4 flex justify-between items-center gap-3">
                <Link href="/resumes" className="flex items-center gap-2">
                    <Image src={logo} alt="Logo" className="w-7 h-7" />
                    <span className="font-bold sm:text-2xl tracking-tight ">
                        AI Resume
                    </span>
                </Link>
                <div className="flex items-center gap-3">
                    <ToggleMenu />
                    <UserButton
                        appearance={{
                            baseTheme: theme === "dark" ? dark : undefined,
                            elements: {
                                avatarBox: {
                                    width: 35,
                                    height: 35
                                }
                            }
                        }}>
                        <UserButton.MenuItems>
                            <UserButton.Link
                                label="Billing"
                                labelIcon={<CreditCard className="size-4" />}
                                href="/billing"
                            />
                        </UserButton.MenuItems>
                    </UserButton>
                </div>

            </div>
        </header>
    )
}

export default Navbar
