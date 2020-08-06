import React,{useState,useEffect} from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import './register.css';
import ecllipse from '../../assets/Ellipse.svg';
import register from '../../assets/register.svg';
import Auxes from '../../Auxes/auxes'
import { withRouter,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const Activation = ({match},props) => {
    const [formData, setFormData] = useState({
        name: '',
        token: '',
        show: true,
        text:"Activate"
      });
    const {text} = formData;
      useEffect(() => {
        let token = match.params.token;
        let { name } = jwt.decode(token);
    
        if (token) {
          setFormData({ ...formData, name, token });
        }
    
        console.log(token, name);
         // eslint-disable-next-line
      }, [match.params]);
    
      const handleSubmit = e => {
        e.preventDefault();
        let token = match.params.token;
        axios
          .post(`https://hacklt-backend.herokuapp.com/api/activation`, {
            token
          })
          .then(res => {
            setFormData({
              ...formData,
              show: false,
              text:"Activated"
            });
            toast.success("Now you can login!")
          })
          .catch(err => {
            toast.error("This Link is Expired Signup Again!")
          });
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
              <h1>Activate Account</h1>
              <br/>
              <button type='submit' >{text}</button>
              </form>
              <br/>
              <Link to="/=login"> <button>Login</button></Link>
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

export default withRouter(Activation);