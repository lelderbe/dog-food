export {};

declare global {
    interface IProduct {
        id: string;
        images: string;
        description: string;
        name: string;
        price: number;
        createdAt: string;
        updatedAt?: string;
        slug: string;
        discount: number;
        isPublished: boolean;
        stock: number;
        wight?: string;
        categoryId?: number;
        userId?: string;
        tags: string[]; // TODO: check type
        category?: ICategory;
        // likes?: ILike[];
        likes?: IFavoriteUser[];
        reviews?: IReview[];
        user?: IUser;
    }

    interface ICategory {
        id: number;
        name: string;
        slug: string;
    }

    interface ILike {
        id: string;
        userId: string;
        productId: string;
        user?: IUser;
        product?: IProduct;
    }

    interface IReview {
        user: IUser;
        createdAt: string;
        text: string;
        rating: number;
        id: string;
        product: IProduct;
    }

    interface IUser {
        id: string;
        createdAt?: string;
        updatedAt?: string;
        email: string;
        password?: string;
        provider?: null; // TODO: check type
        isAdmin?: boolean;
        isBlocked?: boolean;
        name: string;
        avatarPath: string;
        about: string;
        phone: string;
        roles: string[]; // ["USER"]; TODO: check type
        likes?: ILike[];
        favoritesPost?: IFavoritesPost[];
    }

    interface IFavorites {
        id: string;
        userId: string;
        postId?: string;
        productId: string;
    }

    interface IFavoriteUser extends IFavorites {
        user: IUser;
    }

    interface IFavoritesPost extends IFavorites {
        post: IPost;
    }

    interface IPost {
        id: string;
        createdAt: string;
        updatedAt: string;
        title: string;
        slug: string;
        description: string;
        body: string;
        images: string;
        tags: string[];
        isPublished: boolean;
        favoritesCount: number;
        userId: string;
    }

    interface IProductLikeParam {
        id: string;
        likes: IFavoriteUser[];
    }
}
