import { Card, Typography, Link } from '@mui/material';
import { DashboardNews } from '@/routes/dashboard/dashboardLoaders';

const News = ({ news }: { news: DashboardNews[] }) => (
    <Card>
        <Typography align="left" variant="h6" color="#046b99" mb={0}>
            News
        </Typography>

        {news.map((el) => {
            return (
                <>
                    <Link href={el.url} align="left" variant="body1" mb={0}>
                        {el.event}
                    </Link>
                    <Typography
                        align="left"
                        color="grey"
                        variant="body2"
                        mb={2}
                    >
                        {el.date}
                    </Typography>
                </>
            );
        })}
    </Card>
);

export default News;
