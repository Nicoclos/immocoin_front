import React from 'react'
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField, Link} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Profile = () => {
  
  return (
    <div className='profil'>
    <form>
    <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            ><Link href="/">Accueil</Link>
            </Button>
      <Card>
        <CardHeader
          subheader="Les informations peuvent être modifiées"
          title="Profil"
        />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Prénom"
                name="firstName"
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Nom"
                name="lastName"
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Téléphone"
                name="Phone number"
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Age"
                name="Age"
                required
                variant="outlined"
              />
            </Grid>            
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email"
                name="Email"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Mot de Passe"
                name="Password"
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Sauvegarder
          </Button>
        </Box>
      </Card>
    </form>
    </div>
  );
};

export default Profile