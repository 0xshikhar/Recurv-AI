"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ConnectButton } from "@iota/dapp-kit"
import { WalletStatus } from "@/components/Wallet/WalletStatus"

export function WalletConnect() {
  return (
    <Card>
      <WalletStatus />

    </Card>
  )
} 