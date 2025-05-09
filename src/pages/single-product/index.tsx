import { useEffect, useState } from 'react';
// import ProductDetail from '../../components/product-detail';
import { useParams } from 'react-router-dom';
import { Spinner } from '../../components/spinner';
import { NotFoundPage } from '../404';
import { ProductDetail } from '../../components/product-detail';
import { api } from '../../services/api';
import { BackButton } from '../../components/back-button';
import { useProducts } from '../../context/products-context';
// import GoToBackButton from '../../components/go-to-back';

export const SingleProductPage = () => {
    const { onProductLike } = useProducts();
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
            {product && <ProductDetail {...product} onProductLike={handleProductLike} />}
        </>
    );
};
