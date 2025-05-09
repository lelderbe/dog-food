import { createContext, useContext } from 'react';

interface IProductsContext {
    products: IProduct[];
    onProductLike: (productData: IProductLikeParams) => Promise<IProduct | null>;
}

export const ProductsContext = createContext<IProductsContext>({
    products: [],
    onProductLike: async () => null,
    // or second variant:
    // onProductLike: () => Promise.resolve(null),
});

ProductsContext.displayName = 'ProductsContext';

export const useProducts = () => useContext(ProductsContext);
