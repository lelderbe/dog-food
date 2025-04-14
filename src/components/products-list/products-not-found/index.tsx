import { Button, Stack, Typography } from '@mui/material';
import icon from './assets/icon.png';
import s from './styles.module.css';

export function ProductsNotFound() {
    return (
        <Stack direction="column" alignItems="center" py={'46px'}>
            <img className={s.icon} src={icon} alt="" />
            <Typography component="p" variant="p1" sx={{ my: '20px', fontWeight: '700', textAlign: 'center' }}>
                Простите, по вашему запросу <br />
                товаров не надено.
            </Typography>
            <Button component="a" href="/" variant="secondary">
                На главную
            </Button>
        </Stack>
    );
}
