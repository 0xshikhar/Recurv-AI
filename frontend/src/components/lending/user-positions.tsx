"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"

export function UserPositions() {
    // In a real app, this would be fetched from the blockchain or API
    const suppliedAssets = [
        { asset: "ETH", amount: "2.5", value: "$4,387.50", apy: "3.2%" },
        { asset: "USDT", amount: "5000", value: "$5,000", apy: "5.8%" },
    ]

    const borrowedAssets = [
        { asset: "DAI", amount: "2000", value: "$2,000", apy: "7.5%" },
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle>Your Positions</CardTitle>
                <CardDescription>Overview of your lending and borrowing activity</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="supplied">
                    <TabsList className="mb-4">
                        <TabsTrigger value="supplied">Supplied</TabsTrigger>
                        <TabsTrigger value="borrowed">Borrowed</TabsTrigger>
                    </TabsList>

                    <TabsContent value="supplied">
                        {suppliedAssets.length > 0 ? (
                            <div className="space-y-4">
                                <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                    <div>Asset</div>
                                    <div>Amount</div>
                                    <div>Value</div>
                                    <div>APY</div>
                                </div>
                                {suppliedAssets.map((asset, index) => (
                                    <div key={index} className="grid grid-cols-4 items-center py-4 border-t">
                                        <div className="font-medium">{asset.asset}</div>
                                        <div>{asset.amount}</div>
                                        <div>{asset.value}</div>
                                        <div className="text-green-500">{asset.apy}</div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <p className="text-muted-foreground mb-4">You haven&apos;t supplied any assets yet</p>
                                <Button>Supply Asset</Button>
                            </div>
                        )}
                    </TabsContent>

                    <TabsContent value="borrowed">
                        {borrowedAssets.length > 0 ? (
                            <div className="space-y-4">
                                <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                    <div>Asset</div>
                                    <div>Amount</div>
                                    <div>Value</div>
                                    <div>APY</div>
                                </div>
                                {borrowedAssets.map((asset, index) => (
                                    <div key={index} className="grid grid-cols-4 items-center py-4 border-t">
                                        <div className="font-medium">{asset.asset}</div>
                                        <div>{asset.amount}</div>
                                        <div>{asset.value}</div>
                                        <div className="text-red-500">{asset.apy}</div>
                                    </div>
                                ))}
                                <div className="pt-4 flex justify-end">
                                    <Button variant="outline" size="sm" className="gap-1">
                                        Repay
                                        <ArrowRightIcon className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <p className="text-muted-foreground mb-4">You haven&apos;t borrowed any assets yet</p>
                                <Button>Borrow Asset</Button>
                            </div>
                        )}
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
} 