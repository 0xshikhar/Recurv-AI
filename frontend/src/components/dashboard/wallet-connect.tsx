"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ConnectButton } from "@rainbow-me/rainbowkit"

export function WalletConnect() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wallet</CardTitle>
        <CardDescription>Connect your wallet to use ReCurv</CardDescription>
      </CardHeader>
      <CardContent>
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            mounted,
          }) => {
            const ready = mounted
            const connected = ready && account && chain

            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  'style': {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <div className="flex flex-col space-y-4">
                        <button
                          onClick={openConnectModal}
                          type="button"
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                        >
                          Connect Wallet
                        </button>
                        <p className="text-xs text-muted-foreground text-center">
                          Connect your wallet to access all features
                        </p>
                      </div>
                    )
                  }

                  if (chain.unsupported) {
                    return (
                      <button
                        onClick={openChainModal}
                        type="button"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2 w-full"
                      >
                        Wrong network
                      </button>
                    )
                  }

                  return (
                    <div className="flex flex-col space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          onClick={openChainModal}
                          type="button"
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                        >
                          {chain.name}
                        </button>
                        <button
                          onClick={openAccountModal}
                          type="button"
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                        >
                          {account.displayName}
                        </button>
                      </div>
                      <div className="rounded-lg bg-muted p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm">ETH Balance</span>
                          <span className="font-medium">1.234 ETH</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">RVL Balance</span>
                          <span className="font-medium">42.5 RVL</span>
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </div>
            )
          }}
        </ConnectButton.Custom>
      </CardContent>
    </Card>
  )
} 