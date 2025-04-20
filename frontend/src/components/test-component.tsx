"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function TestComponent() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="p-4 border rounded-md">
      <h3 className="font-medium mb-2">React Component Test</h3>
      <p>Count: {count}</p>
      <Button
        className="mt-2"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </Button>
    </div>
  )
} 