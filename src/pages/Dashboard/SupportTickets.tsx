import { Card, Typography, Grid } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SupportTicket } from '@/routes/dashboard/dashboardLoaders';
import FieldLabel from '@/components/styled/FieldLabel';

const SupportTickets = ({ tickets }: { tickets: SupportTicket[] }) => (
    <Card>
        <Typography align="left" variant="h6" color="#046b99" mb={0}>
            Support Tickets
        </Typography>

        {tickets.map((el) => {
            return (
                <Grid container>
                    <Grid item xs={11}>
                        <Typography
                            align="left"
                            variant="body1"
                            color="grey"
                            mb={0}
                        >
                            {el.title}
                        </Typography>
                        <Typography align="left" variant="body2" mb={2}>
                            <FieldLabel label="Ticket:" /> {el.ticketNumber}{' '}
                            <FieldLabel label="Created:" />
                            {el.createdDate} <FieldLabel label="Status:" />{' '}
                            {el.status}
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

export default SupportTickets;
