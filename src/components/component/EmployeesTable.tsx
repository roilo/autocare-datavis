"use client";

import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";

export default function EmployeesTable() {
  return (
    <Card>
    <CardHeader className="px-7">
      <CardTitle>Employees</CardTitle>
      <CardDescription>Employees who are currently working</CardDescription>
    </CardHeader>
      <CardContent>
       <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee's Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Employment Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>Doe</TableCell>
              <TableCell>
                <Badge variant="default">Active</Badge>
              </TableCell>
              <TableCell>Software Engineer</TableCell>
              <TableCell>2021-03-15</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane</TableCell>
              <TableCell>Smith</TableCell>
              <TableCell>
                <Badge variant="default">Active</Badge>
              </TableCell>
              <TableCell>Product Manager</TableCell>
              <TableCell>2019-09-01</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Michael</TableCell>
              <TableCell>Johnson</TableCell>
              <TableCell>
                <Badge variant="outline">On Leave</Badge>
              </TableCell>
              <TableCell>UI/UX Designer</TableCell>
              <TableCell>2022-06-01</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Emily</TableCell>
              <TableCell>Davis</TableCell>
              <TableCell>
                <Badge variant="destructive">Terminated</Badge>
              </TableCell>
              <TableCell>Data Analyst</TableCell>
              <TableCell>2020-11-01</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>David</TableCell>
              <TableCell>Wilson</TableCell>
              <TableCell>
                <Badge variant="default">Active</Badge>
              </TableCell>
              <TableCell>Sales Representative</TableCell>
              <TableCell>2018-02-15</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}