import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Login = () => {
  
  return (
    <div className='Login'>
    <>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
        <div className='btn-accueil'>
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            ><Link href="/">Accueil</Link>
            </Button>
        </div>
          <form>
            <div className='Sign-inh4'>
            <Box sx={{ my: 1 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Se connecter
              </Typography>
            </Box> 
            </div>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              name="email"
              type="email"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Mot de Passe"
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Se connecter
              </Button>
            </Box>
            <div className='btn-inscription'>
                <Link
                  href="/register"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  Inscription
                </Link>
              </div>          
          </form>
        </Container>
      </Box>
    </>
    </div>
  );
};

export default Login;
