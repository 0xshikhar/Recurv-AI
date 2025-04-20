import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeftRight, Landmark, LineChart, Vault } from "lucide-react"

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Access key platform features</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/lending" className="w-full">
            <Button variant="outline" className="w-full h-full flex flex-col items-center justify-center py-6 space-y-2">
              <Landmark className="h-6 w-6" />
              <span>Lend & Borrow</span>
            </Button>
          </Link>
          
          <Link href="/swap" className="w-full">
            <Button variant="outline" className="w-full h-full flex flex-col items-center justify-center py-6 space-y-2">
              <ArrowLeftRight className="h-6 w-6" />
              <span>Swap</span>
            </Button>
          </Link>
          
          <Link href="/strategies" className="w-full">
            <Button variant="outline" className="w-full h-full flex flex-col items-center justify-center py-6 space-y-2">
              <LineChart className="h-6 w-6" />
              <span>Strategies</span>
            </Button>
          </Link>
          
          <Link href="/vaults" className="w-full">
            <Button variant="outline" className="w-full h-full flex flex-col items-center justify-center py-6 space-y-2">
              <Vault className="h-6 w-6" />
              <span>Vaults</span>
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
} 