import React from 'react'
import { renderMatches } from 'react-router-dom';
import img from '../components/Assets/img/Immocoin.png';
import '../components/Assets/styles/index.scss';
import Display from '../components/Appartment';
import Box from '@mui/material/Box';

const Home = () => {
   return (

   <div>
     <div className='banner'>
    <img src={img} />
    </div>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', padding: 4, margin: 5 }}>
        <Display/>
        <Display/>  
        <Display/>
        <Display/>
        <Display/>
        <Display/>
        <Display/>
        <Display/>
        <Display/>
        <Display/>
      </Box>
      
    </div>
    
  );
   };

export default Home;