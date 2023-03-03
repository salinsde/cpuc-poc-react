import { Grid } from '@mui/material';
import TypographyCard from '@/components/common/TypographyCard';
import { DashStatsProps } from '@/routes/dashboard/dashboardLoaders';

const TopRowStats = ({ stats }: DashStatsProps) => {
    const { success, pending, errors, late } = stats;
    return (
        <Grid container spacing={2}>
            {success && (
                <Grid item xs={3}>
                    <TypographyCard
                        header="Successful Submissions"
                        body={success}
                        bodyColor="green"
                    />
                </Grid>
            )}
            {pending && (
                <Grid item xs={3}>
                    <TypographyCard
                        header="Pending Submissions"
                        body={pending}
                        bodyColor="grey"
                    />
                </Grid>
            )}
            {errors && (
                <Grid item xs={3}>
                    <TypographyCard
                        header="Entries with Errors"
                        body={errors}
                        bodyColor="red"
                    />
                </Grid>
            )}
            {late && (
                <Grid item xs={3}>
                    <TypographyCard
                        header="Late or not started"
                        body={late}
                        bodyColor="yellow"
                    />
                </Grid>
            )}
        </Grid>
    );
};

export default TopRowStats;
