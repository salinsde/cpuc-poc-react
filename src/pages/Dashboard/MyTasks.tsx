import { Card, Typography, Grid } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { EventDate } from '@/routes/dashboard/dashboardLoaders';

const MyTasks = ({ dates }: { dates: EventDate[] }) => (
    <Card>
        <Typography align="left" variant="h6" color="#046b99" mb={0}>
            My Tasks
        </Typography>

        {dates.map((el) => {
            return (
                <Grid container>
                    <Grid item xs={11}>
                        <Typography
                            align="left"
                            variant="body1"
                            color="grey"
                            mb={0}
                        >
                            <CheckBoxOutlineBlankIcon
                                fontSize="small"
                                sx={{ verticalAlign: 'sub' }}
                            />{' '}
                            {el.event}
                        </Typography>
                        <Typography align="left" variant="body2" mb={2}>
                            {el.date}
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <MoreVertIcon />
                    </Grid>
                </Grid>
            );
        })}
    </Card>
);

export default MyTasks;
