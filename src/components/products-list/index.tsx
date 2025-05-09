import { Grid, Pagination, Stack } from '@mui/material';
import { ProductCard } from '../product-card';
import { ProductsNotFound } from './products-not-found';
import { usePagination } from '../../hooks/use-pagination';
import { ChangeEvent } from 'react';

const PRODUCTS_PER_PAGE = 12;

interface IProps {
    products: IProduct[];
}

export function ProductsList({ products }: IProps) {
    const { getCurrentData, totalPages, currentPage, setPagePaginated } = usePagination<IProduct>(
        products,
        PRODUCTS_PER_PAGE
    );

    function handlePageChange(e: ChangeEvent<unknown>, page: number) {
        setPagePaginated(page);
    }

    const productsToShow = getCurrentData();

    if (!productsToShow?.length) {
        return <ProductsNotFound />;
    }

    return (
        <>
            <Grid container rowSpacing={{ xs: 5 }} columnSpacing={{ xs: 1, sm: 2 }} py="40px">
                {productsToShow.map((product) => {
                    return <ProductCard key={product.id} {...product} />;
                })}
            </Grid>
            <Stack spacing={2} sx={{ mt: 2 }} alignItems="center">
                <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} />
            </Stack>
        </>
    );
}
