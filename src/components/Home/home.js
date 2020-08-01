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
             {/* <div><div className="homeshowcase">
             <img src={group131} alt=""/>
             <div className="homeheading" >
             <h2>Wanna Develop?<br/>Try Hacklt</h2>
             <br/>
             <h3>Explore new hackathon daily to boost your development skills</h3>
             </div>
             </div></div> */}

             <ListOfHackathons />
             <Footer/>
         </Auxes>
     );
 }
 
 export default Home;
 