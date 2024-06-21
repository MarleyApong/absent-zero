import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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

const TimeTable = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>TimeTable</CardTitle>
        <CardDescription>
          inventory of all scores made according to the days
        </CardDescription>
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
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> time table
        </div>
      </CardFooter>
    </Card>
  )
}

export default TimeTable