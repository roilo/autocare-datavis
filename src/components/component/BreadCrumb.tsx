"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Fragment } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";


const BreadCrumb = () => {
    const paths = usePathname();
    const pathNames = paths.split('/').filter(path => path);

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href="/">Dashboard</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {pathNames.length > 0 && <BreadcrumbSeparator />}
                {
                    pathNames.map( (pathName, index) => {
                        const href = `/${pathNames.slice(0, index + 1).join('/')}`;
                        const linkName = pathName[0].toUpperCase() + pathName.slice(1, pathName.length);
                        const isLastPath = pathNames.length === index + 1;
                        return (
                            <Fragment key={index}>
                                <BreadcrumbItem>
                                    {!isLastPath ?
                                        <BreadcrumbLink asChild>
                                            <Link href={href}>{linkName}</Link>
                                        </BreadcrumbLink> :
                                        <BreadcrumbPage>{linkName}</BreadcrumbPage>
                                    }   
                                </BreadcrumbItem>
                                {pathNames.length !== index + 1 && <BreadcrumbSeparator />}
                            </Fragment>
                        );
                    })
                }
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default BreadCrumb;
