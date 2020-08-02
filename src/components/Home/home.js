 import React from 'react';
 import Navbar from '../../containers/Navbar/navbar';
 import Auxes from '../../Auxes/auxes';
 import './home.css';
 import Footer from '../../containers/Footer/footer'
 import ListOfHackathons from './llistOfHakathon/list';
 
 const Home = () => {
     return (
         <Auxes>
             <Navbar />
             <ListOfHackathons />
             <Footer/>
         </Auxes>
     );
 }
 
 export default Home;
 