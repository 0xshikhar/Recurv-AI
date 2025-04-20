"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  ArrowLeftRight, 
  Landmark, 
  LineChart, 
  Vault, 
  Settings, 
  HelpCircle, 
  MessageCircle,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileNavProps {
  open: boolean
  onClose: () => void
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname()
  
  const navItems = [
    {
      title: "Dashboard",
      href: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Lend & Borrow",
      href: "/lending",
      icon: Landmark,
    },
    {
      title: "Swap",
      href: "/swap",
      icon: ArrowLeftRight,
    },
    {
      title: "Strategies",
      href: "/strategies",
      icon: LineChart,
    },
    {
      title: "Vaults",
      href: "/vaults",
      icon: Vault,
    },
    {
      title: "AI Assistant",
      href: "/ai-assistant",
      icon: MessageCircle,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: Settings,
    },
    {
      title: "Help",
      href: "/help",
      icon: HelpCircle,
    },
  ]

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden",
        open ? "block" : "hidden"
      )}
    >
      <div className="fixed inset-y-0 left-0 z-50 w-full max-w-xs border-r bg-background p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              ReCurv
            </span>
          </Link>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        
        <nav className="mt-8 flex flex-col space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === item.href ? "bg-accent text-accent-foreground" : "transparent"
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
} 