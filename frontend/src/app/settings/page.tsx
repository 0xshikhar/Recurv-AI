"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/layouts/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
export default function SettingsPage() {
    // Account settings
    const [email, setEmail] = useState("user@example.com")
    const [notificationsEnabled, setNotificationsEnabled] = useState(true)
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)

    // Trading settings
    const [defaultSlippage, setDefaultSlippage] = useState("0.5")
    const [gasPreference, setGasPreference] = useState("standard")
    const [autoApprove, setAutoApprove] = useState(true)

    // Theme settings
    const [currency, setCurrency] = useState("usd")
    const [tradingCharts, setTradingCharts] = useState("candlestick")

    const handleSaveAccountSettings = () => {
        toast.success("Account settings saved", {
            description: "Your account settings have been updated successfully.",
        })
    }

    const handleSaveTradingSettings = () => {
        toast.success("Trading settings saved", {
            description: "Your trading preferences have been updated successfully.",
        })
    }

    const handleSaveDisplaySettings = () => {
        toast.success("Display settings saved", {
            description: "Your display preferences have been updated successfully.",
        })
    }

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                    <p className="text-muted-foreground">
                        Manage your account settings and set your preferences
                    </p>
                </div>

                <Tabs defaultValue="account" className="space-y-6">
                    <TabsList>
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="trading">Trading</TabsTrigger>
                        <TabsTrigger value="display">Display</TabsTrigger>
                    </TabsList>

                    <TabsContent value="account">
                        <Card>
                            <CardHeader>
                                <CardTitle>Account Settings</CardTitle>
                                <CardDescription>
                                    Manage your account information and security settings
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-0.5">
                                            <Label htmlFor="notifications">Email Notifications</Label>
                                            <p className="text-sm text-muted-foreground">
                                                Receive email notifications about your account activity
                                            </p>
                                        </div>
                                        <Switch
                                            id="notifications"
                                            checked={notificationsEnabled}
                                            onCheckedChange={setNotificationsEnabled}
                                        />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="space-y-0.5">
                                            <Label htmlFor="2fa">Two-Factor Authentication</Label>
                                            <p className="text-sm text-muted-foreground">
                                                Add an extra layer of security to your account
                                            </p>
                                        </div>
                                        <Switch
                                            id="2fa"
                                            checked={twoFactorEnabled}
                                            onCheckedChange={setTwoFactorEnabled}
                                        />
                                    </div>
                                </div>

                                <Button onClick={handleSaveAccountSettings}>Save Changes</Button>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="trading">
                        <Card>
                            <CardHeader>
                                <CardTitle>Trading Settings</CardTitle>
                                <CardDescription>
                                    Configure your default trading parameters
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="slippage">Default Slippage Tolerance (%)</Label>
                                    <Input
                                        id="slippage"
                                        type="number"
                                        value={defaultSlippage}
                                        onChange={(e) => setDefaultSlippage(e.target.value)}
                                    />
                                    <p className="text-sm text-muted-foreground">
                                        Maximum price change allowed between transaction submission and confirmation
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="gas-preference">Gas Price Preference</Label>
                                    <Select value={gasPreference} onValueChange={setGasPreference}>
                                        <SelectTrigger id="gas-preference">
                                            <SelectValue placeholder="Select gas preference" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="economic">Economic</SelectItem>
                                            <SelectItem value="standard">Standard</SelectItem>
                                            <SelectItem value="fast">Fast</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label htmlFor="auto-approve">Auto-approve Tokens</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Automatically approve token spending when required
                                        </p>
                                    </div>
                                    <Switch
                                        id="auto-approve"
                                        checked={autoApprove}
                                        onCheckedChange={setAutoApprove}
                                    />
                                </div>

                                <Button onClick={handleSaveTradingSettings}>Save Changes</Button>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="display">
                        <Card>
                            <CardHeader>
                                <CardTitle>Display Settings</CardTitle>
                                <CardDescription>
                                    Customize your display preferences
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="currency">Display Currency</Label>
                                    <Select value={currency} onValueChange={setCurrency}>
                                        <SelectTrigger id="currency">
                                            <SelectValue placeholder="Select currency" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="usd">USD ($)</SelectItem>
                                            <SelectItem value="eur">EUR (€)</SelectItem>
                                            <SelectItem value="gbp">GBP (£)</SelectItem>
                                            <SelectItem value="jpy">JPY (¥)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="trading-charts">Trading Chart Type</Label>
                                    <Select value={tradingCharts} onValueChange={setTradingCharts}>
                                        <SelectTrigger id="trading-charts">
                                            <SelectValue placeholder="Select chart type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="candlestick">Candlestick</SelectItem>
                                            <SelectItem value="line">Line</SelectItem>
                                            <SelectItem value="bar">Bar</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <Button onClick={handleSaveDisplaySettings}>Save Changes</Button>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </DashboardLayout>
    )
} 