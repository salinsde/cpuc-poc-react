import { Card } from '@mui/material';
import Typography from '@mui/material/Typography';
import { TypographyCardProps } from '../types';

const TypographyCard = ({
    header,
    body,
    bodyColor,
    bodyVariant,
}: TypographyCardProps) => {
    return (
        <Card variant="elevation">
            <Typography gutterBottom align="center" paragraph color="grey">
                {header}
            </Typography>
            <Typography
                align="center"
                variant={bodyVariant || 'h2'}
                color={bodyColor}
            >
                {body}
            </Typography>
        </Card>
    );
};

export default TypographyCard;
