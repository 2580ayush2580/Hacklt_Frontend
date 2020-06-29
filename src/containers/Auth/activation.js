import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {authenticate} from '../../helper/auth';
import jwt from 'jsonwebtoken';

const Activation = ({match}) => {
    const [formData, setFormData] = useState({
        name: '',
        token: '',
        show: true
      });
    
      useEffect(() => {
        let token = match.params.token;
        let { name } = jwt.decode(token);
    
        if (token) {
          setFormData({ ...formData, name, token });
        }
    
        console.log(token, name);
      }, [match.params]);
      const { name, token, show } = formData;
    
      const handleSubmit = e => {
        e.preventDefault();
        let token = match.params.token;
        axios
          .post(`http://localhost:5000/api/activation`, {
            token
          })
          .then(res => {
            setFormData({
              ...formData,
              show: false
            });
            console.log(res.data,token)
          })
          .catch(err => {
            console.log(err)
          });
      };
    return (
        <div>
             <form action="" onSubmit={handleSubmit}>
            <br/>
            <button type='submit' >Activate</button>
            </form>
        </div>
    );
};

export default Activation;