import Link from "next/link"
import { DashboardLayout } from "@/components/layouts/dashboard-layout"
import { ActivityFeed } from "@/components/dashboard/activity-feed"
import { MarketOverview } from "@/components/dashboard/market-overview"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { AIAssistant } from "@/components/dashboard/ai-assistant"
import { WalletConnect } from "@/components/dashboard/wallet-connect"

export default function Home() {
  return (
    <DashboardLayout>
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
