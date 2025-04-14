import { useEffect, useState } from 'react';
import { ProductsList } from '../../components/products-list';
import { Sort } from '../../components/sort';
import { productsData } from '../../mocks/products';
import { Container, Typography } from '@mui/material';
import { plural } from '../../utils/common';

interface IProps {
    search: string;
}

const rawProducts = productsData.products;

export function HomePage({ search }: IProps) {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        if (search === '') {
            setProducts(rawProducts);
        }

        const nextProducts = rawProducts.filter((item) => item.name.toLowerCase().includes(search));
        setProducts(nextProducts);
    }, [search]);

    return (
        <Container component="main" disableGutters sx={{ padding: '20px 0', flex: '1' }}>
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
            <ProductsList products={products} />
        </Container>
    );
}
