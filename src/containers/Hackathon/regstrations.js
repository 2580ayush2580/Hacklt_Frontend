import React,{useState} from 'react';
import axios from 'axios';
import './registerForm.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        city:'',
        state:'',
        country:'',
        contactNumber:'',
        alternateContactNumber:'',
        text:"Submit",
        UserId:JSON.parse(localStorage.getItem('user'))._id
    });

    const { firstName, lastName, email, dateOfBirth, gender, college, degree, branch, UserId,graduationYear,skills,contactNumber,alternateContactNumber,city,state,country,text } = formData;
    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (firstName && lastName && email && gender && degree && college && graduationYear && skills && contactNumber && alternateContactNumber) {
            
                setFormData({...formData, branch: 'Submitting' });
                axios
                    .post('https://hacklt-backend.herokuapp.com/api/hackathon/register', {
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
                        city,
                        state,
                        country,
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
                            city:'',
                            state:'',
                            country:'',
                            alternateContactNumber:'',
                            branch: '',
                            text:"Submitted"
                        });
                        toast.success("You Have Registered in Hackathon. Check MyHackathon! ")
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
                            city: '',
                            state: '',
                            country: '',
                            graduationYear:''
                        });
                    });
            }
        else {
            toast.error('Please fill all fields');
        }
    };
    
    return (
       <div >
       <ToastContainer />
        <div id="form-outer">
         <p id="description">Fill This Form To Participate</p>
    <form id="hackathon-form"  onSubmit={handleSubmit} >
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" >*First Name: </label>
      </div>
      <div class="rightTab">
        <input autoFocus  type="text"  onChange={handleChange('firstName')} value={firstName} name="name" id="name" class="input-field" placeholder="First Name" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" >*Last Name: </label>
      </div>
      <div class="rightTab">
        <input  type="text" onChange={handleChange('lastName')} value={lastName}  name="name" id="name" class="input-field" placeholder="Last Name" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" >*Email: </label>
      </div>
      <div class="rightTab">
        <input  type="email"  onChange={handleChange('email')} value={email}  name="email" id="email" class="input-field" placeholder="Enter Your Email" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" >*Gender: </label>
      </div>
      <div class="rightTab">
        <input  type="text"  onChange={handleChange('gender')} value={gender}  name="gender" id="gender" class="input-field" placeholder="Eg: Male, Female, Other" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" >*Degree: </label>
      </div>
      <div class="rightTab">
        <input  type="text"  onChange={handleChange('degree')} value={degree}  name="degree" id="degree" class="input-field" placeholder="Enter Your Degree" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" >*Branch: </label>
      </div>
      <div class="rightTab">
        <input  type="text"  onChange={handleChange('branch')} value={branch}  name="branch" id="branch" class="input-field" placeholder="Ex:-Computer Science" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" >*College: </label>
      </div>
      <div class="rightTab">
        <input  type="text"  onChange={handleChange('college')} value={college}  name="college" id="college" class="input-field" placeholder="College Name" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" >*Date Of Birth: </label>
      </div>
      <div class="rightTab">
        <input  type="date"  onChange={handleChange('dateOfBirth')} value={dateOfBirth}  name="dateOfBirth" id="dateOfBirth" class="input-field" placeholder="First Name" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" >*Graduation Year: </label>
      </div>
      <div class="rightTab">
        <input  type="number"  onChange={handleChange('graduationYear')} value={graduationYear}  name="graduationYear" id="graduationYear" class="input-field" placeholder="Graduation Year" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" >*Skills: </label>
      </div>
      <div class="rightTab">
        <input  type="text"  onChange={handleChange('skills')} value={skills}  name="skills" id="skills" class="input-field" placeholder="Ex:- HTML, CSS" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" >*City: </label>
      </div>
      <div class="rightTab">
        <input  type="text"  onChange={handleChange('city')} value={city}  name="city" id="city" class="input-field" placeholder="Enter Your City" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" >*State: </label>
      </div>
      <div class="rightTab">
        <input  type="text"  onChange={handleChange('state')} value={state}  name="state" id="state" class="input-field" placeholder="Enter Your State" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" >*Country: </label>
      </div>
      <div class="rightTab">
        <input  type="text"  onChange={handleChange('country')} value={country}  name="country" id="country" class="input-field" placeholder="Your Country" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" >*Contact Number: </label>
      </div>
      <div class="rightTab">
        <input  type="number"  onChange={handleChange('contactNumber')} value={contactNumber}  name="contactNumber" id="contactNumber" class="input-field" placeholder="Contact Number" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" >*Alternate Contact Number: </label>
      </div>
      <div class="rightTab">
        <input  type="text"  onChange={handleChange('alternateContactNumber')} value={alternateContactNumber}  name="alternateContactNumber" id="alternateContactNumber" class="input-field" placeholder="Contact Number" required />
      </div>
    </div>
    <button className="submit" type="submit">{text}</button>
    </form>
    </div>
        </div>
       
    );
};

export default RegistrationForm;