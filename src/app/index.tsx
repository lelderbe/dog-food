import { HomePage } from '../pages/home-page';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { isLiked } from '../utils/common';

export function App() {
    const [search, setSearch] = useState('');
    const [rawProducts, setRawProducts] = useState<IProduct[]>([]);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [currentUser, setCurrentUser] = useState<IUser | null>(null);

    useEffect(() => {
        api.getAllInfo()
            .then(([productsData, userData]) => {
                setRawProducts(productsData.products);
                setCurrentUser(userData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        if (search === '') {
            setProducts(rawProducts);
        }

        const nextProducts = rawProducts.filter((item) => item.name.toLowerCase().includes(search));
        setProducts(nextProducts);
    }, [search, rawProducts]);

    async function handleProductLike(productData: IProductLikeParam): Promise<void> {
        const hasLike = isLiked(productData.likes, currentUser?.id);
        try {
            await api.changeLikeProductStatus(productData.id, hasLike);
            const updatedProduct = await api.getProductById(productData.id);
            const nextRawProducts = rawProducts.map((item) => {
                if (item.id === updatedProduct.id) {
                    return updatedProduct;
                }
                return item;
            });
            setRawProducts(nextRawProducts);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Header onChange={setSearch} />
            <HomePage search={search} products={products} currentUser={currentUser} onLike={handleProductLike} />
            <Footer />
        </>
    );
}
