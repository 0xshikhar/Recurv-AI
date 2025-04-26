"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/layouts/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Check, Search, ArrowRight, MessageCircle, Mail } from "lucide-react"

export default function HelpPage() {
    const [searchQuery, setSearchQuery] = useState("")

    const faqs = [
        {
            id: 1,
            question: "How do I connect my wallet?",
            answer: "On the ReCurv platform, you can connect your wallet by clicking the 'Connect Wallet' button in the top-right corner of the page. We support MetaMask, WalletConnect, Coinbase Wallet, and other popular wallets. Simply select your preferred wallet and follow the prompts to complete the connection."
        },
        {
            id: 2,
            question: "What networks does ReCurv support?",
            answer: "ReCurv currently supports Ethereum Mainnet, Polygon, Arbitrum, and Optimism. We're constantly working to add support for more networks to provide you with the best trading experience across the ecosystem."
        },
        {
            id: 3,
            question: "How are lending rates determined?",
            answer: "Lending rates on ReCurv are determined algorithmically based on supply and demand for each asset. When there is high demand to borrow an asset and limited supply, interest rates increase. Conversely, when supply exceeds demand, rates decrease. This ensures efficient allocation of capital in the marketplace."
        },
        {
            id: 4,
            question: "What is the minimum amount I can deposit?",
            answer: "There is no minimum amount required to deposit on ReCurv. However, you should consider gas fees when making small deposits, as they might make very small transactions economically impractical, especially on networks with higher gas costs like Ethereum Mainnet."
        },
        {
            id: 5,
            question: "How do I create an automated trading strategy?",
            answer: "To create an automated trading strategy, navigate to the Strategies page and click 'Create Strategy'. You can then select from our pre-built templates like DCA (Dollar Cost Averaging) or Grid Trading, or create a custom strategy. Configure your parameters like asset pairs, frequency, and amount, then click 'Create' to activate your strategy."
        },
        {
            id: 6,
            question: "How safe are ReCurv's Vaults?",
            answer: "ReCurv vaults are designed with security as a top priority. All vault contracts undergo rigorous audits by leading security firms. Additionally, each vault has a risk rating to help you make informed decisions. Low-risk vaults use conservative strategies, while higher-risk vaults may offer greater returns but with increased exposure to market volatility."
        },
        {
            id: 7,
            question: "What happens if I get liquidated?",
            answer: "If your collateral value falls below the required threshold, your position may be liquidated to ensure the protocol remains solvent. During liquidation, a portion of your collateral is sold to repay your borrowed amount. To avoid liquidation, maintain a healthy collateral ratio by either depositing more collateral or repaying part of your loan."
        },
        {
            id: 8,
            question: "How do I withdraw my funds?",
            answer: "To withdraw your funds, navigate to the lending page or vault where your assets are deposited. Click on 'Withdraw' and specify the amount you wish to withdraw. Confirm the transaction in your wallet. The funds will be returned to your wallet once the transaction is processed on the blockchain."
        }
    ]

    const tutorials = [
        {
            id: 1,
            title: "Getting Started with ReCurv",
            description: "Learn the basics of using the ReCurv platform",
            duration: "5 min read",
            difficulty: "Beginner"
        },
        {
            id: 2,
            title: "Setting Up Your First Lending Position",
            description: "Step-by-step guide to lending your assets",
            duration: "7 min read",
            difficulty: "Beginner"
        },
        {
            id: 3,
            title: "Creating a DCA Strategy",
            description: "How to set up dollar cost averaging for your favorite assets",
            duration: "10 min read",
            difficulty: "Intermediate"
        },
        {
            id: 4,
            title: "Advanced Grid Trading Strategies",
            description: "Maximize returns with sophisticated grid trading setups",
            duration: "15 min read",
            difficulty: "Advanced"
        },
        {
            id: 5,
            title: "Optimizing Vault Investments",
            description: "Learn how to choose the right vaults for your risk profile",
            duration: "12 min read",
            difficulty: "Intermediate"
        }
    ]

    const filteredFaqs = searchQuery
        ? faqs.filter(faq =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : faqs

    const filteredTutorials = searchQuery
        ? tutorials.filter(tutorial =>
            tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tutorial.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : tutorials

    return (
        <DashboardLayout>
            <div className="space-y-6 max-w-5xl mx-auto pt-10">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Help Center</h1>
                    <p className="text-muted-foreground">
                        Find answers to common questions or contact our support team
                    </p>
                </div>

                <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search for answers..."
                        className="pl-8"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <Tabs defaultValue="faq" className="space-y-6">
                    <TabsList>
                        <TabsTrigger value="faq">FAQ</TabsTrigger>
                        <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                        <TabsTrigger value="contact">Contact Support</TabsTrigger>
                    </TabsList>

                    <TabsContent value="faq">
                        <Card>
                            <CardHeader>
                                <CardTitle>Frequently Asked Questions</CardTitle>
                                <CardDescription>
                                    Find answers to the most common questions about ReCurv
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                {filteredFaqs.length > 0 ? (
                                    <Accordion type="single" collapsible className="w-full">
                                        {filteredFaqs.map((faq) => (
                                            <AccordionItem key={faq.id} value={`faq-${faq.id}`}>
                                                <AccordionTrigger className="text-left">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    <p className="text-muted-foreground">{faq.answer}</p>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                ) : (
                                    <div className="text-center py-8">
                                        <p className="text-muted-foreground mb-4">No results found for &quot;{searchQuery}&quot;</p>
                                        <Button variant="outline" onClick={() => setSearchQuery("")}>Clear Search</Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="tutorials">
                        <Card>
                            <CardHeader>
                                <CardTitle>Tutorials & Guides</CardTitle>
                                <CardDescription>
                                    Step-by-step guides to help you get the most out of ReCurv
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {filteredTutorials.length > 0 ? (
                                        filteredTutorials.map((tutorial) => (
                                            <Card key={tutorial.id}>
                                                <CardContent className="p-4">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h3 className="font-medium">{tutorial.title}</h3>
                                                            <p className="text-sm text-muted-foreground mb-2">
                                                                {tutorial.description}
                                                            </p>
                                                            <div className="flex items-center gap-3 text-xs">
                                                                <span className="text-muted-foreground">{tutorial.duration}</span>
                                                                <span className={`px-2 py-0.5 rounded-full ${tutorial.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                                                                        tutorial.difficulty === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
                                                                            'bg-amber-100 text-amber-700'
                                                                    }`}>
                                                                    {tutorial.difficulty}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <Button variant="ghost" size="icon">
                                                            <ArrowRight className="h-4 w-4" />
                                                        </Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))
                                    ) : (
                                        <div className="text-center py-8">
                                            <p className="text-muted-foreground mb-4">No tutorials found for &quot;{searchQuery}&quot;</p>
                                            <Button variant="outline" onClick={() => setSearchQuery("")}>Clear Search</Button>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="contact">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <MessageCircle className="h-5 w-5" />
                                        Live Chat
                                    </CardTitle>
                                    <CardDescription>
                                        Chat with our support team in real-time
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground mb-4">
                                        Our support team is available 24/7 to help you with any issues you might encounter while using ReCurv.
                                    </p>
                                    <div className="flex items-center gap-2 text-sm mb-4">
                                        <Check className="h-4 w-4 text-green-500" />
                                        <span>Average response time: under 5 minutes</span>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Start Chat</Button>
                                </CardFooter>
                            </Card> */}

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Mail className="h-5 w-5" />
                                        Email Support
                                    </CardTitle>
                                    <CardDescription>
                                        Send us a detailed message about your issue
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Subject</label>
                                        <Input placeholder="e.g., Issue with depositing ETH" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Message</label>
                                        <textarea
                                            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
                                            placeholder="Please describe your issue in detail..."
                                        />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Send Message</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </DashboardLayout>
    )
} 