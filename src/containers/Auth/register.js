import React,{useState} from 'react';
import axios from 'axios';

const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: '',
        textChange: 'Sign Up'
    });

    const { name, email, password1, password2, textChange } = formData;
    const handleChange = text => e => {
        setFormData({...formData, [text]: e.target.value });
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (name && email && password1) {
            if (password1 === password2) {
                setFormData({...formData, textChange: 'Submitting' });
                axios
                    .post(`http://localhost:5000/api/register`, {
                        name,
                        email,
                        password: password1
                    })
                    .then(res => {
                        setFormData({
                            ...formData,
                            name: '',
                            email: '',
                            password1: '', 
                            password2: '',
                            textChange: 'Submitted'
                        });

                    })
                    .catch(err => {
                        setFormData({
                            ...formData,
                            name: '',
                            email: '',
                            password1: '',
                            password2: '',
                            textChange: 'Sign Up'
                        });
                        console.log(err.response);
                    });
            } else {
                console.log("Passwords don't matches");
            }
        } else {
            console.log('Please fill all fields');
        }
    };
    
    return (
        <div>
        <form action="" onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange('name')}/>
            <br/>
            <input type="email" onChange={handleChange('email')}/>
            <br/>
            <input type="password" onChange={handleChange('password1')}/>
            <br/>
            <input type="password" onChange={handleChange('password2')}/>
            <br/>
            <button type='submit' >{textChange}</button>
        </form>
        </div>
    );
};

export default Register;