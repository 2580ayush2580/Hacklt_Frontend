import React,{useState} from 'react';
import axios from 'axios';

const HackathonForm = () => {

    const [formData, setFormData] = useState({
        nameOfHackathon:'',
        aboutTheHackathon:"",
        problemStatement:"",
        prizes:"",
        startDate:"",
        maxTeamSize:'',
        endDate:'',
        textChange:'Submit'
    });

    const { nameOfHackathon, aboutTheHackathon, problemStatement, prizes, startDate, maxTeamSize, endDate, textChange } = formData;
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
                        prizes
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
        <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange('nameOfHackathon')}/>
            <br/>
            <input type="text" onChange={handleChange('aboutTheHackathon')}/>
            <br/>
            <input type="text" onChange={handleChange('problemStatement')}/>
            <br/>
            <input type="text" onChange={handleChange('startDate')}/>
            <br/>
            <input type="text" onChange={handleChange('endDate')}/>
            <br/>
            <input type="text" onChange={handleChange('maxTeamSize')}/>
            <br/>
            <input type="text" onChange={handleChange('prizes')}/>
            <br/>
            <button type='submit' >{textChange}</button>
        </form>
        </div>
    );
};

export default HackathonForm;