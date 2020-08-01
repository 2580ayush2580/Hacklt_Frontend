import React,{useState} from 'react';
import axios from 'axios';
import './form.css';
import Auxes from '../../Auxes/auxes'

const HackathonForm = () => {

    const [formData, setFormData] = useState({
        nameOfHackathon:'',
        aboutTheHackathon:"",
        problemStatement:"",
        prizes:"",
        startDate:"",
        maxTeamSize:'',
        links:'',
        Judges:'',
        sponsors:'',
        rules:'',
        instructions:'',
        location:'',
        endDate:'',
        textChange:'Submit',
        email:'',
        owner:JSON.parse(localStorage.getItem('user'))._id
    });

    const { nameOfHackathon, aboutTheHackathon, problemStatement, prizes, startDate,sponsors, maxTeamSize, endDate, textChange, owner,rules,email,links,Judges,location,instructions } = formData;
    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (nameOfHackathon && aboutTheHackathon && problemStatement && startDate && endDate && maxTeamSize&&location&&rules&&instructions&&email) {
            
                setFormData({...formData, textChange: 'Submitting' });
                axios
                    .post(`https://hacklt-backend.herokuapp.com/api/hackathonLists`, {
                        nameOfHackathon,
                        aboutTheHackathon,
                        problemStatement,
                        startDate,
                        endDate,
                        maxTeamSize,
                        location,
                        prizes,
                        instructions,
                        owner,
                        sponsors,
                        rules,
                        Judges,
                        links,
                        email
                    })
                    .then(res => {
                        setFormData({
                            ...formData,
                            nameOfHackathon: '',
                            aboutTheHackathon: '',
                            problemStatement: '', 
                            startDate: '',
                            endDate:'',
                            instructions:'',
                            maxTeamSize:'',
                            location:'',
                            rules:'',
                            links:'',
                            sponsors:'',
                            Judges:'',
                            prizes:'',
                            textChange: 'Submitted',
                            email:''
                        });

                    })
                    .catch(err => {
                        setFormData({
                            ...formData,
                            nameOfHackathon: '',
                            aboutTheHackathon: '',
                            problemStatement: '',
                            rules: '',
                            startDate: '',
                            endDate:'',
                            maxTeamSize:'',
                            links:'',
                            sponsors:'',
                            instructions:'',
                            Judges:'',
                            location:'',
                            prizes:'',
                            textChange: 'Sign Up',
                            email:''
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
        <div id="form-outer">
         <p id="description">Create New Hackathon</p>
    <form id="hackathon-form"  onSubmit={handleSubmit} >
    <div class="rowTab">
      <div class="labels">
        <label id="name-label" for="name">*Name Of Hakathon: </label>
      </div>
      <div class="rightTab">
        <input autofocus type="text" onChange={handleChange('nameOfHackathon')} name="name" id="name" class="input-field" placeholder="Enter Name Of Hakathon" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label for="comments">*About The Hackathon:</label>
      </div>
      <div class="rightTab">
        <textarea id="comments" onChange={handleChange('aboutTheHackathon')} class="input-field" style={{height:"80px",resize:"vertical;"}} name="comment" placeholder="About The Hackathon (min 50 words)" required ></textarea>
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label for="comments">*Problem Statement:</label>
      </div>
      <div class="rightTab">
        <textarea id="comments" onChange={handleChange('problemStatement')} class="input-field" style={{height:"80px",resize:"vertical;"}} name="comment" placeholder="Problem Statement (min words 50)" required></textarea>
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label for="comments">*Instructions:</label>
      </div>
      <div class="rightTab">
        <textarea id="comments" onChange={handleChange('instructions')} class="input-field" style={{height:"80px",resize:"vertical;"}} name="instructions" placeholder="Instructions " required></textarea>
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label for="comments">*Rules:</label>
      </div>
      <div class="rightTab">
        <textarea id="comments" onChange={handleChange('rules')} class="input-field" style={{height:"80px",resize:"vertical;"}} name="rules" placeholder="Rules" required></textarea>
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="date-label" for="date">*Starting Date: </label>
      </div>
      <div class="rightTab">
        <input type="date" onChange={handleChange('startDate')} name="date" id="date" class="input-field" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="date-label" for="date">*End Date: </label>
      </div>
      <div class="rightTab">
        <input type="date" name="date" onChange={handleChange('endDate')} id="date" class="input-field" required />
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="email-label" for="email">*Email: </label>
      </div>
      <div class="rightTab">
        <input type="email" name="email" onChange={handleChange('email')} id="email" class="input-field" required placeholder="Enter your Email"/>
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="label" for="email">*Team Size: </label>
      </div>
      <div class="rightTab">
        <input type="number" onChange={handleChange('maxTeamSize')} name="number" id="number" class="input-field" required placeholder="Enter Team Size"/>
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="label" for="email">Judges: </label>
      </div>
      <div class="rightTab">
        <input type="text" onChange={handleChange('Judges')} name="Judges" id="Judges" class="input-field"  placeholder="Ex:- John, andrew"/>
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="label" for="email">Prizes: </label>
      </div>
      <div class="rightTab">
        <input type="text" onChange={handleChange('prizes')} name="number" id="number" class="input-field"  placeholder="Ex:- T-shirt, Watches"/>
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="label" for="email">Sponsors: </label>
      </div>
      <div class="rightTab">
        <input type="text" onChange={handleChange('sponsors')} name="sponsors" id="sponsors" class="input-field"  placeholder="Ex:- Paytm, Google"/>
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="label" for="email">Link: </label>
      </div>
      <div class="rightTab">
        <input type="text" onChange={handleChange('links')} name="links" id="links" class="input-field"  placeholder="link of Hakathon"/>
      </div>
    </div>
    <div class="rowTab">
      <div class="labels">
        <label id="label" for="email">*Location: </label>
      </div>
      <div class="rightTab">
        <input type="text" onChange={handleChange('location')} name="location" id="location" class="input-field" required placeholder="Ex:- Noida "/>
      </div>
    </div>
    <button className="submit" type="submit">{textChange}</button>
    </form>
    </div>
        </Auxes>
       
    );
};

export default HackathonForm;