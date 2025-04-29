'use client';

import * as React from 'react';
import "@iota/dapp-kit/dist/index.css";
import { IotaClientProvider, WalletProvider } from "@iota/dapp-kit";
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";
import 'dotenv/config'
import { networkConfig } from "@/lib/networkConfig";

// const projectId = process.env.WALLET_CONNECT_PROJECT_ID || '';
const projectId = '9811958bd307518b364ff7178034c435';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    console.log("WALLET_CONNECT_PROJECT_ID", projectId)
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);
    return (
        <QueryClientProvider client={queryClient}>
            <IotaClientProvider networks={networkConfig} defaultNetwork="testnet">
                <WalletProvider autoConnect>
                    {children}
                </WalletProvider>
            </IotaClientProvider>
        </QueryClientProvider>
    );
}
