import React,{useState} from 'react';
import axios from 'axios';
// import Navbar from '../Navbar/navbar'
import './form.css';
import ecllipse from '../../assets/Ellipse.svg';
import register from '../../assets/register.svg';
import Auxes from '../../Auxes/auxes'

const HackathonForm = () => {

    const [formData, setFormData] = useState({
        nameOfHackathon:'',
        aboutTheHackathon:"",
        problemStatement:"",
        prizes:"",
        startDate:"",
        maxTeamSize:'',
        endDate:'',
        textChange:'Submit',
        owner:JSON.parse(localStorage.getItem('user'))._id
    });

    const { nameOfHackathon, aboutTheHackathon, problemStatement, prizes, startDate, maxTeamSize, endDate, textChange, owner } = formData;
    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (nameOfHackathon && aboutTheHackathon && problemStatement && startDate && endDate && maxTeamSize) {
            
                setFormData({...formData, textChange: 'Submitting' });
                axios
                    .post(`http://localhost:5000/api/hackathonLists`, {
                        nameOfHackathon,
                        aboutTheHackathon,
                        problemStatement,
                        startDate,
                        endDate,
                        maxTeamSize,
                        prizes,
                        owner
                    })
                    .then(res => {
                        setFormData({
                            ...formData,
                            nameOfHackathon: '',
                            aboutTheHackathon: '',
                            problemStatement: '', 
                            startDate: '',
                            endDate:'',
                            maxTeamSize:'',
                            prizes:'',
                            textChange: 'Submitted'
                        });

                    })
                    .catch(err => {
                        setFormData({
                            ...formData,
                            nameOfHackathon: '',
                            aboutTheHackathon: '',
                            problemStatement: '',
                            startDate: '',
                            endDate:'',
                            maxTeamSize:'',
                            prizes:'',
                            textChange: 'Sign Up'
                        });
                        console.log(err.response);
                    });
            }
        else {
            console.log('Please fill all fields');
        }
    };
    
    return (
        <Auxes>
       <div className="navbar">
        <img src={ecllipse} alt="" className="img1" />
        <img src={ecllipse} alt="" className="img2" />
       </div>
        <div  className="showcase">
            <div className="form" >
            <form action="" onSubmit={handleSubmit}>
            <h1></h1>
            <input type="text" onChange={handleChange('nameOfHackathon')} placeholder="Name Of Hakathon"/>
            <br/>
            <input type="text" onChange={handleChange('aboutTheHackathon')} placeholder="About The Hakathon"/>
            <br/>
            <input type="text" onChange={handleChange('problemStatement')} placeholder="Problem Statement"/>
            <br/>
            <input type="date" onChange={handleChange('startDate')} placeholder="Starting Date Of Hakathon"/>
            <br/>
            <input type="date" onChange={handleChange('endDate')} placeholder="End Date Of Hakathon"/>
            <br/>
            <input type="text" onChange={handleChange('maxTeamSize')} placeholder="Team Size"/>
            <br/>
            <input type="text" onChange={handleChange('prizes')}  placeholder="Prizes"/>
            <br/>
            <button type='submit' >{textChange}</button>
        </form>
            </div>
            <div>
            <img src={register} alt="" className="img4" />
            </div>
        </div>
        <div className="footer">
        <img src={ecllipse} alt="" className="img3" />
        </div>
        </Auxes>
       
    );
};

export default HackathonForm;