import { Grid } from '@mui/material';
import { ProductCard } from '../product-card';
import { ProductsNotFound } from './products-not-found';

interface IProps {
    products: IProduct[];
}

export function ProductsList({ products }: IProps) {
    if (!products.length) {
        return <ProductsNotFound />;
    }

    return (
        <>
            <Grid container rowSpacing={{ xs: 5 }} columnSpacing={{ xs: 1, sm: 2 }} py="40px">
                {products.map((product) => {
                    return <ProductCard key={product.id} {...product} />;
                })}
            </Grid>
            {/* <Stack spacing={2} sx={{ mt: 2 }} alignItems='center'>
                    <Pagination count={countPages} page={currentPage} onChange={handlePageChange} />
                </Stack> */}
        </>
    );
}
