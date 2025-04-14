import { useState } from 'react';
import { ProductsList } from '../../components/products-list';
import { Sort } from '../../components/sort';
import { productsData } from '../../mocks/products';
import { Container, Typography } from '@mui/material';

export function HomePage() {
    const [products, setProducts] = useState<IProduct[]>(productsData.products);

    return (
        <Container component="main" disableGutters sx={{ padding: '20px 0', flex: '1' }}>
            <Typography variant="h1" sx={{ mb: '20px' }}>
                Каталог
            </Typography>
            <Sort />
            <ProductsList products={products} />
        </Container>
    );
}
