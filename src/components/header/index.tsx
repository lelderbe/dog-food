import { AppBar, Badge, Container, IconButton, Stack, Toolbar } from "@mui/material";
import { Logo } from "../logo";
import { Search } from "../search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { ProfileIcon } from "../../icons/profile";

export function Header() {
    return (
        <AppBar position="static" elevation={0}>
            <Container maxWidth="lg" disableGutters sx={{ py: "12px" }}>
                <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                    <Logo />
                    <Search />
                    <Stack direction={"row"} gap={"10px"}>
                        <IconButton aria-label="add to favorites" sx={{ color: "text.primary" }}>
                            <Badge badgeContent={12} color="success">
                                <FavoriteBorderIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="shop cart" sx={{ color: "text.primary" }}>
                            <ShoppingBagOutlinedIcon />
                        </IconButton>
                        <IconButton aria-label="open profile">
                            <ProfileIcon />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
