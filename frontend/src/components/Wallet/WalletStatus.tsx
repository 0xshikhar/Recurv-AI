"use client"

import { useCurrentAccount } from "@iota/dapp-kit";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { OwnedObjects } from "./OwnedObjects";

export function WalletStatus() {
  const account = useCurrentAccount();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Wallet Status</CardTitle>
      </CardHeader>
      <CardContent>
        {account ? (
          <div className="space-y-2">
            <Badge variant="default">Wallet connected</Badge>
            <p className="text-sm text-muted-foreground truncate">
              Address: {account.address}
            </p>
          </div>
        ) : (
          <Badge variant="destructive">Wallet not connected</Badge>
        )}
        <div className="mt-4">
          <OwnedObjects />
        </div>
      </CardContent>
    </Card>
  );
}
