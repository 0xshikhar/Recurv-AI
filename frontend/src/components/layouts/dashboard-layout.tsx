"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Sidebar } from "@/components/layouts/sidebar"
import { MobileNav } from "@/components/layouts/mobile-nav"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"

interface DashboardLayoutProps {
    children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const pathname = usePathname()

    return (
        <div className="flex min-h-screen bg-background">
            {/* Sidebar for desktop */}
            <Sidebar className="hidden lg:flex" />

            {/* Mobile navigation drawer */}
            <MobileNav open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col">
                {/* Top navigation bar */}
                <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
                    <Button
                        variant="outline"
                        size="icon"
                        className="lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>

                    <div className="flex-1 flex items-center justify-between">
                        <div>
                            <Link
                                href="/"
                                className="flex items-center space-x-2"
                            >
                                <span className="font-bold text-xl text-white bg-clip-text">
                                    Welcome to ReCurv 🎉
                                </span>
                            </Link>
                        </div>

                        <div className="flex items-center gap-4">
                            <ModeToggle />
                        </div>
                    </div>
                </header>

                {/* Main content */}
                <main className="flex-1 overflow-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    )
} 