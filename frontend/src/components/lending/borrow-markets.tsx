"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

export function BorrowMarkets() {
    const [amount, setAmount] = useState("")
    const [collateral, setCollateral] = useState("eth")
    const [selectedAsset, setSelectedAsset] = useState<any>(null)

    // In a real app, this would be fetched from the blockchain or API
    const markets = [
        {
            asset: "ETH",
            variableApy: "7.2%",
            totalAvailable: "62.7 ETH",
            ltv: "75%",
            yourBorrowed: "0 ETH"
        },
        {
            asset: "USDT",
            variableApy: "5.3%",
            totalAvailable: "250K USDT",
            ltv: "80%",
            yourBorrowed: "0 USDT"
        },
        {
            asset: "DAI",
            variableApy: "5.1%",
            totalAvailable: "170K DAI",
            ltv: "80%",
            yourBorrowed: "0 DAI"
        },
        {
            asset: "RVL",
            variableApy: "4.8%",
            totalAvailable: "43K RVL",
            ltv: "70%",
            yourBorrowed: "0 RVL"
        },
    ]

    const handleBorrow = () => {
        if (!amount || Number(amount) <= 0) {
            toast.error("Invalid amount", {
                description: "Please enter a valid amount to borrow",
            })
            return
        }

        // Here you would connect to the smart contract to borrow the tokens
        toast.success("Transaction submitted", {
            description: `Your borrowing transaction for ${amount} ${selectedAsset.asset} has been submitted.`,
        })

        setAmount("")
    }

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-muted-foreground">
                <div>Asset</div>
                <div>APY (Variable)</div>
                <div className="hidden md:block">Available</div>
                <div className="text-right">Action</div>
            </div>

            {markets.map((market, index) => (
                <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 items-center p-4 bg-card rounded-lg border"
                >
                    <div className="font-medium">{market.asset}</div>
                    <div className="text-red-500">{market.variableApy}</div>
                    <div className="hidden md:block">{market.totalAvailable}</div>
                    <div className="text-right">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    onClick={() => setSelectedAsset(market)}
                                    size="sm"
                                >
                                    Borrow
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Borrow {selectedAsset?.asset}</DialogTitle>
                                    <DialogDescription>
                                        Enter the amount you want to borrow and select your collateral.
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="space-y-2">
                                        <p className="text-sm font-medium">Collateral</p>
                                        <Select value={collateral} onValueChange={setCollateral}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select collateral" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="eth">ETH</SelectItem>
                                                <SelectItem value="usdt">USDT</SelectItem>
                                                <SelectItem value="dai">DAI</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-sm font-medium">Amount to borrow</p>
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
                                            Max borrowable: 500 {selectedAsset?.asset}
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-sm font-medium">Summary</p>
                                        <div className="bg-muted p-3 rounded-md space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span>Interest rate (variable)</span>
                                                <span className="font-medium text-red-500">{selectedAsset?.variableApy}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span>Loan to Value (LTV)</span>
                                                <span>{selectedAsset?.ltv}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span>Health factor after</span>
                                                <span className="text-green-500">1.8</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <Button onClick={handleBorrow}>Confirm Borrowing</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            ))}
        </div>
    )
} 