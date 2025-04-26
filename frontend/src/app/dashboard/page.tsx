"use client"
import Link from "next/link"
import { DashboardLayout } from "@/components/layouts/dashboard-layout"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { MarketOverview } from "@/components/dashboard/market-overview"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { AIAssistant } from "@/components/dashboard/ai-assistant"
import { WalletConnect } from "@/components/dashboard/wallet-connect"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { MenuIcon } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <DashboardLayout>
      <header className="top-0 z-20 flex h-16 items-center gap-4 border-b bg-background px-6 lg:pl-[calc(16rem+1.5rem)]">
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
              <span className="font-bold text-xl text-black bg-clip-text dark:text-white">
                Welcome to ReCurv 🎉
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <ModeToggle />
          </div>
        </div>
      </header>
          
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <MarketOverview />
          <QuickActions />
          <ActivityFeed />
        </div>
        <div className="space-y-6">
          <WalletConnect />
          <AIAssistant />
        </div>
      </div>
    </DashboardLayout>
  )
}
