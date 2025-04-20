"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export function LendingMarkets() {
    const [amount, setAmount] = useState("")
    const [selectedAsset, setSelectedAsset] = useState<any>(null)

    // In a real app, this would be fetched from the blockchain or API
    const markets = [
        {
            asset: "ETH",
            apy: "3.2%",
            totalSupplied: "245.3 ETH",
            totalBorrowed: "182.6 ETH",
            utilizationRate: "74%",
            yourSupplied: "0 ETH"
        },
        {
            asset: "USDT",
            apy: "5.8%",
            totalSupplied: "1.2M USDT",
            totalBorrowed: "950K USDT",
            utilizationRate: "79%",
            yourSupplied: "0 USDT"
        },
        {
            asset: "DAI",
            apy: "4.9%",
            totalSupplied: "890K DAI",
            totalBorrowed: "720K DAI",
            utilizationRate: "81%",
            yourSupplied: "0 DAI"
        },
        {
            asset: "RVL",
            apy: "8.5%",
            totalSupplied: "125K RVL",
            totalBorrowed: "82K RVL",
            utilizationRate: "65%",
            yourSupplied: "0 RVL"
        },
    ]

    const handleLend = () => {
        if (!amount || Number(amount) <= 0) {
            toast.error("Invalid amount", {
                description: "Please enter a valid amount to lend",
            })
            return
        }

        // Here you would connect to the smart contract to lend the tokens
        toast.success("Transaction submitted", {
            description: `Your lending transaction for ${amount} ${selectedAsset.asset} has been submitted.`,
        })

        setAmount("")
    }

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-muted-foreground">
                <div>Asset</div>
                <div>APY</div>
                <div className="hidden md:block">Utilization</div>
                <div className="text-right">Action</div>
            </div>

            {markets.map((market, index) => (
                <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 items-center p-4 bg-card rounded-lg border"
                >
                    <div className="font-medium">{market.asset}</div>
                    <div className="text-green-500">{market.apy}</div>
                    <div className="hidden md:block">{market.utilizationRate}</div>
                    <div className="text-right">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    onClick={() => setSelectedAsset(market)}
                                    size="sm"
                                >
                                    Lend
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Lend {selectedAsset?.asset}</DialogTitle>
                                    <DialogDescription>
                                        Enter the amount you want to lend. You will receive {selectedAsset?.apy} APY.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="space-y-2">
                                        <p className="text-sm font-medium">Amount to lend</p>
                                        <div className="flex items-center gap-2">
                                            <Input
                                                type="number"
                                                placeholder="0.0"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                            />
                                            <span className="text-sm font-medium">{selectedAsset?.asset}</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            Balance: 1.5 {selectedAsset?.asset}
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-sm font-medium">Summary</p>
                                        <div className="bg-muted p-3 rounded-md space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span>Current APY</span>
                                                <span className="font-medium text-green-500">{selectedAsset?.apy}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span>Total supplied by you</span>
                                                <span>{selectedAsset?.yourSupplied}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <Button onClick={handleLend}>Confirm Lending</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            ))}
        </div>
    )
} 