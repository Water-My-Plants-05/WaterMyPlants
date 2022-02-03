import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../index.css";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    phone: "",
    password: "",
  });

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
      .put(`http://REPLACETHISWITHAPI/api/signup`, form)
      .then((resp) => {
        localStorage.setItem("token", resp.data.token);
        push("/plants");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className='FormContainer'>
      <div className='login-container2'>
        <h1>Welcome! Join us🌱</h1>
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
            <span>Phone Number: </span>
            <input
              id='phone'
              type='input'
              name='phone'
              placeholder='000-000-0000'
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
          <button id='submit' type='submit'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
