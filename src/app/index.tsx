import { HomePage } from '../pages/home';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { ChangeEvent, useEffect, useState } from 'react';
import { api } from '../services/api';
import { isLiked } from '../utils/common';
import { Route, Routes } from 'react-router';
import { ProductsPage } from '../pages/products';
import { ProfilePage } from '../pages/profile';
import { NotFoundPage } from '../pages/404';
import { SingleProductPage } from '../pages/single-product';
import { Container } from '@mui/material';
import { FavoritesPage } from '../pages/favorites';
import { UserContext } from '../context/user-context';
import { ProductsContext } from '../context/products-context';
import { SearchContext } from '../context/search-context';

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
        const nextProducts =
            search === '' ? rawProducts : rawProducts.filter((item) => item.name.toLowerCase().includes(search));
        setProducts(nextProducts);
    }, [search, rawProducts]);

    async function handleProductLike(productData: IProductLikeParams): Promise<IProduct | null> {
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
            setTimeout(() => {
                // setTimeout - because backend returns old data, so we wait for update 1 second
                api.getUserInfo()
                    .then((data) => setCurrentUser(data))
                    .catch((error) => console.log(error));
            }, 1000);
            return updatedProduct;
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    function handleSearchInputChange(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        setSearch(e.target.value.toLowerCase());
    }

    return (
        <UserContext.Provider value={currentUser}>
            <ProductsContext.Provider value={{ products, onProductLike: handleProductLike }}>
                <SearchContext.Provider value={{ search, onSearchChange: handleSearchInputChange }}>
                    <Header />
                    <Container
                        disableGutters
                        sx={{ display: 'flex', flexDirection: 'column', padding: '20px 0', flex: '1' }}
                    >
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/profile" element={<ProfilePage />} />
                            <Route path="/favorites" element={<FavoritesPage />} />
                            <Route path="/products" element={<ProductsPage />} />
                            <Route path="/products/:id" element={<SingleProductPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </Container>
                    <Footer />
                </SearchContext.Provider>
            </ProductsContext.Provider>
        </UserContext.Provider>
    );
}
