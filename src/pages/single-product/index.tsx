import { useContext, useEffect, useState } from 'react';
import { Container } from '@mui/material';
// import ProductDetail from '../../components/product-detail';
import { useParams } from 'react-router-dom';
import { Spinner } from '../../components/spinner';
import { NotFoundPage } from '../404';
import { ProductDetail } from '../../components/product-detail';
import { api } from '../../services/api';
import { BackButton } from '../../components/back-button';
// import GoToBackButton from '../../components/go-to-back';
// import { IProductsContext, ProductsContext } from '../../context/products-context';

interface IProps {
    currentUser: IUser | null;
    onProductLike: (productData: IProductLikeParams) => Promise<IProduct | null>;
}

export const SingleProductPage = ({ currentUser, onProductLike }: IProps) => {
    // const { onProductLike } = useContext(ProductsContext) as IProductsContext;
    const { id } = useParams();

    const [product, setProduct] = useState<IProduct | null>(null);
    const [isError, setIsError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function handleProductLike(productData: IProductLikeParams) {
        onProductLike(productData)
            .then((updatedProduct) => {
                if (updatedProduct) {
                    setProduct(updatedProduct);
                }
            })
            .catch((err) => console.error(err));
    }

    useEffect(() => {
        if (!id) {
            return;
        }

        setIsLoading(true);
        api.getProductById(id)
            .then((dataProduct) => setProduct(dataProduct))
            .catch((err) => {
                console.error(err);
                setIsError(true);
            })
            .finally(() => setIsLoading(false));
    }, [id]);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <NotFoundPage />;
    }

    return (
        <>
            <BackButton />
            {product && <ProductDetail {...product} currentUser={currentUser} onProductLike={handleProductLike} />}
        </>
    );
};
