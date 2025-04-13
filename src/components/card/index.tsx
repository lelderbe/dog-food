import { Typography } from "@mui/material";

export function Card({ name }: IProduct) {
    return (
        <div>
            Card
            <Typography variant="h6">{name}</Typography>
        </div>
    );
}
