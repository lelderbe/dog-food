import { ProductsList } from '../../components/products-list';
import { Sort } from '../../components/sort';
import { Typography } from '@mui/material';
import { plural } from '../../utils/common';
import { useProducts } from '../../context/products-context';
import { Spinner } from '../../components/spinner';
import { useSearch } from '../../context/search-context';
import { ErrorMessageBlock } from '../../components/error-message-block';

export function ProductsPage() {
    const { search } = useSearch();
    const { products } = useProducts();
    const emptyProducts = products.length === 0;
    const isLoading = search === '' && emptyProducts;

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

            {isLoading && <Spinner />}
            {!isLoading && emptyProducts && (
                <ErrorMessageBlock text={'Простите, по вашему запросу\nтоваров не найдено'} />
            )}
            {!isLoading && !emptyProducts && <ProductsList products={products} />}
        </>
    );
}
