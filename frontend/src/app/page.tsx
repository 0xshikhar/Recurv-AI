import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckIcon, ArrowRightIcon, ChevronRightIcon } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                ReCurv
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Link href="/app">
              <Button>Launch App</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Revolutionizing DeFi on Iota Blockchain
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    Lend, Borrow, Trade & Earn
                  </span> with Confidence
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  ReCurv is the next-generation DeFi platform that simplifies lending, borrowing, and automated trading strategies on the Iota blockchain.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/app">
                    <Button size="lg" className="w-full sm:w-auto">
                      Launch App
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative mx-auto aspect-video md:aspect-square lg:aspect-video overflow-hidden rounded-xl border bg-background p-2 shadow-xl">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950/40 dark:to-purple-950/40 absolute inset-0 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-[90%] h-[90%] overflow-hidden rounded-lg shadow-2xl">
                    <Image 
                      src="/dashboard-preview.png" 
                      alt="ReCurv Platform Preview" 
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center justify-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">$245M+</div>
                <div className="text-sm md:text-base text-muted-foreground text-center">Total Value Locked</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">18.4%</div>
                <div className="text-sm md:text-base text-muted-foreground text-center">Max Vault APY</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">25K+</div>
                <div className="text-sm md:text-base text-muted-foreground text-center">Active Users</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">8</div>
                <div className="text-sm md:text-base text-muted-foreground text-center">Integrated Protocols</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Platform Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Everything You Need in One Platform
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  ReCurv combines all essential DeFi services in a simple, user-friendly interface.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="bg-background/60 backdrop-blur-lg border-muted">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M4 18v-7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7"></path>
                      <rect width="20" height="8" x="2" y="16" rx="2"></rect>
                      <path d="M6 12V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Lending & Borrowing</h3>
                  <p className="text-muted-foreground">
                    Earn interest by lending your assets or borrow against your collateral with competitive rates.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur-lg border-muted">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="m6 15 6-6 6 6"></path>
                      <circle cx="18" cy="15" r="3"></circle>
                      <circle cx="6" cy="15" r="3"></circle>
                      <circle cx="12" cy="9" r="3"></circle>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Token Swapping</h3>
                  <p className="text-muted-foreground">
                    Swap crypto assets with minimal slippage and the best rates across multiple liquidity sources.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur-lg border-muted">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="m2 9 3-3 3 3"></path>
                      <path d="M13 18H7a2 2 0 0 1-2-2V6"></path>
                      <path d="m22 15-3 3-3-3"></path>
                      <path d="M11 6h6a2 2 0 0 1 2 2v10"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Automated Strategies</h3>
                  <p className="text-muted-foreground">
                    Create and deploy trading strategies like DCA and grid trading that execute automatically.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur-lg border-muted">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M9 12h6"></path>
                      <path d="M12 9v6"></path>
                      <path d="M4 22V2c6 0 10 4 10 10s-4 10-10 10Z"></path>
                      <path d="M20 2c-6 0-10 4-10 10s4 10 10 10"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Yield Vaults</h3>
                  <p className="text-muted-foreground">
                    Invest in curated vaults to earn passive yield with strategies managed by experts.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur-lg border-muted">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44"></path>
                      <path d="M5.5 22a2.5 2.5 0 0 1-2.04-3.94"></path>
                      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44"></path>
                      <path d="M18.5 22a2.5 2.5 0 0 0 2.04-3.94"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Liquid Staking</h3>
                  <p className="text-muted-foreground">
                    Stake your assets while maintaining liquidity through Iota blockchain&apos;s innovative technology.  
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur-lg border-muted">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M15 14c.2-1 .7-1.7 1.5-2"></path>
                      <path d="M6.5 12c.2.2.5.3.8.5.3.1.7.2 1.1.3.6.1 1.3.1 1.6.1c.9 0 1.6-.1 2.4-.3.6-.2 1.1-.5 1.6-1.3"></path>
                      <path d="M9 18h.01"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">AI Assistant</h3>
                  <p className="text-muted-foreground">
                    Get personalized help with trading strategies, market analysis, and DeFi concepts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Simple Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How ReCurv Works
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Get started with ReCurv in just a few simple steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-xl font-bold">Connect Your Wallet</h3>
                <p className="text-center text-muted-foreground">
                  Connect your preferred wallet to access the full suite of ReCurv features.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="text-xl font-bold">Choose Your Service</h3>
                <p className="text-center text-muted-foreground">
                  Select from lending, borrowing, swapping, trading strategies, or vaults.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <h3 className="text-xl font-bold">Start Earning</h3>
                <p className="text-center text-muted-foreground">
                  Confirm your transactions and start generating yield or executing your strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What Our Users Say
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Don&apos;t just take our word for it. Here&apos;s what our community has to say.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="bg-background/60 backdrop-blur-lg border-muted">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                          AK
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold">Alex K.</h4>
                        <p className="text-sm text-muted-foreground">DeFi Enthusiast</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      &quot;The automated strategies on ReCurv have completely changed how I approach DeFi. I&apos;ve set up a DCA strategy that runs on autopilot, and my returns have been fantastic!&quot;
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur-lg border-muted">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                          JS
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold">Jamie S.</h4>
                        <p className="text-sm text-muted-foreground">Crypto Investor</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      &quot;The yields from ReCurv&apos;s vaults are consistently better than other platforms I&apos;ve used. The risk categorization makes it easy to choose vaults that match my risk tolerance.&quot;
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur-lg border-muted">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                          MT
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold">Maria T.</h4>
                        <p className="text-sm text-muted-foreground">Blockchain Developer</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      &quot;As someone who works in the industry, I appreciate the technical robustness of ReCurv. The platform&apos;s integration with Iota blockchain provides excellent security and efficiency.&quot;
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-12 md:py-24 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Find answers to the most common questions about ReCurv.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 mt-12">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="font-bold">What is ReCurv?</h3>
                    <p className="text-muted-foreground">
                      ReCurv is a comprehensive DeFi platform built on the Iota blockchain that offers lending, borrowing, swapping, automated trading strategies, and yield-generating vaults.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="font-bold">How secure is ReCurv?</h3>
                    <p className="text-muted-foreground">
                      Security is our top priority. ReCurv&apos;s smart contracts undergo rigorous audits by leading security firms, and we implement multiple layers of security measures to protect user assets.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="font-bold">What kind of returns can I expect?</h3>
                    <p className="text-muted-foreground">
                      Returns vary based on the services you use. Our vaults offer from 5.8% to 18.4% APY depending on risk level, while lending rates are competitively determined by market conditions.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="font-bold">How do automated trading strategies work?</h3>
                    <p className="text-muted-foreground">
                      Our platform allows you to configure strategies like Dollar Cost Averaging (DCA) and Grid Trading. Once set up, these strategies execute automatically based on your parameters without requiring constant monitoring.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="font-bold">What wallets does ReCurv support?</h3>
                    <p className="text-muted-foreground">
                      ReCurv supports most major wallets including MetaMask, WalletConnect, Coinbase Wallet, and Iota&apos;s native wallets.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Get Started?
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join thousands of users already leveraging ReCurv for their DeFi needs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/app">
                  <Button size="lg">
                    Launch App
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/help">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:items-start md:gap-2 md:px-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                ReCurv
              </span>
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              Next-generation DeFi platform built on Iota blockchain.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row md:gap-6 md:items-start">
            <nav className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
              <Link href="#features" className="text-sm hover:underline underline-offset-4">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm hover:underline underline-offset-4">
                How It Works
              </Link>
              <Link href="#testimonials" className="text-sm hover:underline underline-offset-4">
                Testimonials
              </Link>
              <Link href="#faq" className="text-sm hover:underline underline-offset-4">
                FAQ
              </Link>
              <Link href="/help" className="text-sm hover:underline underline-offset-4">
                Help Center
              </Link>
            </nav>
            <div className="mt-4 flex items-center gap-4 md:mt-0">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-1-4.8 4-8.5 8-5 1.4 1.2 2 3 2 3zm-2 0"></path>
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://discord.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"></path>
                  <path d="M3 12a9 9 0 0 1 9-9"></path>
                  <path d="M3 12h.01"></path>
                </svg>
                <span className="sr-only">Discord</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} ReCurv. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/terms" className="text-xs text-muted-foreground hover:underline underline-offset-4">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-xs text-muted-foreground hover:underline underline-offset-4">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}