import { useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';



// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();
  const { instance } = useMsal();
  const navigate = useNavigate();

  const handleClick = async() => {
    await instance.loginPopup();
    navigate('/');
  };

  const renderForm = (
  <LoadingButton
    sx={{marginTop: 5}}
    fullWidth
    size="large"
    type="submit"
    variant="contained"
    onClick={handleClick}
  >
    Login
  </LoadingButton>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      {/* <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      /> */}

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 10,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Agent Login App</Typography>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
