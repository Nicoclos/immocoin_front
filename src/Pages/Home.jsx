import React from 'react'
import { renderMatches } from 'react-router-dom';
import img from '../components/Assets/img/Immocoin.png';
import '../components/Assets/styles/index.scss';
import Display from '../components/Appartment';



const Home = () => {
   return (
     
   <div>
    <img src={img} />
      <Display/>
    
    </div>
  );
   };

export default Home;