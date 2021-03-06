import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './register.css';
import ecllipse from '../../assets/Ellipse.svg';
import register from '../../assets/register.svg';
import Auxes from '../../Auxes/auxes'
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = ({match},props) => {
    const [formData, setFormData] = useState({
        password1: '',
        password2: '',
        token: '',
      textChange: 'Reset'
    });
      const { password1, password2, textChange, token } = formData;
      
      useEffect(() => {
          let token = match.params.token
          if(token) {
              setFormData({...formData, token,})
          }
          // eslint-disable-next-line
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
          .put(`https://hacklt-backend.herokuapp.com/api/resetpassword`, {
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
              toast.success(res.data.message)
              props.history.push('/login');
          })
          .catch(err => {
            toast.error('Something is wrong try again');
          });
      } else {
       toast.error('Passwords don\'t matches');
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
              <h1>Update password</h1>
              <br/>
              <input type="password" onChange={handleChange('password1')} value={password1} placeholder="Password"/>
              <br/>
              <input type="password" onChange={handleChange('password2')} value={password2} placeholder="Confirm Password"/>
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
    )
      
  };
  
  export default withRouter(ResetPassword);
  