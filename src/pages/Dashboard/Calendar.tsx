import { Card, Typography } from '@mui/material';
import Calendar from '@/components/styled/Calendar';

const ReportsCalendar = ({ nextDate }: { nextDate: string }) => (
    <Card>
        <Typography align="left" paragraph color="grey" mb={0}>
            Reporting Calendar
        </Typography>
        <Calendar value={new Date(nextDate)} />
    </Card>
);

export default ReportsCalendar;
