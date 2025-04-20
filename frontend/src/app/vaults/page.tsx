"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/layouts/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Wallet, LockIcon, BadgePercent } from "lucide-react"
import { toast } from "sonner"

export default function VaultsPage() {
    const [investAmount, setInvestAmount] = useState("")
    const [selectedVault, setSelectedVault] = useState<any>(null)

    // In a real app, these would be fetched from an API or smart contract
    const vaults = [
        {
            id: 1,
            name: "Stablecoin Yield",
            description: "Low-risk stablecoin yield aggregator",
            apy: "5.8%",
            riskLevel: "Low",
            assets: "USDT, USDC, DAI",
            totalValueLocked: "$3.6M",
            capacity: "$5M",
            utilizationRate: 72,
            yourInvestment: "$0",
            strategy: "This vault deploys stablecoins across multiple lending protocols to optimize yield while maintaining low risk exposure."
        },
        {
            id: 2,
            name: "ETH Maximizer",
            description: "Medium-risk ETH yield strategy",
            apy: "9.2%",
            riskLevel: "Medium",
            assets: "ETH, stETH",
            totalValueLocked: "$5.2M",
            capacity: "$10M",
            utilizationRate: 52,
            yourInvestment: "$0",
            strategy: "This vault leverages ETH and staked ETH to generate yield through a combination of lending, liquidity providing, and arbitrage opportunities."
        },
        {
            id: 3,
            name: "DeFi Alpha",
            description: "High-risk, high-reward DeFi strategy",
            apy: "18.4%",
            riskLevel: "High",
            assets: "ETH, RVL, other DeFi tokens",
            totalValueLocked: "$1.8M",
            capacity: "$3M",
            utilizationRate: 60,
            yourInvestment: "$0",
            strategy: "This vault actively manages positions across DeFi protocols to capture yield from new opportunities, token incentives, and protocol rewards."
        }
    ]

    const handleInvest = () => {
        if (!investAmount || Number(investAmount) <= 0) {
            toast.error("Invalid amount", {
                description: "Please enter a valid amount to invest",
            })
            return
        }

        toast.success("Investment successful", {
            description: `You have successfully invested $${investAmount} in the ${selectedVault.name} vault.`,
        })

        setInvestAmount("")
    }

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Yield Vaults</h1>
                    <p className="text-muted-foreground">
                        Invest in automated vaults to earn passive yield on your assets
                    </p>
                </div>

                <Tabs defaultValue="all">
                    <TabsList>
                        <TabsTrigger value="all">All Vaults</TabsTrigger>
                        <TabsTrigger value="invested">My Investments</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all" className="mt-6 space-y-6">
                        {vaults.map(vault => (
                            <Card key={vault.id}>
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div>
                                            <CardTitle>{vault.name}</CardTitle>
                                            <CardDescription>{vault.description}</CardDescription>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                                            <BadgePercent className="h-4 w-4" />
                                            APY: {vault.apy}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Risk Level</p>
                                            <div className="flex items-center">
                                                <span className={`inline-block w-2 h-2 rounded-full mr-1.5 ${vault.riskLevel === 'Low' ? 'bg-green-500' :
                                                        vault.riskLevel === 'Medium' ? 'bg-amber-500' :
                                                            'bg-red-500'
                                                    }`}></span>
                                                <p className="font-medium">{vault.riskLevel}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Assets</p>
                                            <p className="font-medium">{vault.assets}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-1">Total Value Locked</p>
                                            <p className="font-medium">{vault.totalValueLocked}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-muted-foreground">Capacity</span>
                                            <span>{vault.utilizationRate}% filled ({vault.totalValueLocked} / {vault.capacity})</span>
                                        </div>
                                        <Progress value={vault.utilizationRate} className="h-2" />
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col sm:flex-row sm:justify-between gap-4 pt-2">
                                    <div className="text-sm text-muted-foreground">
                                        Your investment: {vault.yourInvestment}
                                    </div>
                                    <div className="flex gap-3">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    onClick={() => setSelectedVault(vault)}
                                                >
                                                    View Details
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>{vault.name}</DialogTitle>
                                                    <DialogDescription>{vault.description}</DialogDescription>
                                                </DialogHeader>
                                                <div className="py-4 space-y-4">
                                                    <div className="bg-muted rounded-lg p-4">
                                                        <h4 className="font-medium mb-2">Strategy</h4>
                                                        <p className="text-sm">{vault.strategy}</p>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <p className="text-sm text-muted-foreground mb-1">APY</p>
                                                            <p className="font-medium text-green-500">{vault.apy}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-muted-foreground mb-1">Risk Level</p>
                                                            <div className="flex items-center">
                                                                <span className={`inline-block w-2 h-2 rounded-full mr-1.5 ${vault.riskLevel === 'Low' ? 'bg-green-500' :
                                                                        vault.riskLevel === 'Medium' ? 'bg-amber-500' :
                                                                            'bg-red-500'
                                                                    }`}></span>
                                                                <p className="font-medium">{vault.riskLevel}</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-muted-foreground mb-1">Assets</p>
                                                            <p className="font-medium">{vault.assets}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-muted-foreground mb-1">Total Value Locked</p>
                                                            <p className="font-medium">{vault.totalValueLocked}</p>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-1">
                                                        <div className="flex justify-between text-sm">
                                                            <span className="text-muted-foreground">Capacity</span>
                                                            <span>{vault.utilizationRate}% filled</span>
                                                        </div>
                                                        <Progress value={vault.utilizationRate} className="h-2" />
                                                    </div>

                                                    <div className="mt-4 pt-4 border-t">
                                                        <h4 className="font-medium mb-2">Historical Performance</h4>
                                                        <div className="flex justify-between text-sm mb-2">
                                                            <span className="text-muted-foreground">Last 7 days</span>
                                                            <span className="text-green-500">+0.7%</span>
                                                        </div>
                                                        <div className="flex justify-between text-sm mb-2">
                                                            <span className="text-muted-foreground">Last 30 days</span>
                                                            <span className="text-green-500">+2.3%</span>
                                                        </div>
                                                        <div className="flex justify-between text-sm">
                                                            <span className="text-muted-foreground">Last 90 days</span>
                                                            <span className="text-green-500">+9.8%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>

                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button
                                                    onClick={() => setSelectedVault(vault)}
                                                >
                                                    Invest
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Invest in {vault.name}</DialogTitle>
                                                    <DialogDescription>
                                                        Enter the amount you want to invest in this vault.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <div className="py-4 space-y-4">
                                                    <div className="flex items-center justify-between bg-muted rounded-lg p-3">
                                                        <div className="flex items-center gap-2">
                                                            <BadgePercent className="h-4 w-4 text-green-500" />
                                                            <span className="text-sm">Current APY</span>
                                                        </div>
                                                        <span className="font-medium text-green-500">{vault.apy}</span>
                                                    </div>

                                                    <div className="space-y-2">
                                                        <label className="text-sm font-medium">Investment Amount</label>
                                                        <div className="flex items-center gap-2">
                                                            <Input
                                                                type="number"
                                                                placeholder="0.00"
                                                                value={investAmount}
                                                                onChange={(e) => setInvestAmount(e.target.value)}
                                                            />
                                                            <span className="text-sm font-medium">USD</span>
                                                        </div>
                                                        <p className="text-xs text-muted-foreground">
                                                            Balance: $3,500.00
                                                        </p>
                                                    </div>

                                                    <div className="bg-muted rounded-lg p-3 space-y-2 text-sm">
                                                        <div className="flex justify-between">
                                                            <span className="text-muted-foreground">Deposit Fee</span>
                                                            <span>0.1%</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span className="text-muted-foreground">Withdrawal Fee</span>
                                                            <span>0.2%</span>
                                                        </div>
                                                        <div className="flex justify-between font-medium">
                                                            <span>Expected Weekly Yield</span>
                                                            <span className="text-green-500">
                                                                {investAmount ? `$${(Number(investAmount) * 0.058 / 52).toFixed(2)}` : "$0.00"}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <DialogFooter>
                                                    <Button variant="outline">Cancel</Button>
                                                    <Button onClick={handleInvest}>Confirm Investment</Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </TabsContent>

                    <TabsContent value="invested" className="mt-6">
                        <div className="flex items-center justify-center py-16">
                            <div className="text-center">
                                <Wallet className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                                <h3 className="text-lg font-medium mb-2">No active investments</h3>
                                <p className="text-muted-foreground mb-4">
                                    You haven&apos;t invested in any vaults yet
                                </p>
                                <Button>Explore Vaults</Button>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </DashboardLayout>
    )
} 