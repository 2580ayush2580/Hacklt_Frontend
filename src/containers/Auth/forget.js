import React, { useState } from 'react';
import axios from 'axios';

const ForgetPassword = ({history}) => {
  const [formData, setFormData] = useState({
    email: '',
    textChange: 'Submit'
  });
  const { email, textChange } = formData;
  const handleChange = text => e => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (email) {
      setFormData({ ...formData, textChange: 'Submitting' });
      axios
        .put(`http://localhost:5000/api/forgotpassword`, {
          email
        })
        .then(res => {
          
            setFormData({
              ...formData,
              email: '',
            });
            console.log(`Please check your email`);
          
        })
        .catch(err => {
        console.log(err.response)
          console.log(err.response.data.error);
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
    <button type='submit' >{textChange}</button>
    </form>
</div>
  );
};

export default ForgetPassword;
