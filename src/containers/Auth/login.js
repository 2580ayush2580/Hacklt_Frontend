import React,{useState} from 'react';
import axios from 'axios';
import {authenticate} from '../../helper/auth'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password1: '',
        textChange: 'Sign In'
      });
      const { email, password1, textChange } = formData;
      const handleChange = text => e => {
        setFormData({ ...formData, [text]: e.target.value });
      };
      const handleSubmit = e => {
        e.preventDefault();
        if (email && password1) {
          setFormData({ ...formData, textChange: 'Submitting' });
          axios
            .post(`http://localhost:5000/api/login`, {
              email,
              password: password1
            })
            .then(res => {
              authenticate(res, () => {
                setFormData({
                  ...formData,
                  email: '',
                  password1: '',
                  textChange: 'Submitted'
                });
              });
            })
            .catch(err => {
              setFormData({
                ...formData,
                email: '',
                password1: '',
                textChange: 'Sign In'
              });
              console.log(err.response);
            });
        } else {
          console.log('Please fill all fields');
        }
      };
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
            <br/>
            <input type="email" onChange={handleChange('email')}/>
            <br/>
            <input type="password" onChange={handleChange('password1')}/>
            <br/>
            <button type='submit' >{textChange}</button>
            </form>
        </div>
    );
};

export default Login;