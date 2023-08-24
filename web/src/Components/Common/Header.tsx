import { ArrowBackIos } from '@mui/icons-material';
import { AppBar, IconButton, Stack, Toolbar, Typography, styled } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'
})

export const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleBackButton = () => {
        if (navigate.length > 1) navigate(-1)
        else navigate('/')
    }

    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Stack direction='row' alignItems='center' style={{ cursor: 'pointer' }} onClick={handleBackButton}>
                    {location.pathname !== '/' && <IconButton><ArrowBackIos /></IconButton>}
                    <Stack direction='row' gap='.5rem' alignItems='end'>
                        <Typography variant='h6'>[projectName]</Typography>
                        <Typography variant='body2'>v {process.env.REACT_APP_VERSION}</Typography>
                    </Stack>
                </Stack>
            </StyledToolbar>
        </AppBar >
    )
}