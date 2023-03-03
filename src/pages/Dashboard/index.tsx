import { Grid, Stack } from '@mui/material';
import { useDashboardLoader } from '@/routes/dashboard/dashboardLoaders';
import { PageTitle } from '@/components/common/PageTitle';
import TopRowStats from './TopRowStats';
import ReportsCalendar from './Calendar';
import ImportantDates from './ImportantDates';
import MyTasks from './MyTasks';
import SupportTickets from './SupportTickets';
import ProcurementPlan from './ProcurementPlan';
import News from './DashboardNews';

const DashboardMain = () => {
    const data = useDashboardLoader();
    return (
        <>
            <PageTitle title={data.dashTitle} logoSrc={data.dashLogoSrc} />
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <TopRowStats stats={data.stats} />

                    <Grid item container my={2}>
                        <Grid item xs={6}>
                            <MyTasks dates={data.tasks} />
                        </Grid>
                        <Grid item xs={6}>
                            <SupportTickets tickets={data.supportTickets} />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <ProcurementPlan />
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Stack spacing={2}>
                        <ReportsCalendar nextDate={data.nextDate} />
                        <ImportantDates dates={data.importantDates} />
                        <News news={data.news} />
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
};

export default DashboardMain;
