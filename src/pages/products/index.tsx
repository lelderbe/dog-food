import { ProductsList } from '../../components/products-list';
import { Sort } from '../../components/sort';
import { Typography } from '@mui/material';
import { plural } from '../../utils/common';

interface IProps {
    search: string;
    products: IProduct[];
    currentUser: IUser | null;
    onProductLike: (productData: IProductLikeParams) => Promise<IProduct | null>;
}

export function ProductsPage({ search, products, currentUser, onProductLike }: IProps) {
    return (
        <>
            {search === '' && (
                <>
                    <Typography variant="h1" sx={{ mb: '20px' }}>
                        Каталог
                    </Typography>
                    <Sort />
                </>
            )}
            {search !== '' && (
                <Typography variant="h1" sx={{ fontWeight: '300' }}>
                    По запросу <span style={{ fontWeight: '800' }}>{search}</span> найдено {products.length}{' '}
                    {plural(products.length, ['товар', 'товара', 'товаров'])}
                </Typography>
            )}
            <ProductsList products={products} currentUser={currentUser} onProductLike={onProductLike} />
        </>
    );
}
