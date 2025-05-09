import { Box, Button, Stack, Typography } from '@mui/material';
import icon from './assets/icon.png';
import s from './styles.module.css';

interface IProps {
    text: string;
    description?: string;
}

export function ErrorMessageBlock({ text, description }: IProps) {
    return (
        <Stack direction="column" alignItems="center" py={'46px'}>
            <img className={s.icon} src={icon} alt="" />
            <Box sx={{ my: '20px', textAlign: 'center' }}>
                <Typography className={s.text} component="p" variant="p1" sx={{ fontWeight: '700' }}>
                    {text}
                </Typography>
                <Typography component="p" variant="p2" sx={{ fontWeight: '400' }}>
                    {description}
                </Typography>
            </Box>
            <Button component="a" href="/" variant="secondary">
                На главную
            </Button>
        </Stack>
    );
}
