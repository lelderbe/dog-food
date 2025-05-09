import {
    Button,
    Card as MuiCard,
    CardMedia,
    Grid,
    IconButton,
    Typography,
    Badge,
    Box,
    Link as MuiLink,
} from '@mui/material';
import { SyntheticEvent } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import noImage from './assets/no-image.png';
import { isLiked } from '../../utils/common';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../../context/user-context';

interface IProps extends IProduct {
    onProductLike: (productData: IProductLikeParams) => Promise<IProduct | null>;
}

export function ProductCard({ id, name, images, price, wight, discount, likes, onProductLike }: IProps) {
    const currentUser = useCurrentUser();
    const discountPrice = price - (price * discount) / 100;
    const isProductLiked = isLiked(likes, currentUser?.id);

    const handleLikeClick = () => {
        if (likes) {
            onProductLike({ id, likes });
        }
    };

    return (
        <Grid size={{ xs: 6, sm: 4, md: 4, lg: 3 }}>
            <MuiCard elevation={0} sx={{ position: 'relative', minWidth: '236px', maxWidth: '236px' }}>
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
                <IconButton sx={{ position: 'absolute', top: '0px', right: '1px' }} onClick={handleLikeClick}>
                    {isProductLiked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                </IconButton>
                <MuiLink component={Link} to={id} state={{ hasBack: true }} underline="none">
                    <CardMedia
                        component="img"
                        image={images}
                        alt={name}
                        onError={(e: SyntheticEvent<HTMLImageElement>) => (e.currentTarget.src = noImage)}
                        sx={{ width: '187px', height: '187px', margin: '0 auto 16px', objectFit: 'contain' }}
                    />
                </MuiLink>
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
                <Typography
                    component="p"
                    variant="caption"
                    color="text.secondary"
                    sx={{ mb: '2px', lineHeight: '14px' }}
                >
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
            </MuiCard>
        </Grid>
    );
}
