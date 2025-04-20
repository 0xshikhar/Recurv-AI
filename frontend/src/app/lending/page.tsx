import { DashboardLayout } from "@/components/layouts/dashboard-layout"
import { LendingMarkets } from "@/components/lending/lending-markets"
import { BorrowMarkets } from "@/components/lending/borrow-markets"
import { UserPositions } from "@/components/lending/user-positions"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LendingPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Lend & Borrow</h1>
          <p className="text-muted-foreground">
            Earn interest by lending your assets or borrow against your collateral
          </p>
        </div>
        
        <UserPositions />
        
        <Card>
          <CardHeader>
            <CardTitle>Lending & Borrowing Markets</CardTitle>
            <CardDescription>
              View current rates and available assets
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="lend">
              <TabsList className="mb-4">
                <TabsTrigger value="lend">Lend</TabsTrigger>
                <TabsTrigger value="borrow">Borrow</TabsTrigger>
              </TabsList>
              <TabsContent value="lend">
                <LendingMarkets />
              </TabsContent>
              <TabsContent value="borrow">
                <BorrowMarkets />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
} 