import { Typography } from '@mui/material';
import { BackButton } from '../../components/back-button';
import { useProducts } from '../../context/products-context';
import { useCurrentUser } from '../../context/user-context';
import { isLiked } from '../../utils/common';
import { ProductsList } from '../../components/products-list';

export const FavoritesPage = () => {
    const currentUser = useCurrentUser();
    const { products } = useProducts();

    const favoriteProducts = products?.filter((item) => isLiked(item.likes, currentUser?.id)) || [];

    return (
        <>
            <BackButton />
            <Typography variant="h1" sx={{ mb: '20px' }}>
                Избранное
            </Typography>
            <ProductsList products={favoriteProducts} />
        </>
    );
};
