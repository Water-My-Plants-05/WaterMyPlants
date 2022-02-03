import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../index.css";

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
      ...form,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post(`http://REPLACETHISWITHAPI/api/login`, form)
      .then((resp) => {
        localStorage.setItem("token", resp.data.token);
        push("/plants");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='FormContainer'>
      <div className='login-container2'>
        <h1>Let's wet our plants 🌿</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Username: </span>
            <input
              id='username'
              type='text'
              name='username'
              placeholder='Username'
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Password: </span>
            <input
              id='password'
              type='password'
              name='password'
              placeholder='Password'
              onChange={handleChange}
            />
          </label>
          <br />
          <button id='submit' type='submit'>
            Login
          </button>
          <a href='/signup'>Don't have an account? Sign Up</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
