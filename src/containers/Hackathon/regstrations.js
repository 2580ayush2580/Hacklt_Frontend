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
        city:'',
        state:'',
        country:'',
        contactNumber:'',
        alternateContactNumber:'',
        UserId:JSON.parse(localStorage.getItem('user'))._id
    });

    const { firstName, lastName, email, dateOfBirth, gender, college, degree, branch, UserId,graduationYear,skills,contactNumber,alternateContactNumber,city,state,country } = formData;
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
                            city: '',
                            state: '',
                            country: '',
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
        
        
       <div >
        {/* <form action="" onSubmit={handleSubmit}>
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
            <input type="text" onChange={handleChange('city')}  placeholder="city"/>
            <br/>
            <input type="text" onChange={handleChange('state')}  placeholder="state"/>
            <br/>
            <input type="text" onChange={handleChange('country')}  placeholder="country"/>
            <br/>
            <input type="text" onChange={handleChange('contactNumber')}  placeholder="contactNumber"/>
            <br/>
            <input type="text" onChange={handleChange('alternateContactNumber')}  placeholder="alternateContactNumber"/>
            <br/>
            <button className="btn" type='submit' >Submit</button>
        </form> */}
        <div id="form-outer">
         <p id="description">Fill This Form To Participate</p>
    <form id="hackathon-form"  onSubmit={handleSubmit} >
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" for="name">*First Name: </label>
      </div>
      <div class="rightTab">
        <input autoFocus  type="text"  onChange={handleChange('firstName')} name="name" id="name" class="input-field" placeholder="First Name" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" for="name">*Last Name: </label>
      </div>
      <div class="rightTab">
        <input  type="text" onChange={handleChange('lastName')} name="name" id="name" class="input-field" placeholder="Last Name" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" for="name">*Email: </label>
      </div>
      <div class="rightTab">
        <input  type="email"  onChange={handleChange('email')} name="email" id="email" class="input-field" placeholder="Enter Your Email" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" for="name">*Gender: </label>
      </div>
      <div class="rightTab">
        <input  type="text"  onChange={handleChange('gender')} name="gender" id="gender" class="input-field" placeholder="Eg: Male, Female, Other" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" for="name">*Degree: </label>
      </div>
      <div class="rightTab">
        <input  type="text"  onChange={handleChange('degree')} name="degree" id="degree" class="input-field" placeholder="Enter Your Degree" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" for="name">*Branch: </label>
      </div>
      <div class="rightTab">
        <input  type="text"  onChange={handleChange('branch')} name="branch" id="branch" class="input-field" placeholder="Ex:-Computer Science" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" for="name">*College: </label>
      </div>
      <div class="rightTab">
        <input  type="text"  onChange={handleChange('college')} name="college" id="college" class="input-field" placeholder="College Name" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" for="name">*Date Of Birth: </label>
      </div>
      <div class="rightTab">
        <input  type="date"  onChange={handleChange('dateOfBirth')} name="dateOfBirth" id="dateOfBirth" class="input-field" placeholder="First Name" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" for="name">*Graduation Year: </label>
      </div>
      <div class="rightTab">
        <input  type="number"  onChange={handleChange('graduationYear')} name="graduationYear" id="graduationYear" class="input-field" placeholder="Graduation Year" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" for="name">*Skills: </label>
      </div>
      <div class="rightTab">
        <input  type="text"  onChange={handleChange('skills')} name="skills" id="skills" class="input-field" placeholder="Ex:- HTML, CSS" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" for="name">*City: </label>
      </div>
      <div class="rightTab">
        <input  type="text"  onChange={handleChange('city')} name="city" id="city" class="input-field" placeholder="Enter Your City" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" for="name">*State: </label>
      </div>
      <div class="rightTab">
        <input  type="text"  onChange={handleChange('state')} name="state" id="state" class="input-field" placeholder="Enter Your State" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" for="name">*Country: </label>
      </div>
      <div class="rightTab">
        <input  type="text"  onChange={handleChange('country')} name="country" id="country" class="input-field" placeholder="Your Country" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" for="name">*Contact Number: </label>
      </div>
      <div class="rightTab">
        <input  type="number"  onChange={handleChange('contactNumber')} name="contactNumber" id="contactNumber" class="input-field" placeholder="Contact Number" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" for="name">*Alternate Contact Number: </label>
      </div>
      <div class="rightTab">
        <input  type="text"  onChange={handleChange('alternateContactNumber')} name="alternateContactNumber" id="alternateContactNumber" class="input-field" placeholder="Contact Number" required />
      </div>
    </div>
    <button className="submit" type="submit">Submit</button>
    </form>
    </div>
        </div>
       
    );
};

export default RegistrationForm;