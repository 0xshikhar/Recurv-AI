"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const marketData = [
  { name: "Jan", eth: 1500, usdt: 1, dai: 1, rvl: 0.05 },
  { name: "Feb", eth: 1600, usdt: 1, dai: 1, rvl: 0.06 },
  { name: "Mar", eth: 1800, usdt: 1, dai: 1, rvl: 0.07 },
  { name: "Apr", eth: 1700, usdt: 1, dai: 1, rvl: 0.065 },
  { name: "May", eth: 1900, usdt: 1, dai: 1, rvl: 0.08 },
  { name: "Jun", eth: 2000, usdt: 1, dai: 1, rvl: 0.09 },
]

export function MarketOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Overview</CardTitle>
        <CardDescription>Track asset prices and market trends</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Assets</TabsTrigger>
            <TabsTrigger value="eth">ETH</TabsTrigger>
            <TabsTrigger value="stablecoins">Stablecoins</TabsTrigger>
            <TabsTrigger value="rvl">RVL</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="eth" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="usdt" stroke="#82ca9d" />
                <Line type="monotone" dataKey="dai" stroke="#ffc658" />
                <Line type="monotone" dataKey="rvl" stroke="#ff8042" />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="eth" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="eth" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="stablecoins" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="usdt" stroke="#82ca9d" />
                <Line type="monotone" dataKey="dai" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="rvl" className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="rvl" stroke="#ff8042" />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
} 