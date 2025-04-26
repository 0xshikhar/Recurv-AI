"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/layouts/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowDown, RefreshCw } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { toast } from "sonner"

export default function SwapPage() {
    const [fromToken, setFromToken] = useState("eth")
    const [toToken, setToToken] = useState("usdt")
    const [fromAmount, setFromAmount] = useState("1.0")
    const [toAmount, setToAmount] = useState("1755.0")
    const [slippage, setSlippage] = useState(0.5)
    const [isLoading, setIsLoading] = useState(false)

    const handleSwapPositions = () => {
        const tempToken = fromToken
        const tempAmount = fromAmount

        setFromToken(toToken)
        setFromAmount(toAmount)

        setToToken(tempToken)
        setToAmount(tempAmount)
    }

    const handleSwap = () => {
        if (!fromAmount || Number(fromAmount) <= 0) {
            toast.error("Invalid amount", {
                description: "Please enter a valid amount to swap",
            })
            return
        }

        setIsLoading(true)

        // Simulate API call or blockchain transaction
        setTimeout(() => {
            toast.success("Swap successful", {
                description: `Swapped ${fromAmount} ${fromToken.toUpperCase()} for ${toAmount} ${toToken.toUpperCase()}`,
            })
            setIsLoading(false)
        }, 2000)
    }

    return (
        <DashboardLayout>
            <div className="max-w-5xl mx-auto pt-10">
                <h1 className="text-3xl font-bold tracking-tight mb-6">Swap</h1>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <Card className="md:col-span-3">
                        <CardHeader>
                            <CardTitle>Token Swap</CardTitle>
                            <CardDescription>Exchange tokens at the best rates</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="text-sm font-medium">From</div>
                                    <div className="flex space-x-2">
                                        <Select value={fromToken} onValueChange={setFromToken}>
                                            <SelectTrigger className="w-1/3">
                                                <SelectValue placeholder="Token" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="eth">ETH</SelectItem>
                                                <SelectItem value="usdt">USDT</SelectItem>
                                                <SelectItem value="dai">DAI</SelectItem>
                                                <SelectItem value="rvl">RVL</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Input
                                            type="number"
                                            placeholder="0.0"
                                            value={fromAmount}
                                            onChange={(e) => setFromAmount(e.target.value)}
                                            className="flex-1"
                                        />
                                    </div>
                                    <div className="text-xs text-right text-muted-foreground">
                                        Balance: 1.54 ETH
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={handleSwapPositions}
                                        className="rounded-full h-8 w-8"
                                    >
                                        <ArrowDown className="h-4 w-4" />
                                    </Button>
                                </div>

                                <div className="space-y-2">
                                    <div className="text-sm font-medium">To</div>
                                    <div className="flex space-x-2">
                                        <Select value={toToken} onValueChange={setToToken}>
                                            <SelectTrigger className="w-1/3">
                                                <SelectValue placeholder="Token" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="eth">ETH</SelectItem>
                                                <SelectItem value="usdt">USDT</SelectItem>
                                                <SelectItem value="dai">DAI</SelectItem>
                                                <SelectItem value="rvl">RVL</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Input
                                            type="number"
                                            placeholder="0.0"
                                            value={toAmount}
                                            onChange={(e) => setToAmount(e.target.value)}
                                            className="flex-1"
                                            readOnly
                                        />
                                    </div>
                                    <div className="text-xs text-right text-muted-foreground">
                                        Balance: 2500 USDT
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-medium">Slippage Tolerance</div>
                                    <div className="text-sm">{slippage}%</div>
                                </div>
                                <Slider
                                    value={[slippage]}
                                    min={0.1}
                                    max={5}
                                    step={0.1}
                                    onValueChange={(value) => setSlippage(value[0])}
                                />
                            </div>

                            <div className="bg-muted rounded-lg p-3 space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Rate</span>
                                    <span>1 ETH = 1755 USDT</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Fee</span>
                                    <span>0.3%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Route</span>
                                    <span>ETH → USDT</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button
                                className="w-full"
                                onClick={handleSwap}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                                        Swapping...
                                    </>
                                ) : (
                                    "Swap"
                                )}
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Recent Swaps</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-3 border border-border rounded-lg">
                                    <div>
                                        <div className="font-medium">ETH → USDT</div>
                                        <div className="text-sm text-muted-foreground">1.2 ETH for 2106 USDT</div>
                                    </div>
                                    <div className="text-sm text-muted-foreground">2 min ago</div>
                                </div>
                                <div className="flex justify-between items-center p-3 border border-border rounded-lg">
                                    <div>
                                        <div className="font-medium">USDT → RVL</div>
                                        <div className="text-sm text-muted-foreground">500 USDT for 8.33 RVL</div>
                                    </div>
                                    <div className="text-sm text-muted-foreground">1 hour ago</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </DashboardLayout>
    )
} 