import { Typography } from '@mui/material';
import { BackButton } from '../../components/back-button';
import { useProducts } from '../../context/products-context';
import { useCurrentUser } from '../../context/user-context';
import { isLiked } from '../../utils/common';
import { ProductsList } from '../../components/products-list';
import { Spinner } from '../../components/spinner';
import { ErrorMessageBlock } from '../../components/error-message-block';

export const FavoritesPage = () => {
    const currentUser = useCurrentUser();
    const { products } = useProducts();
    const isLoading = !currentUser;
    const emptyFavorites = currentUser?.likes?.length === 0;

    const favoriteProducts = products?.filter((item) => isLiked(item.likes, currentUser?.id)) || [];

    return (
        <>
            <BackButton />
            <Typography variant="h1" sx={{ mb: '20px' }}>
                Избранное
            </Typography>

            {isLoading && <Spinner />}
            {!isLoading && emptyFavorites && (
                <ErrorMessageBlock
                    text="В Избранном пока ничего нет"
                    description="Добавляйте товары в Избранное с помощью ❤️️"
                />
            )}
            {!isLoading && !emptyFavorites && <ProductsList products={favoriteProducts} />}
        </>
    );
};
