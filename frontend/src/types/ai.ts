export type ChatMessage = {
    id: number;
    sender: "user" | "ai" | "model";
    timestamp: Date;
    role: "user" | "assistant" | "system" | "model"
    content: string
}


export type AICompletion = {
    id: string
    object: string
    created: number
    model: string
    choices: {
        index: number
        message: {
            role: string
            content: string
        }
        finish_reason: string
    }[]
    usage: {
        prompt_tokens: number
        completion_tokens: number
        total_tokens: number
    }
} 