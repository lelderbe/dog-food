import { ProductsList } from '../../components/products-list';
import { Sort } from '../../components/sort';
import { Container, Typography } from '@mui/material';
import { plural } from '../../utils/common';

interface IProps {
    search: string;
    products: IProduct[];
    currentUser: IUser | null;
    onLike: (productData: IProductLikeParam) => void;
}

export function HomePage({ search, products, currentUser, onLike }: IProps) {
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
            <ProductsList products={products} currentUser={currentUser} onLike={onLike} />
        </Container>
    );
}
