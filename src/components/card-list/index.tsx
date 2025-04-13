import { Card } from "../card";

interface IProps {
    products: IProduct[];
}

export function CardList({ products }: IProps) {
    return (
        <div>
            CardList
            {products.map((product) => {
                return <Card key={product.id} {...product} />;
            })}
        </div>
    );
}
