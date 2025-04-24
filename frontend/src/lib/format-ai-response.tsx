import React, { ReactNode } from "react";

/**
 * Formats an AI response string into React components with proper styling
 */
export function formatAIResponse(text: string): ReactNode[] {
    if (!text) return [];

    // Split the text into paragraphs
    const paragraphs = text.split(/\n\n+/);

    return paragraphs.map((paragraph, index) => {
        // Check if paragraph is a heading (starts with # or ##)
        if (paragraph.match(/^#{1,3}\s/)) {
            const level = paragraph.match(/^#+/)?.[0].length || 1;
            const content = paragraph.replace(/^#+\s/, "");

            switch (level) {
                case 1:
                    return (
                        <h2 key={index} className="text-xl font-bold mt-4 mb-2">
                            {content}
                        </h2>
                    );
                case 2:
                    return (
                        <h3 key={index} className="text-lg font-semibold mt-3 mb-2">
                            {content}
                        </h3>
                    );
                case 3:
                    return (
                        <h4 key={index} className="text-md font-semibold mt-2 mb-1">
                            {content}
                        </h4>
                    );
                default:
                    return null;
            }
        }

        // Check if paragraph is a list
        if (paragraph.match(/^\s*[-*]\s/m)) {
            const listItems = paragraph
                .split(/\n/)
                .filter(item => item.trim().match(/^\s*[-*]\s/))
                .map(item => item.replace(/^\s*[-*]\s/, ""));

            return (
                <ul key={index} className="list-disc pl-5 my-2 space-y-1">
                    {listItems.map((item, i) => (
                        <li key={i}>{formatInlineContent(item)}</li>
                    ))}
                </ul>
            );
        }

        // Handle numbered lists
        if (paragraph.match(/^\s*\d+\.\s/m)) {
            const listItems = paragraph
                .split(/\n/)
                .filter(item => item.trim().match(/^\s*\d+\.\s/))
                .map(item => item.replace(/^\s*\d+\.\s/, ""));

            return (
                <ol key={index} className="list-decimal pl-5 my-2 space-y-1">
                    {listItems.map((item, i) => (
                        <li key={i}>{formatInlineContent(item)}</li>
                    ))}
                </ol>
            );
        }

        // Regular paragraph
        return (
            <p key={index} className="my-2">
                {formatInlineContent(paragraph)}
            </p>
        );
    });
}

/**
 * Formats inline content with bold, italic, and code styling
 */
function formatInlineContent(text: string): ReactNode[] {
    const parts: ReactNode[] = [];
    let currentText = text;
    let lastIndex = 0;

    // Bold text (either **bold** or __bold__)
    const boldRegex = /(\*\*|__)(.*?)\1/g;
    let boldMatch;

    while ((boldMatch = boldRegex.exec(currentText)) !== null) {
        // Add text before the match
        if (boldMatch.index > lastIndex) {
            parts.push(currentText.substring(lastIndex, boldMatch.index));
        }

        // Add the bold text
        parts.push(
            <strong key={`bold-${boldMatch.index}`} className="font-bold">
                {boldMatch[2]}
            </strong>
        );

        lastIndex = boldMatch.index + boldMatch[0].length;
    }

    // Add remaining text
    if (lastIndex < currentText.length) {
        parts.push(currentText.substring(lastIndex));
    }

    // If no formatting was applied, return the original text
    if (parts.length === 0) {
        return [text];
    }

    return parts;
} 