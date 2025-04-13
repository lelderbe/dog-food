import { useState } from "react";
import { CardList } from "../../components/card-list";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Sort } from "../../components/sort";
import { productsData } from "../../mocks/products";
import { Typography } from "@mui/material";

export function HomePage() {
    const [products, setProducts] = useState<IProduct[]>(productsData.products);

    return (
        <main>
            <Header />
            <Typography variant="h0">Test</Typography>
            <Sort />
            <CardList products={products} />
            <Footer />
        </main>
    );
}
