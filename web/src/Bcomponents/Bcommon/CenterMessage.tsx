import { Stack, Typography } from '@mui/material';

interface ICenterMessage {
  message: string
}

export const CenterMessage = ({ message }: ICenterMessage) => (
  <Stack direction='column' height='80vh' alignItems='center' justifyContent='center' gap='2rem'>
    <Typography variant='h4'>{message}</Typography>
  </Stack>
)