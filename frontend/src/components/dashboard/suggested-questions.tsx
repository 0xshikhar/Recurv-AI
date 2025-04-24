import { Button } from "@/components/ui/button"
import { Lightbulb } from "lucide-react"

type SuggestedQuestionProps = {
    question: string
    onSelect: (question: string) => void
    disabled?: boolean
}

export function SuggestedQuestion({ question, onSelect, disabled }: SuggestedQuestionProps) {
    return (
        <Button
            variant="ghost"
            className="w-full justify-start text-left text-xs"
            onClick={() => onSelect(question)}
            disabled={disabled}
        >
            <Lightbulb className="mr-2 h-3 w-3" />
            {question}
        </Button>
    )
}

export function SuggestedQuestions({ onSelect, disabled }: { onSelect: (question: string) => void, disabled?: boolean }) {
    const defiQuestions = [
        "What is Swell Network?",
        "How does liquid staking work?",
        "What's the difference between swETH and ETH?",
        "What are the benefits of using Swell Network?",
        "How can I earn yield with my swETH on ReCurv?"
    ]

    return (
        <div className="mt-2 space-y-1">
            {defiQuestions.map((question, index) => (
                <SuggestedQuestion
                    key={index}
                    question={question}
                    onSelect={onSelect}
                    disabled={disabled}
                />
            ))}
        </div>
    )
} 