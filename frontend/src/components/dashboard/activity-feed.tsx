import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftRight, ArrowRight, LandmarkIcon, LineChart, PiggyBank } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { Button } from "@/components/ui/button"

const activities = [
    {
        id: 1,
        type: "swap",
        description: "Swapped 1.5 ETH for 2500 DAI",
        timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
        icon: ArrowLeftRight,
    },
    {
        id: 2,
        type: "deposit",
        description: "Deposited 500 USDT as collateral",
        timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
        icon: PiggyBank,
    },
    {
        id: 3,
        type: "borrow",
        description: "Borrowed 200 DAI against ETH collateral",
        timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
        icon: LandmarkIcon,
    },
    {
        id: 4,
        type: "strategy",
        description: "Created new DCA strategy for ETH/USDC",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
        icon: LineChart,
    },
]

export function ActivityFeed() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your latest transactions and activities</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="gap-1">
                    View all
                    <ArrowRight className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {activities.map((activity) => (
                        <div key={activity.id} className="flex items-start gap-4">
                            <div className="rounded-full bg-muted p-2">
                                <activity.icon className="h-4 w-4" />
                            </div>
                            <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium">{activity.description}</p>
                                <p className="text-xs text-muted-foreground">
                                    {formatDistanceToNow(activity.timestamp, { addSuffix: true })}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
} 