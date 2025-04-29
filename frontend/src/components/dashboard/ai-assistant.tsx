"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAiChat } from "@/hooks/use-ai-chat"
import { SuggestedQuestions } from "@/components/dashboard/suggested-questions"
import { FaUserCircle } from "react-icons/fa";
import { formatAIResponse } from "@/lib/format-ai-response"

export function AIAssistant() {
  const [input, setInput] = useState("")
  const { messages, isLoading, sendMessage } = useAiChat()
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const handleSendMessage = () => {
    if (!input.trim()) return
    sendMessage(input)
    setInput("")
  }
  
  const handleQuestionSelect = (question: string) => {
    setInput(question)
    sendMessage(question)
    setInput("")
  }
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <Card className="h-[500px] flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle>AI Assistant</CardTitle>
        <CardDescription>Get help with your DeFi activities on Iota blockchain</CardDescription>
        
        {messages.length === 1 && (
          <SuggestedQuestions onSelect={handleQuestionSelect} disabled={isLoading} />
        )}
      </CardHeader>
      <CardContent className="flex-1 overflow-auto space-y-4 pb-2">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.sender === "ai" && (
              <Avatar className="h-8 w-8">
                <AvatarImage src="/aiagent.png" alt="AI" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
            )}
            <div
              className={`rounded-lg px-4 py-2 max-w-[80%] ${
                message.sender === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              {message.sender === "user" ? (
                <p className="text-sm">{message.content}</p>
              ) : (
                <div className="text-sm prose prose-sm dark:prose-invert">
                  {formatAIResponse(message.content)}
                </div>
              )}
            </div>
            {message.sender === "user" && (
              <Avatar className="h-8 w-8">
                <FaUserCircle className="h-8 w-8 text-white" />
                {/* <AvatarFallback>U</AvatarFallback> */}
              </Avatar>
            )}
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex max-w-[80%] items-start gap-3 rounded-lg px-4 py-2 bg-muted">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/aiagent.png" alt="AI" />
                <AvatarFallback>AI</AvatarFallback>
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
      <CardFooter className="pt-0">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSendMessage()
          }}
          className="flex w-full items-center space-x-2"
        >
          <Input
            placeholder="Ask me about Iota blockchain, liquid staking, or DeFi strategies..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
} 