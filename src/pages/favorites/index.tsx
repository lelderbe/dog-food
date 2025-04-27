import { Typography } from '@mui/material';
import { BackButton } from '../../components/back-button';
import { useContext } from 'react';
// import { IProductsContext, ProductsContext } from '../../context/products-context';
// import { UserContext } from '../../context/user-context';
import { ProductsList } from '../../components/products-list';

export const FavoritesPage = () => {
    // const { products } = useContext(ProductsContext) as IProductsContext;
    // const currentUser = useContext(UserContext);

    // const favoriteProducts = products?.filter((item) => isLiked(item.likes, currentUser?.id)) || [];

    return (
        <>
            <BackButton />
            <Typography variant="h1" sx={{ mb: '20px' }}>
                Избранное
            </Typography>
            {/* <ProductsList products={favoriteProducts} /> */}
        </>
    );
};
