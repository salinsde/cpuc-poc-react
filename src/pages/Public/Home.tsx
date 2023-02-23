import { Grid, Typography } from '@mui/material';
import graph from '@/assets/dummyGraph.jpg';

const Home = () => (
    <Grid container>
        <Grid item xs={5}>
            <Typography variant="h4">
                Renewables Portfolio Standard Reporting
            </Typography>
            <Typography paragraph>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
            </Typography>
        </Grid>
        <Grid item xs={7} p={2}>
            <img src={graph} width="100%" />
        </Grid>
    </Grid>
);

export default Home;
