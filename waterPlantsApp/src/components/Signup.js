import React, { useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Signup = () => {
    const [form, setForm] = useState({
        username: "",
        phone: "",
        password: "",
    })

    const { push } = useHistory();

    const handleChange = (evt) => {
        setForm({
            ...form, [evt.target.name]: evt.target.value
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        axios.put(`http://REPLACETHISWITHAPI/api/signup`, form)
        .then((resp) => {
            localStorage.setItem('token', resp.data.token);
            push('/plants');
        })
        .catch((error) => console.log(error));
    };

    return (
        <FormContainer>
            <SignupContainer>
                <h2>Don't have an account already?</h2>
                <h2>Signup!</h2>
                <form onSubmit={handleSubmit} >
                    <label>Username: 
                        <input id="username"
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={handleChange}/>
                    </label>
                    <br/>
                    <label>Phone Number: 
                        <input id="phone"
                        type="number"
                        name="phone"
                        placeholder="000-000-0000"
                        onChange={handleChange} />
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
            </SignupContainer>
        </FormContainer>
    )
}

export default Signup;


const FormContainer = styled.div`
    height: 80%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display:flex;
`

const SignupContainer = styled.div`
    width: 500px;
    background: white;
    padding: 3rem;
    text-align: center;
`