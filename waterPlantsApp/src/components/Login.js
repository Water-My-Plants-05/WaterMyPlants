import React, { useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    // not sure if we are going to have any error messages as part of the api.

    // const [error, setError] = useState('')

    const { push } = useHistory();

    const handleChange = (evt) => {
        setForm({
            ...form, [evt.target.name]: evt.target.value
        });
    };
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        axios.post(`http://REPLACETHISWITHAPI/api/login`, form)
        .then((resp) => {
            localStorage.setItem('token', resp.data.token);
            push('/plants');
        })
        .catch((error) => console.log(error));
    };

    return (
        <FormContainer>
            <LoginContainer>
                <h1>Let's start watering plants.</h1>
                <h2>Enter your account information here.</h2>
                <form onSubmit={handleSubmit} >
                <label>Username: 
                        <input id="username"
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={handleChange}/>
                    </label>
                    <br/>
                    <label>Password: 
                        <input id="password"
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={handleChange}/>
                    </label>
                    <br/>
                        <button id="submit" type="submit">Login</button>
                </form>
            </LoginContainer>
        </FormContainer>
    )
}

export default Login;


const FormContainer = styled.div`
    height: 80%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const LoginContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

