import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "ReCurv",
  author: "0xShikhar",
  description:
    "ReCurv is a re-imagined DeFi platform for Iota blockchain.",
  keywords: ["ReCurv", "Iota blockchain", "DeFi", "Liquid Staking"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://shikhar.xyz",
  },
  links: {
    github: "https://github.com/0xshikhar/next-web3-template",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
