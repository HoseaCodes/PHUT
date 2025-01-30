import { DashboardCard } from '../../../components/dashboard/dashboard-card';
import { RecentActivity } from '../../../components/dashboard/recent-activity';
import { UpcomingTasks } from '../../../components/dashboard/upcoming-tasks';

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <DashboardCard
                    title="Active Projects"
                    value="5"
                />
                <DashboardCard
                    title="Trainees"
                    value="12"
                />
                <DashboardCard
                    title="Active Clients"
                    value="8"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <RecentActivity />
                <UpcomingTasks />
            </div>
        </div>
    )
}