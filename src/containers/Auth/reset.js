import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResetPassword = ({match}) => {
    const [formData, setFormData] = useState({
        password1: '',
        password2: '',
        token: '',
      textChange: 'Submit'
    });
      const { password1, password2, textChange, token } = formData;
      
      useEffect(() => {
          let token = match.params.token
          if(token) {
              setFormData({...formData, token,})
          }
          
      }, [])
    const handleChange = text => e => {
      setFormData({ ...formData, [text]: e.target.value });
    };
      const handleSubmit = e => {
        console.log(password1, password2)
      e.preventDefault();
      if ((password1 === password2) && password1 && password2) {
        setFormData({ ...formData, textChange: 'Submitting' });
        axios
          .put(`http://localhost:5000/api/resetpassword`, {
              newPassword: password1,
              resetPasswordLink: token
          })
          .then(res => {
            console.log(res.data.message)
              setFormData({
                ...formData,
                 password1: '',
                password2: ''
              });
          })
          .catch(err => {
            console.log('Something is wrong try again');
          });
      } else {
        console.log('Passwords don\'t matches');
      }
    };
    return (
        <div>
        <form action="" onSubmit={handleSubmit}>
        <br/>
        <input type="password" onChange={handleChange('password1')}/>
        <br/>
        <input type="password" onChange={handleChange('password2')}/>
        <br/>
        <button type='submit' >{textChange}</button>
        </form>
    </div>
    )
      
  };
  
  export default ResetPassword;
  