import React,{useState} from 'react';
import axios from 'axios';
import {authenticate} from '../../helper/auth'
import './register.css';
import ecllipse from '../../assets/Ellipse.svg';
import register from '../../assets/register.svg';
import Auxes from '../../Auxes/auxes'
import { withRouter,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = (props) => {
    const [formData, setFormData] = useState({
        email: '',
        password1: '',
        textChange: 'Login'
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
            .post(`https://hacklt-backend.herokuapp.com/api/login`, {
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
              console.log(res.data.message);
              props.history.push('/');
              toast.success(`Hey ${res.data.user.name}, Welcome back!`);
            })
            .catch(err => {
              setFormData({
                ...formData,
                email: '',
                password1: '',
                textChange: 'Sign In'
              });
              toast.error(err.response.data.errors);
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
              <h1>Login</h1>
              <br/>
              <input type="email" onChange={handleChange('email')} value={email} placeholder="Email" />
              <br/>
              <input type="password" onChange={handleChange('password1')} value={password1} placeholder="Password"/>
              <br/>
              <Link to="/users/password/forget">forget Paasword?</Link>
              <button type='submit' >{textChange}</button>
              <br/>
              or
              <br/>
              </form>
              <Link to="/register"> <button>Sign Up</button></Link>
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

export default withRouter(Login);