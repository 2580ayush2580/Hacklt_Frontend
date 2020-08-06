 import React from 'react';
 import Navbar from '../../containers/Navbar/navbar';
 import Auxes from '../../Auxes/auxes';
 import './home.css';
 import Footer from '../../containers/Footer/footer'
 import ListOfHackathons from './llistOfHakathon/list';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
 const Home = () => {
     return (
         <Auxes>
             <ToastContainer />
             <Navbar />
             <ListOfHackathons />
             <Footer/>
         </Auxes>
     );
 }
 
 export default Home;
 