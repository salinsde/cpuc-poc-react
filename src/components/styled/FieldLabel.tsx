import { styled } from '@mui/system';

const Label = styled('span')`
    font-weight: bold;
`;

const FieldLabel = ({ label }: { label: string }) => <Label>{label}</Label>;

export default FieldLabel;
