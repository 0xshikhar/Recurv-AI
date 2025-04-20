"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/layouts/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ChevronRight, LineChart, Play, Pause, Plus } from "lucide-react"
import { toast } from "sonner"

export default function StrategiesPage() {
    const [activeStrategies, setActiveStrategies] = useState([
        {
            id: 1,
            name: "ETH DCA Strategy",
            type: "DCA",
            status: "active",
            assets: "USDT → ETH",
            frequency: "Weekly",
            amount: "100 USDT",
            startDate: "2023-12-01",
            totalInvested: "400 USDT",
            currentValue: "0.25 ETH ($438.75)",
            roi: "+9.7%"
        },
        {
            id: 2,
            name: "RVL Accumulation",
            type: "Accumulation",
            status: "paused",
            assets: "ETH → RVL",
            frequency: "Monthly",
            amount: "0.1 ETH",
            startDate: "2023-11-15",
            totalInvested: "0.2 ETH",
            currentValue: "4.2 RVL ($42)",
            roi: "+5.3%"
        }
    ])

    const templates = [
        {
            id: 1,
            name: "Dollar Cost Averaging (DCA)",
            description: "Automatically buy a fixed amount of an asset at regular intervals",
            assets: "Any → Any",
            popularity: "Most popular"
        },
        {
            id: 2,
            name: "Grid Trading",
            description: "Place buy and sell orders at set intervals to profit from price oscillations",
            assets: "Any → Any",
            popularity: ""
        },
        {
            id: 3,
            name: "TWAP Strategy",
            description: "Time-weighted average price strategy for large orders with minimal impact",
            assets: "Any → Any",
            popularity: ""
        },
        {
            id: 4,
            name: "Limit Order",
            description: "Automatically execute trades when assets reach a target price",
            assets: "Any → Any",
            popularity: ""
        }
    ]

    const handleCreateStrategy = () => {
        toast.success("Strategy created", {
            description: "Your new trading strategy has been created successfully.",
        })
    }

    const toggleStrategyStatus = (id: number) => {
        setActiveStrategies(strategies =>
            strategies.map(strategy =>
                strategy.id === id
                    ? { ...strategy, status: strategy.status === 'active' ? 'paused' : 'active' }
                    : strategy
            )
        )

        const strategy = activeStrategies.find(s => s.id === id)
        const newStatus = strategy?.status === 'active' ? 'paused' : 'active'

        toast.success(`Strategy ${newStatus}`, {
            description: `Your "${strategy?.name}" strategy has been ${newStatus}.`,
        })
    }

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Trading Strategies</h1>
                        <p className="text-muted-foreground">
                            Create and manage automated trading strategies
                        </p>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>
                                <Plus className="mr-2 h-4 w-4" />
                                New Strategy
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                            <DialogHeader>
                                <DialogTitle>Create new strategy</DialogTitle>
                                <DialogDescription>
                                    Set up your automated trading strategy with a few simple steps.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="space-y-2">
                                    <Label htmlFor="strategy-name">Strategy Name</Label>
                                    <Input id="strategy-name" placeholder="My Trading Strategy" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="strategy-type">Strategy Type</Label>
                                        <Select defaultValue="dca">
                                            <SelectTrigger id="strategy-type">
                                                <SelectValue placeholder="Select strategy type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="dca">Dollar Cost Averaging</SelectItem>
                                                <SelectItem value="grid">Grid Trading</SelectItem>
                                                <SelectItem value="twap">TWAP</SelectItem>
                                                <SelectItem value="limit">Limit Order</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="frequency">Frequency</Label>
                                        <Select defaultValue="weekly">
                                            <SelectTrigger id="frequency">
                                                <SelectValue placeholder="Select frequency" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="hourly">Hourly</SelectItem>
                                                <SelectItem value="daily">Daily</SelectItem>
                                                <SelectItem value="weekly">Weekly</SelectItem>
                                                <SelectItem value="monthly">Monthly</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="from-token">From Token</Label>
                                        <Select defaultValue="usdt">
                                            <SelectTrigger id="from-token">
                                                <SelectValue placeholder="Select token" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="eth">ETH</SelectItem>
                                                <SelectItem value="usdt">USDT</SelectItem>
                                                <SelectItem value="dai">DAI</SelectItem>
                                                <SelectItem value="rvl">RVL</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="to-token">To Token</Label>
                                        <Select defaultValue="eth">
                                            <SelectTrigger id="to-token">
                                                <SelectValue placeholder="Select token" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="eth">ETH</SelectItem>
                                                <SelectItem value="usdt">USDT</SelectItem>
                                                <SelectItem value="dai">DAI</SelectItem>
                                                <SelectItem value="rvl">RVL</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="amount">Amount per transaction</Label>
                                    <div className="flex space-x-2">
                                        <Input id="amount" placeholder="100" type="number" />
                                        <span className="flex items-center whitespace-nowrap text-sm">USDT</span>
                                    </div>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button onClick={handleCreateStrategy}>Create Strategy</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                <Tabs defaultValue="active">
                    <TabsList>
                        <TabsTrigger value="active">Active Strategies</TabsTrigger>
                        <TabsTrigger value="templates">Strategy Templates</TabsTrigger>
                    </TabsList>

                    <TabsContent value="active" className="space-y-4 mt-6">
                        {activeStrategies.length > 0 ? (
                            activeStrategies.map(strategy => (
                                <Card key={strategy.id}>
                                    <CardHeader className="pb-2">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <CardTitle>{strategy.name}</CardTitle>
                                                <CardDescription>{strategy.type} Strategy</CardDescription>
                                            </div>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => toggleStrategyStatus(strategy.id)}
                                            >
                                                {strategy.status === 'active' ? (
                                                    <Pause className="h-4 w-4" />
                                                ) : (
                                                    <Play className="h-4 w-4" />
                                                )}
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pb-2">
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            <div>
                                                <p className="text-sm text-muted-foreground">Assets</p>
                                                <p className="font-medium">{strategy.assets}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">Frequency</p>
                                                <p className="font-medium">{strategy.frequency}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">Amount</p>
                                                <p className="font-medium">{strategy.amount}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">Status</p>
                                                <p className="font-medium capitalize">
                                                    <span className={`inline-block w-2 h-2 rounded-full mr-1.5 ${strategy.status === 'active' ? 'bg-green-500' : 'bg-amber-500'
                                                        }`}></span>
                                                    {strategy.status}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex justify-between border-t pt-4">
                                        <div>
                                            <p className="text-sm text-muted-foreground">
                                                Total invested: {strategy.totalInvested} • Current value: {strategy.currentValue} •
                                                ROI: {strategy.roi}
                                            </p>
                                        </div>
                                        <Button variant="ghost" size="sm" className="gap-1">
                                            Details
                                            <ChevronRight className="h-4 w-4" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))
                        ) : (
                            <div className="text-center py-12">
                                <LineChart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                                <h3 className="text-lg font-medium mb-2">No active strategies</h3>
                                <p className="text-muted-foreground mb-4">
                                    Create a new strategy to automate your trading
                                </p>
                                <Button>Create Strategy</Button>
                            </div>
                        )}
                    </TabsContent>

                    <TabsContent value="templates" className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {templates.map(template => (
                                <Card key={template.id} className="relative overflow-hidden">
                                    <CardHeader>
                                        <CardTitle>{template.name}</CardTitle>
                                        <CardDescription>{template.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center justify-between mb-4">
                                            <p className="text-sm text-muted-foreground">Assets</p>
                                            <p className="text-sm font-medium">{template.assets}</p>
                                        </div>
                                        {template.popularity === "Most popular" && (
                                            <div className="absolute top-4 right-4">
                                                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                                                    Popular
                                                </span>
                                            </div>
                                        )}
                                    </CardContent>
                                    <CardFooter className="border-t">
                                        <Button className="w-full">Use Template</Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </DashboardLayout>
    )
} 