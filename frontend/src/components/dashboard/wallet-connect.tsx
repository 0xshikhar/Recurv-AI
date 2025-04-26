"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ConnectButtonCustom } from "@/components/ConnectButtonCustom"

export function WalletConnect() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wallet</CardTitle>
        <CardDescription>Connect your wallet to use ReCurv</CardDescription>
      </CardHeader>
      <CardContent>
        <ConnectButtonCustom />
        <div className="flex items-center justify-center mb-2 text-sm text-muted-foreground">
          Connect your wallet to access all features
        </div>
      </CardContent>
    </Card>
  )
} 