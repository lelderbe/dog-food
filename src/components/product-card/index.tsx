import {
    Button,
    ButtonProps,
    Card as MUICard,
    CardMedia,
    Grid,
    IconButton,
    styled,
    Typography,
    Badge,
    Box,
} from '@mui/material';
import { SyntheticEvent } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import noImage from './assets/no-image.png';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    boxShadow: 'none',
    textTransform: 'none',
    padding: '10px 18px',
    border: 'none',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.main,
    borderRadius: '55px',
    '&:hover': {
        backgroundColor: '#FFAA0D',
        color: '#F44336',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
}));

export function ProductCard({ name, images, price, wight, discount }: IProduct) {
    const discountPrice = price - (price * discount) / 100;

    return (
        <Grid size={{ xs: 6, sm: 4, md: 4, lg: 3 }}>
            <MUICard elevation={0} sx={{ position: 'relative', minWidth: '236px', maxWidth: '236px' }}>
                <Box sx={{ position: 'absolute', top: '4px' }}>
                    <Badge
                        badgeContent={`-${discount} %`}
                        color="error"
                        invisible={!discount}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        sx={{
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <Box sx={{ minWidth: '30px' }} />
                    </Badge>
                </Box>
                <IconButton sx={{ position: 'absolute', top: '0px', right: '1px' }}>
                    <FavoriteBorderIcon />
                </IconButton>
                <CardMedia
                    component="img"
                    image={images}
                    alt={name}
                    onError={(e: SyntheticEvent<HTMLImageElement>) => (e.currentTarget.src = noImage)}
                    sx={{ width: '187px', height: '187px', margin: '0 auto 16px', objectFit: 'contain' }}
                />
                <Typography component="p" variant="s1" sx={{ textDecoration: 'line-through', minHeight: '14px' }}>
                    {discount ? `${price} ₽` : ''}
                </Typography>
                <Typography
                    component="p"
                    variant="h3"
                    color={discountPrice ? 'error' : 'primary'}
                    sx={{ fontWeight: 800, mb: '6px' }}
                >
                    {discountPrice ? discountPrice.toFixed(0) : price} ₽
                </Typography>
                <Typography component="p" variant="caption" color="text.secondary" sx={{ mb: '2px', lineHeight: 24 }}>
                    {wight}
                </Typography>
                <Typography
                    component="p"
                    variant="p1"
                    sx={{
                        fontWeight: 600,
                        mb: '16px',
                        pr: '20px',
                        letterSpacing: 0,
                        minHeight: '48px',
                        maxHeight: '48px',
                        lineHeight: '24px',
                        overflow: 'hidden',
                    }}
                >
                    {name}
                </Typography>
                <Button variant="primary">В корзину</Button>
            </MUICard>
        </Grid>
    );
}
