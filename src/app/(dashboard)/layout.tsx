import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

const links =[
  {
    label: 'Home',
    path: '/home',  
  },
  {
    label: 'Repair Orders',
    path: '/repair-orders',
  },
  {
    label: 'Employees',
    path: '/employees',
  },
  {
    label: 'Calendar',
    path: '/calendar',
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <Sidebar links={links}/>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
              <Header />
              {children}
            </div>
          </div>
      </body>
    </html>
  );
}
