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
            <Sidebar className="hidden lg:block fixed top-0 left-0 h-screen z-30" />

            {/* Mobile navigation drawer */}
            <MobileNav open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col">

                {/* Main content with responsive padding for sidebar */}
                <main className="flex-1 p-6 w-full lg:pl-[calc(16rem+1.5rem)] min-h-[calc(100vh-4rem)] overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    )
} 