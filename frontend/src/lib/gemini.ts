import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { GEMINI_LATEST, GEMINI_THINKING } from "@/lib/constant";
import { ChatMessage } from "@/types/ai";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { CoreMessage, generateText } from "ai";

export const askGemini = async ({
    prompt,
    modelName = GEMINI_LATEST,
    useCase = "default",
}: {
    prompt: string;
    modelName?: string;
    useCase?: string;
}) => {
    // const keys = [
    //     process.env.GOOGLE_GEMINI_API_KEY_1!,
    //     process.env.GOOGLE_GEMINI_API_KEY_2!,
    //     process.env.GOOGLE_GEMINI_API_KEY_3!,
    // ];

    // const RANDOM_GEMINI_API_KEY = keys[Math.floor(Math.random() * keys.length)] || '1';

    const geminiApiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY_1 || '';
    console.log(" 👀  MY GEMINI API KEY IS:", geminiApiKey);

    const genAI = new GoogleGenerativeAI(geminiApiKey);

    // Set temperature based on use case
    let temperature = 0.2; // Default temperature

    // Use higher temperature for agent chat to make responses more dynamic
    if (useCase === "agent-chat") {
        temperature = 0.7;
        console.log(" 🧠  calling Gemini for agent chat with temperature: " + temperature);
    }

    const model = genAI.getGenerativeModel({
        model: modelName,
        generationConfig: {
            temperature: temperature,
        },
    });

    console.log(" 🧠  calling Gemini... [" + useCase + "]");

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    console.log(" 🧠  done! [" + useCase + "]");
    return responseText;
};

export const askGeminiWithMessagesAndSystemPrompt = async ({
    messages,
    systemPrompt,
    temperature = 0.2,
}: {
    messages: ChatMessage[];
    systemPrompt: string;
    temperature?: number;
}) => {
    // const keys = [
    //     process.env.GOOGLE_GEMINI_API_KEY_1!,
    //     process.env.GOOGLE_GEMINI_API_KEY_2!,
    //     process.env.GOOGLE_GEMINI_API_KEY_3!,
    // ];

    // const RANDOM_GEMINI_API_KEY = keys[Math.floor(Math.random() * keys.length)] || '';
    const geminiApiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY_1 || '';
    console.log(" 👀  MY GEMINI API KEY IS:", geminiApiKey);

    const genAI = new GoogleGenerativeAI(geminiApiKey);

    const model = genAI.getGenerativeModel({
        model: GEMINI_LATEST,
        systemInstruction: systemPrompt,
        generationConfig: {
            temperature: temperature, // Set your desired temperature here (e.g., 0.9 for more creativity)
        },
    });

    const lastMessageContent = messages[messages.length - 1]?.content;
    
    // FIXED: Check if there are previous messages before processing them
    // If the first message is from the assistant, we need to handle it differently
    if (messages.length <= 1) {
        // If we only have one message or no messages, just start a new chat
        const chat = model.startChat();
        const result = await chat.sendMessage(lastMessageContent || '');
        return result.response.text();
    }
    
    // Process previous messages, ensuring the first message is from a user
    let previousMessages = messages.slice(0, -1);
    
    // Find the first user message to start the conversation
    const firstUserMessageIndex = previousMessages.findIndex(msg => msg.role === "user");
    
    if (firstUserMessageIndex === -1) {
        // If there's no user message, just start with the last message
        const chat = model.startChat();
        const result = await chat.sendMessage(lastMessageContent || '');
        return result.response.text();
    }
    
    // Start with messages from the first user message
    previousMessages = previousMessages.slice(firstUserMessageIndex);
    
    // Then convert assistant messages to model messages
    const formattedMessages = previousMessages.map((message) => {
        if (message.role === "assistant") {
            return {
                role: "model",
                content: message.content,
            };
        }
        return message;
    });

    const chat = model.startChat({
        history: formattedMessages as any[],
    });

    const result = await chat.sendMessage(lastMessageContent || '');
    const responseText = result.response.text();
    return responseText;
};

export const askGeminiThinking = async ({
    messages,
    temperature = 0.8,
    useCase = "default",
}: {
    messages: CoreMessage[];
    temperature?: number;
    useCase?: string;
}) => {
    const keys = [
        process.env.GOOGLE_GEMINI_API_KEY_1!,
        process.env.GOOGLE_GEMINI_API_KEY_2!,
        process.env.GOOGLE_GEMINI_API_KEY_3!,
    ];

    const RANDOM_GEMINI_API_KEY = keys[Math.floor(Math.random() * keys.length)] || '';

    const google = createGoogleGenerativeAI({
        apiKey: RANDOM_GEMINI_API_KEY,
    });

    const { text } = await generateText({
        temperature,
        model: google(GEMINI_THINKING, {}),
        messages,
    });

    return text;
};
