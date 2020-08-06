import React, { useState } from 'react';
import axios from 'axios';
import './register.css';
import ecllipse from '../../assets/Ellipse.svg';
import register from '../../assets/register.svg';
import Auxes from '../../Auxes/auxes'
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = ({history},props) => {
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
        .put(`https://hacklt-backend.herokuapp.com/api/forgotpassword`, {
          email
        })
        .then(res => {
            setFormData({
              ...formData,
              email: '',
            });
          toast.success(`Please check your email`);
        })
        .catch(err => {
        toast.error(err.response.data.error);
        });
    } else {
      toast.error('Please fill all fields');
    }
  };
  return (
  <Auxes>
  <ToastContainer />
       <div className="navbar7">
        <img src={ecllipse} alt="" className="img1" />
        <img src={ecllipse} alt="" className="img2" />
       </div>
        <div  className="showcase">
            <div className="form" >
              <form action="" onSubmit={handleSubmit}>
              <h1>Forget Password</h1>
              <br/>
              <input type="email" onChange={handleChange('email')} value={email} placeholder="Email" />
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

export default withRouter(ForgetPassword);
