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

const Historical = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Historical check</CardTitle>
        <CardDescription>
          inventory of all scores made.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="md:table-cell text-nowrap">Date</TableHead>
              <TableHead className="text-nowrap">Course</TableHead>
              <TableHead className="text-nowrap">Arriving time</TableHead>
              <TableHead className="md:table-cell text-nowrap">Exit time</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-nowrap">16/06/2024</TableCell>
              <TableCell className="md:table-cell text-nowrap">Concept de base de données</TableCell>
              <TableCell className="md:table-cell text-nowrap">8:30</TableCell>
              <TableCell className="md:table-cell text-nowrap">12:10</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> historical check
        </div>
      </CardFooter>
    </Card>
  )
}

export default Historical