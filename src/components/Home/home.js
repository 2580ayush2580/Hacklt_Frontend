 import React from 'react';
 import Navbar from '../../containers/Navbar/navbar';
 import Auxes from '../../Auxes/auxes';
 import group131 from '../../assets/Group131.svg';
 import './home.css';
 import ListOfHackathons from './llistOfHakathon/list';
 
 const Home = () => {
     return (
         <Auxes>
             <Navbar />
             <div><div className="homeshowcase">
             <img src={group131} alt=""/>
             <div className="homeheading" >
             <h1>Wanna Develop?<br/>Try Hacklt</h1>
             <br/>
             <h2>Explore new hackathon daily to boost your development skills</h2>
             </div>
             </div></div>
             <ListOfHackathons />
         </Auxes>
     );
 }
 
 export default Home;
 