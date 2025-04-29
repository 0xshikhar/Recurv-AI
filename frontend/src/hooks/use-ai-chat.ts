import { useState, useCallback } from "react"
import { askGeminiWithMessagesAndSystemPrompt } from "@/lib/gemini"
import { defiAssistantPrompt } from "@/lib/ai-prompts"

export type Message = {
    id: number
    content: string
    sender: "user" | "ai"
    timestamp: Date
}

type ChatMessage = {
    role: "user" | "assistant" | "system"
    content: string
}

export function useAiChat() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            content: "Hello! I'm your ReCurv AI assistant. How can I help you with your DeFi activities on Iota blockchain today?",
            sender: "ai",
            timestamp: new Date(),
        },
    ])

    const [isLoading, setIsLoading] = useState(false)

    const sendMessage = useCallback(async (input: string) => {
        if (!input.trim()) return

        // Add user message
        const userMessage: Message = {
            id: messages.length + 1,
            content: input,
            sender: "user",
            timestamp: new Date(),
        }

        setMessages(prev => [...prev, userMessage])
        setIsLoading(true)

        try {
            // Convert our messages to the format expected by Gemini
            const formattedMessages: ChatMessage[] = messages.map(message => ({
                role: message.sender === "user" ? "user" : "assistant",
                content: message.content
            }))

            // Add the new user message
            formattedMessages.push({
                role: "user",
                content: input
            })

            // Call Gemini API
            const response = await askGeminiWithMessagesAndSystemPrompt({
                messages: formattedMessages as any,
                systemPrompt: defiAssistantPrompt,
                temperature: 0.7,
            })

            // Add AI response to messages
            const aiMessage: Message = {
                id: messages.length + 2,
                content: response,
                sender: "ai",
                timestamp: new Date(),
            }

            setMessages(prev => [...prev, aiMessage])
        } catch (error) {
            console.error("Error calling Gemini API:", error)

            // Add error message
            const errorMessage: Message = {
                id: messages.length + 2,
                content: "I'm having trouble connecting to my knowledge base. Please try again in a moment.",
                sender: "ai",
                timestamp: new Date(),
            }

            setMessages(prev => [...prev, errorMessage])
        } finally {
            setIsLoading(false)
        }
    }, [messages])

    return {
        messages,
        isLoading,
        sendMessage,
    }
} 