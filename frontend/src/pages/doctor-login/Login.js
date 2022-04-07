
// @mui
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Link, Alert, Tooltip, Container, Typography, Button } from '@mui/material';

import useBoolean from '../../hooks/useBoolean';
import useResponsive from '../../hooks/useResponsive';
// components
import Page from '../../components/Page';
import Logo from '../../components/Logo';
import Image from '../../components/Image';
import LoginForm from './LoginForm';
import RegisterForm from '../register/RegisterForm';
// sections

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7),
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  height: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Login() {
  const [isLogin, setIsLogin] = useBoolean(true)
  return (
    <Page title="Login">
      <RootStyle>
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Welcome to sheffSurgeries
          </Typography>
        </SectionStyle>

        <Container maxWidth="sm">
          <ContentStyle>
            <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4" gutterBottom>
                  Doctor login
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>Enter your details below.</Typography>
              </Box>
            </Stack>

            {/* {isLogin && <Alert severity="info" sx={{ mb: 3 }}>
              Use email : <strong>user1</strong> / password :<strong>123456</strong>
            </Alert>} */}

            {isLogin ? <LoginForm /> : <RegisterForm />}

            {/* <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              {isLogin ? 'Don’t have an account?' : 'Have an account?'}
              <Button variant="text" onClick={setIsLogin.toggle}>Get started</Button>
            </Typography> */}
          </ContentStyle>
        </Container>
      </RootStyle>
    </Page>
  );
}
