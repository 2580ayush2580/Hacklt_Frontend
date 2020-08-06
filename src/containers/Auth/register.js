import React,{useState} from 'react';
import axios from 'axios';
import './register.css';
import ecllipse from '../../assets/Ellipse.svg';
import register from '../../assets/register.svg';
import Auxes from '../../Auxes/auxes'
import { withRouter,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                    .post(`https://hacklt-backend.herokuapp.com/api/register`, {
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
                        toast.success(res.data.message);
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
                        toast.error(err.response.data.errors);
                    });
            } else {
                toast.error("Passwords don't matches");
            }
        } else {
            toast.error('Please fill all fields');
        }
    };
    
    return (
      
       
        <Auxes>
        
       <div className="navbar7">
        <img src={ecllipse} alt="" className="img1" />
       <ToastContainer />
        <img src={ecllipse} alt="" className="img2" />
       </div>
        <div  className="showcase">
            <div className="form" >
              <form action="" onSubmit={handleSubmit}>
              <h1>SIGN UP</h1>
              <br/>
              <input type="text" onChange={handleChange('name')} value={name} placeholder="Name" />
              <br/>
              <input type="email" onChange={handleChange('email')} value={email}  placeholder="Email" />
              <br/>
              <input type="password" onChange={handleChange('password1')} value={password1}  placeholder="Password" />
              <br/>
              <input type="password" onChange={handleChange('password2')} value={password2}  placeholder="Confirm Password" />
              <br/>
              <button type='submit' >{textChange}</button>
              <br/>
              or
              <br/>
              </form>
              <Link to="/login"><button>Login</button></Link>
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

export default withRouter(Register);