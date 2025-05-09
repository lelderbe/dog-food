import { Avatar, Button, Typography, Stack, Box } from '@mui/material';
import { useCurrentUser } from '../../context/user-context';
import { MailIcon } from '../../icons/mail';
import { PhoneIcon } from '../../icons/phone';

export function ProfilePage() {
    const currentUser = useCurrentUser();

    return (
        <Box sx={{ px: '126px' }}>
            <Typography variant="h1" sx={{ mb: '20px' }}>
                Профиль
            </Typography>
            <Avatar
                alt={currentUser?.name}
                src={currentUser?.avatarPath}
                sx={{ width: 150, height: 150, mb: '20px' }}
            />
            <Typography variant="h3" sx={{ mb: '8px' }}>
                {currentUser?.name}
            </Typography>
            <Stack gap="4px" sx={{ mb: '24px' }}>
                <Stack direction="row" alignItems="center" gap="8px">
                    <PhoneIcon />
                    <Typography variant="s1" color="text.secondary">
                        {currentUser?.phone}
                    </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" gap="8px">
                    <MailIcon />
                    <Typography variant="s1" color="text.secondary">
                        {currentUser?.email}
                    </Typography>
                </Stack>
            </Stack>
            <Stack>
                <Button variant="secondary" sx={{ mb: '40px', alignSelf: 'flex-start' }}>
                    Изменить
                </Button>
                <Button variant="secondary" sx={{ alignSelf: 'flex-start' }}>
                    Выйти
                </Button>
            </Stack>
        </Box>
    );
}
