import { Box, CircularProgress } from '@mui/material';

export function Spinner() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
        </Box>
    );
}
