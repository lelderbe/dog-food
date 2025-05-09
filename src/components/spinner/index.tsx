import { Box, CircularProgress } from '@mui/material';

export function Spinner() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flex: 1, flexWrap: 'wrap' }}>
            <CircularProgress />
        </Box>
    );
}
