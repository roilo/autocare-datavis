import { EmployeesCard } from '@/components/component/EmployeesCard';
import EmployeesTable from '@/components/component/EmployeesTable';
import { DynamicDashboard } from '@/components/component/DynamicDashboard'

export default function Page() {
    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <DynamicDashboard />
                <EmployeesTable />
            </div>
            <EmployeesCard />
        </main>
    );
}