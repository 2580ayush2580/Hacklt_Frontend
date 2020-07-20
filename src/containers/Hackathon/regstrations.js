import React,{useState} from 'react';
import axios from 'axios';
import './registerForm.css'

const RegistrationForm = (props) => {

    const [formData, setFormData] = useState({
        firstName:'',
        lastName:"",
        email:"",
        dateOfBirth:"",
        gender:"",
        college:'',
        degree:'',
        branch:'',
        graduationYear:'',
        skills:'',
        contactNumber:'',
        alternateContactNumber:'',
        UserId:JSON.parse(localStorage.getItem('user'))._id
    });

    const { firstName, lastName, email, dateOfBirth, gender, college, degree, branch, UserId,graduationYear,skills,contactNumber,alternateContactNumber,hackathonId } = formData;
    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (firstName && lastName && email && gender && degree && college && graduationYear && skills && contactNumber && alternateContactNumber) {
            
                setFormData({...formData, branch: 'Submitting' });
                axios
                    .post(`http://localhost:5000/api//hackathon/register`, {
                        firstName,
                        lastName,
                        email,
                        gender,
                        degree,
                        college,
                        dateOfBirth,
                        graduationYear,
                        skills,
                        branch,
                        contactNumber,
                        alternateContactNumber,
                        UserId,
                        hackathonId:props.id,
                        data:props.data
                    })
                    .then(res => {
                        setFormData({
                            ...formData,
                            firstName: '',
                            lastName: '',
                            email: '', 
                            gender: '',
                            degree:'',
                            college:'',
                            dateOfBirth:'',
                            graduationYear:'',
                            skills:'',
                            contactNumber:'',
                            alternateContactNumber:'',
                            branch: ''
                        });

                    })
                    .catch(err => {
                        setFormData({
                            ...formData,
                            firstName: '',
                            lastName: '',
                            email: '',
                            gender: '',
                            degree:'',
                            college:'',
                            dateOfBirth:'',
                            branch: '',
                            skills: '',
                            contactNumber: '',
                            alternateContactNumber: '',
                            graduationYear:''
                        });
                        console.log(err.response);
                    });
            }
        else {
            console.log('Please fill all fields');
        }
    };
    
    return (
        
        
       <div className="registerForm" >
        <form action="" onSubmit={handleSubmit}>
        {console.log(props.id)}    <h1></h1>
            <input type="text" onChange={handleChange('firstName')} placeholder="firstName"/>
            <br/>
            <input type="text" onChange={handleChange('lastName')} placeholder="lastName"/>
            <br/>
            <input type="email" onChange={handleChange('email')} placeholder="email"/>
            <br/>
            <input type="text" onChange={handleChange('gender')} placeholder="gender"/>
            <br/>
            <input type="text" onChange={handleChange('degree')} placeholder="degree"/>
            <br/>
            <input type="text" onChange={handleChange('branch')} placeholder="branch"/>
            <br/>
            <input type="text" onChange={handleChange('college')} placeholder="college"/>
            <br/>
            <input type="text" onChange={handleChange('dateOfBirth')}  placeholder="dateOfBirth"/>
            <br/>
            <input type="text" onChange={handleChange('graduationYear')}  placeholder="graduationYear"/>
            <br/>
            <input type="text" onChange={handleChange('skills')}  placeholder="skills"/>
            <br/>
            <input type="text" onChange={handleChange('contactNumber')}  placeholder="contactNumber"/>
            <br/>
            <input type="text" onChange={handleChange('alternateContactNumber')}  placeholder="alternateContactNumber"/>
            <br/>
            <button type='submit' >Submit</button>
        </form>
        </div>
       
    );
};

export default RegistrationForm;