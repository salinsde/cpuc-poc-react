import { styled } from '@mui/material/styles';
import { Grid, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import pgeLogo from '@/assets/PGE-Emblem.png';

const Logo = styled('img')`
    max-height: 25px;
    display: inline-block;
    vertical-align: middle;
`;

const TypoBox = ({
    text,
    number,
    color,
}: {
    text: string;
    number: string;
    color: string;
}) => {
    return (
        <Paper>
            <Typography align="center" paragraph color="grey">
                {text}
            </Typography>
            <Typography align="center" variant="h2" color={color}>
                {number}
            </Typography>
        </Paper>
    );
};

const PGE = () => {
    return (
        <>
            <Typography variant="h6">
                <Logo src={pgeLogo} />
                PG&E CPUC Renewables Portfolio Standard Reporting
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TypoBox
                        text="Successful Submissions"
                        number="55"
                        color="green"
                    />
                </Grid>
                <Grid item xs={3}>
                    <TypoBox
                        text="Pending Submissions"
                        number="5"
                        color="grey"
                    />
                </Grid>
                <Grid item xs={3}>
                    <TypoBox
                        text="Entries with Errors"
                        number="21"
                        color="red"
                    />
                </Grid>
                <Grid item xs={3}>
                    <TypoBox
                        text="Late or not started"
                        number="2"
                        color="yellow"
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default PGE;
