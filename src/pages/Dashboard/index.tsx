import {
  ArrowUpRight,
  CalendarDays,
  CalendarRange,
  ScanLine,
  ShieldBan,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { NavLink } from "react-router-dom"

const Dashboard = () => {

    // const Navigate = useNavigate()
    return (
        <>
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <Card x-chunk="dashboard-01-chunk-0">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Presence
                        </CardTitle>
                        <ScanLine className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+99</div>
                        <p className="text-xs text-muted-foreground">
                            +10 from last month
                        </p>
                    </CardContent>
                </Card>
                <Card x-chunk="dashboard-01-chunk-1">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total absence
                        </CardTitle>
                        <ShieldBan className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">-5</div>
                        <p className="text-xs text-muted-foreground">
                            +1 from last month
                        </p>
                    </CardContent>
                </Card>
                <Card x-chunk="dashboard-01-chunk-2">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total day</CardTitle>
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">100</div>
                        {/* <p className="text-xs text-muted-foreground">
                            +19% from last month
                        </p> */}
                    </CardContent>
                </Card>
                <Card x-chunk="dashboard-01-chunk-3">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total month</CardTitle>
                        <CalendarRange className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1</div>
                        {/* <p className="text-xs text-muted-foreground">
                            +201 since last hour
                        </p> */}
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
                    <CardHeader className="flex flex-row items-center">
                        <div className="grid gap-2">
                            <CardTitle>Time table</CardTitle>
                            <CardDescription>
                                {/* Recent the last five check. */}
                            </CardDescription>
                        </div>
                        <Button asChild size="sm" className="ml-auto gap-1">
                            <NavLink to="/time-table">
                                View All
                                <ArrowUpRight className="h-4 w-4" />
                            </NavLink>
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-left">Date</TableHead>
                                    <TableHead className="text-center">Monday</TableHead>
                                    <TableHead className="text-center">Tuesday</TableHead>
                                    <TableHead className="text-center">Wednesday</TableHead>
                                    <TableHead className="text-center">Thursday</TableHead>
                                    <TableHead className="text-center">Friday</TableHead>
                                    <TableHead className="text-right">Saturday</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="text-left">2023-06-23</TableCell>
                                    <TableCell className="text-center">08:20</TableCell>
                                    <TableCell className="text-center">08:20</TableCell>
                                    <TableCell className="text-center">08:20</TableCell>
                                    <TableCell className="text-center">08:20</TableCell>
                                    <TableCell className="text-center">08:20</TableCell>
                                    <TableCell className="text-right">08:20</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card className="xl:col-span-1" x-chunk="dashboard-01-chunk-3">
                    <CardHeader className="flex flex-row items-center">
                        <div className="grid gap-2">
                            <CardTitle>Historical check</CardTitle>
                            <CardDescription>
                                Recent the last five check.
                            </CardDescription>
                        </div>
                        <Button asChild size="sm" className="ml-auto gap-1">
                            <NavLink to="/historical">
                                View All
                                <ArrowUpRight className="h-4 w-4" />
                            </NavLink>
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="text-left">Course</TableHead>
                                    <TableHead className="text-center">Arriving time</TableHead>
                                    <TableHead className="text-right">Exit time</TableHead>
                                    {/* <TableHead className="hidden text-right">Amount</TableHead> */}
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Liam Johnson</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            liam@example.com
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-center">Sale</TableCell>
                                    <TableCell className="text-center hidden">
                                        <Badge className="text-xs hidden" variant="outline">
                                            Approved
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">2023-06-23</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default Dashboard