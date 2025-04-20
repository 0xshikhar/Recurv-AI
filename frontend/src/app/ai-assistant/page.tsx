"use client"

import { useState, useRef, useEffect } from "react"
import { DashboardLayout } from "@/components/layouts/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SendIcon, PlusIcon, RefreshCcw, BookMarked, Lightbulb, ChevronRight } from "lucide-react"

type Message = {
  id: number
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export default function AIAssistantPage() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm your ReCurv AI assistant. I can help you with trading strategies, market analysis, and DeFi concepts. What would you like to know today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const handleSendMessage = () => {
    if (!input.trim()) return
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      sender: "user",
      timestamp: new Date(),
    }
    
    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsTyping(true)
    
    // Simulate AI response with typing indicator
    setTimeout(() => {
      let response = ""
      
      if (input.toLowerCase().includes("strategy") || input.toLowerCase().includes("trade")) {
        response = "There are several trading strategies you can set up in ReCurv. Dollar-cost averaging (DCA) is popular for beginners, as it automatically buys a fixed amount at regular intervals. Grid trading can help you profit from price oscillations. Would you like me to help you set up a specific strategy?"
      } else if (input.toLowerCase().includes("lend") || input.toLowerCase().includes("borrow")) {
        response = "ReCurv offers competitive rates for lending and borrowing. Currently, you can earn up to 5.8% APY by lending USDT and 3.2% for ETH. When borrowing, make sure to maintain a healthy collateral ratio to avoid liquidation. Would you like more information about specific assets?"
      } else if (input.toLowerCase().includes("vault") || input.toLowerCase().includes("yield")) {
        response = "ReCurv vaults are automated yield strategies that help you earn passive income. The Stablecoin Yield vault currently offers 5.8% APY with low risk, while the DeFi Alpha vault can generate up to 18.4% but with higher risk. Would you like me to explain how these vaults work?"
      } else {
        response = "I understand you're interested in DeFi. ReCurv offers various features including swapping, lending, borrowing, automated strategies, and yield-generating vaults. What specific aspect would you like to explore further?"
      }
      
      const aiMessage: Message = {
        id: messages.length + 2,
        content: response,
        sender: "ai",
        timestamp: new Date(),
      }
      
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }
  
  useEffect(() => {
    // Scroll to bottom whenever messages change
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])
  
  const suggestedQuestions = [
    "How do I create a DCA strategy for ETH?",
    "What are the current lending rates?",
    "Explain how the yield vaults work",
    "How can I minimize impermanent loss?",
    "What's the difference between fixed and variable rate loans?"
  ]
  
  const resources = [
    {
      title: "DeFi Basics Guide",
      description: "Learn the fundamentals of decentralized finance",
      type: "Guide"
    },
    {
      title: "Trading Strategy Templates",
      description: "Ready-to-use templates for various trading strategies",
      type: "Tutorial"
    },
    {
      title: "Risk Management in DeFi",
      description: "Best practices for managing risk in your DeFi portfolio",
      type: "Guide"
    },
    {
      title: "Yield Farming Explained",
      description: "A comprehensive guide to yield farming",
      type: "Tutorial"
    }
  ]
  
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card className="h-[calc(100vh-180px)] flex flex-col">
            <CardHeader>
              <CardTitle>AI Assistant</CardTitle>
              <CardDescription>
                Get personalized help with trading strategies, market analysis, and DeFi concepts
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex max-w-[80%] items-start gap-3 rounded-lg px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {message.sender === "ai" && (
                      <Avatar className="mt-0.5 h-8 w-8">
                        <AvatarImage src="/ai-assistant.png" alt="AI" />
                        <AvatarFallback className="bg-blue-600 text-white">AI</AvatarFallback>
                      </Avatar>
                    )}
                    <div className="flex-1">
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex max-w-[80%] items-start gap-3 rounded-lg px-4 py-2 bg-muted">
                    <Avatar className="mt-0.5 h-8 w-8">
                      <AvatarImage src="/ai-assistant.png" alt="AI" />
                      <AvatarFallback className="bg-blue-600 text-white">AI</AvatarFallback>
                    </Avatar>
                    <div className="flex items-center space-x-1">
                      <div className="h-2 w-2 rounded-full bg-current animate-bounce" />
                      <div className="h-2 w-2 rounded-full bg-current animate-bounce delay-150" />
                      <div className="h-2 w-2 rounded-full bg-current animate-bounce delay-300" />
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </CardContent>
            <CardFooter className="border-t p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSendMessage()
                }}
                className="flex w-full items-center space-x-2"
              >
                <Input
                  placeholder="Ask anything about DeFi, trading strategies, or ReCurv features..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <SendIcon className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Suggested Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {suggestedQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start text-left"
                    onClick={() => {
                      setInput(question)
                    }}
                  >
                    <Lightbulb className="mr-2 h-4 w-4" />
                    {question}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Learning Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {resources.map((resource, index) => (
                  <div key={index} className="rounded-lg border p-3">
                    <div className="flex justify-between items-start mb-1">
                      <div className="font-medium">{resource.title}</div>
                      <span className="text-xs bg-muted px-2 py-0.5 rounded">
                        {resource.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {resource.description}
                    </p>
                    <Button variant="ghost" size="sm" className="w-full justify-between">
                      View Resource
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
} 