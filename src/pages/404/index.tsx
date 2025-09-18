import { Typography, Stack, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
    return (
        <Container disableGutters sx={{ flex: '1' }}>
            <Stack alignItems="center" height="100%" spacing={2}>
                <Typography variant="h1" align="center">
                    404
                </Typography>
                <Typography variant="h3" align="center">
                    Страница не найдена
                </Typography>
                <Typography variant="caption" align="center">
                    Возможно, она была перемещена, или вы просто неверно указали адрес страницы.
                </Typography>
                <Button component={Link} to="/">
                    Перейти на главную
                </Button>
            </Stack>
        </Container>
    );
}
