import React from 'react';
import { Box, Button, Checkbox, Container, FormHelperText, Link, TextField, Typography} from '@mui/material';

const Register = () => {
  
  return (
    <>
    <div className='Register'>
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
          <form>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Créer un nouveau compte
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Utilisez votre email pour créer un nouveau compte
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Prénom"
              margin="normal"
              name="firstName"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Nom"
              margin="normal"
              name="lastName"
              variant="outlined"
            />
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
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
              <Checkbox
                name="policy"
              />
              <Typography
                color="textSecondary"
                variant="body2"
              >
                J'ai lu les
                {' '}
                <Link
                  href="#"
                  passHref
                >
                  <Link
                    color="primary"
                    underline="always"
                    variant="subtitle2"
                  >    
                  Termes et conditions
                  </Link>
                </Link>
              </Typography>
            </Box>
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Inscription
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Avez-vous un compte ?
              {' '}
              <Link
                href="/login"
              >
                <Link
                  variant="subtitle2"
                  underline="hover"
                >
                  Se connecter
                </Link>
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
      </div>
    </>
  );
};

export default Register;