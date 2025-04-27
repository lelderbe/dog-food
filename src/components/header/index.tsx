import { AppBar, Badge, Container, IconButton, Stack, Toolbar, Link as MuiLink } from '@mui/material';
import { Logo } from '../logo';
import { Search } from '../search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { ProfileIcon } from '../../icons/profile';
import { Link } from 'react-router-dom';

interface IProps {
    onChange: React.Dispatch<React.SetStateAction<string>>;
}

export function Header({ onChange }: IProps) {
    return (
        <AppBar position="static" elevation={0}>
            <Container maxWidth="lg" disableGutters sx={{ py: '12px' }}>
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <MuiLink component={Link} to={'/'} underline="none">
                        <Logo />
                    </MuiLink>
                    <Search onChange={onChange} />
                    <Stack direction={'row'} gap={'10px'}>
                        <MuiLink component={Link} to={'/favorites'} state={{ hasBack: true }} underline="none">
                            <IconButton aria-label="add to favorites" sx={{ color: 'text.primary' }}>
                                <Badge badgeContent={12} color="success">
                                    <FavoriteBorderIcon />
                                </Badge>
                            </IconButton>
                        </MuiLink>
                        <IconButton aria-label="shop cart" sx={{ color: 'text.primary' }}>
                            <ShoppingBagOutlinedIcon />
                        </IconButton>
                        <MuiLink component={Link} to={'/profile'} underline="none">
                            <IconButton aria-label="open profile">
                                <ProfileIcon />
                            </IconButton>
                        </MuiLink>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
