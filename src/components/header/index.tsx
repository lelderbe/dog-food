import { AppBar, Badge, Container, IconButton, Stack, Toolbar, Link as MuiLink } from '@mui/material';
import { Logo } from '../logo';
import { Search } from '../search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { ProfileIcon } from '../../icons/profile';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../../context/user-context';

interface IProps {
    onChange: React.Dispatch<React.SetStateAction<string>>;
}

export function Header({ onChange }: IProps) {
    const currentUser = useCurrentUser();
    const likesCount = currentUser?.likes?.length || 0;

    return (
        <AppBar position="static" elevation={0}>
            <Container maxWidth="lg" disableGutters sx={{ py: '12px' }}>
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <MuiLink component={Link} to={'/'} underline="none">
                        <Logo />
                    </MuiLink>
                    <Search onChange={onChange} />
                    <Stack direction={'row'} gap={'10px'}>
                        <IconButton
                            component={Link}
                            to={'/favorites'}
                            state={{ hasBack: true }}
                            aria-label="favorites"
                            sx={{ color: 'text.primary' }}
                        >
                            <Badge badgeContent={likesCount} color="success">
                                <FavoriteBorderIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="shop cart" sx={{ color: 'text.primary' }}>
                            <ShoppingBagOutlinedIcon />
                        </IconButton>
                        <IconButton component={Link} to={'/profile'} aria-label="open profile">
                            <ProfileIcon />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
