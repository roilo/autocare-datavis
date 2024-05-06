"use client";

import React, { useState } from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from "../ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { ListFilterIcon, FileIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../ui/table";
import { Badge } from "../ui/badge";

interface Row {
  customer: string;
  email: string;
  type: string;
  status: string;
  date: string;
  amount: string;
  statusVariant: string;
}

interface TabsContent {
  title: string;
  description: string;
  rows: Row[];
}

const DashboardComponent: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("week");

    const tabsContent: Record<string, TabsContent> = {
        week: {
            title: "Orders",
            description: "Recent repair orders from your store.",
            rows: [
                {
                    customer: "Liam Johnson",
                    email: "liam@example.com",
                    type: "Sale",
                    status: "Fulfilled",
                    date: "2023-06-23",
                    amount: "$250.00",
                    statusVariant: "secondary"
                },
                {
                    customer: "Olivia Smith",
                    email: "olivia@example.com",
                    type: "Refund",
                    status: "Declined",
                    date: "2023-06-24",
                    amount: "$150.00",
                    statusVariant: "outline"
                },
                {
                    customer: "Noah Williams",
                    email: "noah@example.com",
                    type: "Subscription",
                    status: "Fulfilled",
                    date: "2023-06-25",
                    amount: "$350.00",
                    statusVariant: "secondary"
                },
                // Add more rows as needed
            ]
        },
        month: {
            title: "Month",
            description: "Monthly orders",
            rows: [
                {
                    customer: "Ella Brown",
                    email: "ella@example.com",
                    type: "Sale",
                    status: "Fulfilled",
                    date: "2023-07-05",
                    amount: "$200.00",
                    statusVariant: "secondary"
                },
                {
                    customer: "William Jones",
                    email: "william@example.com",
                    type: "Subscription",
                    status: "Fulfilled",
                    date: "2023-07-12",
                    amount: "$180.00",
                    statusVariant: "secondary"
                },
                {
                    customer: "Sophia Miller",
                    email: "sophia@example.com",
                    type: "Refund",
                    status: "Declined",
                    date: "2023-07-19",
                    amount: "$100.00",
                    statusVariant: "outline"
                },
                
            ]
        },
        year: {
            title: "Year",
            description: "Yearly orders",
            rows: [
                {
                    customer: "James Davis",
                    email: "james@example.com",
                    type: "Sale",
                    status: "Fulfilled",
                    date: "2023-01-10",
                    amount: "$500.00",
                    statusVariant: "secondary"
                },
                {
                    customer: "Sophia Brown",
                    email: "sophia@example.com",
                    type: "Subscription",
                    status: "Fulfilled",
                    date: "2023-04-15",
                    amount: "$300.00",
                    statusVariant: "secondary"
                },
                {
                    customer: "Noah Wilson",
                    email: "noah@example.com",
                    type: "Refund",
                    status: "Declined",
                    date: "2023-08-20",
                    amount: "$150.00",
                    statusVariant: "outline"
                },
                // Add more rows as needed
            ]
        },
    };

    const handleSelectTab = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <Tabs defaultValue="week" onSelect={handleSelectTab}>
            <div className="flex items-center">
                <TabsList>
                    <TabsTrigger value="week">Week</TabsTrigger>
                    <TabsTrigger value="month">Month</TabsTrigger>
                    <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="h-7 gap-1 text-sm" size="sm" variant="outline">
                                <ListFilterIcon className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only">Filter</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem checked>Fulfilled</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button className="h-7 gap-1 text-sm" size="sm" variant="outline">
                        <FileIcon className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Export</span>
                    </Button>
                </div>
            </div>
            <TabsContent value={activeTab}>
                <Card x-chunk="dashboard-05-chunk-3">
                    <CardHeader className="px-7">
                        <CardTitle>{tabsContent[activeTab].title}</CardTitle>
                        <CardDescription>{tabsContent[activeTab].description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Customer</TableHead>
                                    <TableHead className="hidden sm:table-cell">Type</TableHead>
                                    <TableHead className="hidden sm:table-cell">Status</TableHead>
                                    <TableHead className="hidden md:table-cell">Date</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tabsContent[activeTab].rows.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            <div className="font-medium">{row.customer}</div>
                                            <div className="hidden text-sm text-muted-foreground md:inline">{row.email}</div>
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">{row.type}</TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            <Badge className="text-xs" variant={row.statusVariant}>{row.status}</Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">{row.date}</TableCell>
                                        <TableCell className="text-right">{row.amount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}

export default DashboardComponent;
