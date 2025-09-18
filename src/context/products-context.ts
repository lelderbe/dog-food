import { createContext, useContext } from 'react';

interface IProductsContext {
    products: IProduct[];
    onProductLike: (productData: IProductLikeParams) => Promise<IProduct | null>;
}

export const ProductsContext = createContext<IProductsContext>({
    products: [],
    onProductLike: async () => null,
    // onProductLike: () => Promise.resolve(null), // second variant
});

ProductsContext.displayName = 'ProductsContext';

export const useProducts = () => useContext(ProductsContext);
