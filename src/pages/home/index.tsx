import { Typography, Stack, Button, Container } from '@mui/material';
import promo from './assets/promo.png';
import s from './styles.module.css';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function HomePage() {
    return (
        <Container component="main" disableGutters sx={{ flex: '1' }}>
            <Stack direction="row" sx={{ justifyContent: 'space-between', px: '12px', my: '40px' }}>
                <Stack sx={{ maxWidth: '425px' }}>
                    <Typography variant="h0" sx={{ mb: '20px' }}>
                        Крафтовые лакомства для собак
                    </Typography>
                    <Typography variant="h2" sx={{ mb: '40px', fontWeight: '300' }}>
                        Всегда свежие лакомства ручной <br />
                        работы с доставкой по России и <br />
                        Миру
                    </Typography>
                    <Button
                        component={Link}
                        to={'/products'}
                        variant="secondary"
                        endIcon={<ArrowForwardIosIcon />}
                        sx={{
                            alignSelf: 'flex-start',
                            py: '14px',
                            px: '26px',
                            boxShadow:
                                '0px 2px 16px 0px rgba(96, 97, 112, 0.16),0px 0px 1px 0px rgba(40, 41, 61, 0.02)',
                        }}
                    >
                        <Typography variant="h3" sx={{ fontWeight: '700' }}>
                            Каталог
                        </Typography>
                    </Button>
                </Stack>
                <img className={s.promo__img} src={promo} alt="" />
            </Stack>
        </Container>
    );
}
