import { ProductsList } from '../../components/products-list';
import { Sort } from '../../components/sort';
import { Typography } from '@mui/material';
import { plural } from '../../utils/common';
import { useProducts } from '../../context/products-context';

interface IProps {
    search: string;
}

export function ProductsPage({ search }: IProps) {
    const { products, onProductLike } = useProducts();

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
            <ProductsList products={products} onProductLike={onProductLike} />
        </>
    );
}
