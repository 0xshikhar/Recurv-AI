"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    ArrowLeftRight,
    Landmark,
    LineChart,
    Vault,
    Settings,
    HelpCircle,
    MessageCircle
} from "lucide-react"
import { ConnectButton } from "@rainbow-me/rainbowkit"

interface SidebarProps {
    className?: string
}

export function Sidebar({ className }: SidebarProps) {
    const pathname = usePathname()

    const navItems = [
        {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
        },
        {
            title: "Lend & Borrow",
            href: "/lending",
            icon: Landmark,
        },
        {
            title: "Swap",
            href: "/swap",
            icon: ArrowLeftRight,
        },
        {
            title: "Strategies",
            href: "/strategies",
            icon: LineChart,
        },
        {
            title: "Vaults",
            href: "/vaults",
            icon: Vault,
        },
        {
            title: "AI Assistant",
            href: "/ai-assistant",
            icon: MessageCircle,
        },
        {
            title: "Settings",
            href: "/settings",
            icon: Settings,
        },
        {
            title: "Help",
            href: "/help",
            icon: HelpCircle,
        },
    ]

    return (
        <div className={cn("fixed w-64 h-screen border-r bg-background p-6 overflow-hidden flex flex-col", className)}>
            <div className="flex flex-col h-full justify-between overflow-y-auto">
                <div className="space-y-6">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                            ReCurv
                        </span>
                    </Link>

                    <nav className="flex flex-col space-y-1 overflow-y-auto">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                                    pathname === item.href ? "bg-accent text-accent-foreground" : "transparent"
                                )}
                            >
                                <item.icon className="mr-3 h-5 w-5" />
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="py-4 w-full flex justify-center">
                    <ConnectButton />
                </div>
            </div>
        </div>
    )
} 