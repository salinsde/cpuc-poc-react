import { Card, Typography } from '@mui/material';
import { EventDate } from '@/routes/dashboard/dashboardLoaders';

const ImportantDates = ({ dates }: { dates: EventDate[] }) => (
    <Card>
        <Typography align="left" variant="h6" color="#046b99" mb={0}>
            Important Dates
        </Typography>

        {dates.map((el) => {
            return (
                <>
                    <Typography
                        align="left"
                        variant="body1"
                        color="grey"
                        mb={0}
                    >
                        {el.event}
                    </Typography>
                    <Typography align="left" variant="body2" mb={2}>
                        {el.date}
                    </Typography>
                </>
            );
        })}
    </Card>
);

export default ImportantDates;
