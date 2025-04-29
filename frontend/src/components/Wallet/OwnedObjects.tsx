"use client"

import { useCurrentAccount, useIotaClientQuery } from "@iota/dapp-kit";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

export function OwnedObjects() {
  const account = useCurrentAccount();
  const { data, isPending, error } = useIotaClientQuery(
    "getOwnedObjects",
    {
      owner: account?.address as string,
    },
    {
      enabled: !!account,
    },
  );

  if (!account) {
    return null;
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Error</CardTitle>
          <CardDescription>Unable to fetch owned objects</CardDescription>
        </CardHeader>
        <CardContent>
          <Badge variant="destructive">{error.message}</Badge>
        </CardContent>
      </Card>
    );
  }

  if (isPending || !data) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Owned Objects</CardTitle>
          <CardDescription>Loading objects...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Owned Objects</CardTitle>
        <CardDescription>
          {data.data.length === 0 
            ? "No objects owned by the connected wallet" 
            : `${data.data.length} objects owned`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {data.data.length === 0 ? (
          <Badge variant="outline">No Objects</Badge>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Object ID</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.data.map((object) => (
                <TableRow key={object.data?.objectId}>
                  <TableCell className="font-medium">
                    {object.data?.objectId}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
