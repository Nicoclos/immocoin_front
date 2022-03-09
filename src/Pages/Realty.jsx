import React from "react";
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, TextField, Link, Input} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const Realty = () => {
    return (

    <div className="Realty">
    <form>  
        <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            ><Link href="/">Accueil</Link>
        </Button>
      <Card>
          <div className="Titlerealty">
        <CardHeader
          subheader="Vendez votre bien ! "
          title="Annonce"
        /></div>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Titre Annonce"
                name="Title"
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
                
              <TextField
                fullWidth
                label="Ville"
                name="City"
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Prix"
                name="Price"
                required
                variant="outlined"
              />
            </Grid> 
            <div className="textarea">
                <TextareaAutosize
                fullWidth
            aria-label="minimum height"
            minRows={3}
            placeholder="Description *"
            style={{ width: 465, height: 80}}
          g
        /></div>
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
            Enregistrer
          </Button>
        </Box>
      </Card>
    </form>
    </div>
    );
}

export default Realty