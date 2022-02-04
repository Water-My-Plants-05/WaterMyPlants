import React, { useState } from "react";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import "../index.css";

const initialValues = {
  nickname: "",
  species: "",
  waterFreq: "",
  plantImage: "",
  userId: localStorage.id,
};

const AddPlant = () => {
  const [values, setValues] = useState(initialValues);
  const history = useHistory();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleAddPlant = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/plants/add", values)
      .then((res) => {
        history("/plants");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className='form-container' onSubmit={handleAddPlant}>
      <div className='form-title'>
        <h1>Add A Plant 🌼</h1>
      </div>
      <div className='form-group'>
        <div className='username-input form-spacing'>
          <span>Name: </span>
          <input name='nickname' type='text' onChange={handleChange} />
        </div>
        <div className='password-input form-spacing'>
          <span>Species: </span>
          <input name='species' type='text' onChange={handleChange} />
        </div>
        <div className='password-input form-spacing'>
          <span>Water Frequency: </span>
          <input name='waterFreq' type='text' onChange={handleChange} />
        </div>
        <div className='password-input form-spacing'>
          <span>Image URL: </span>
          <input name='plantImage' type='text' onChange={handleChange} />
        </div>
        <div className='submit'>
          <Button id='submit-login'>Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default AddPlant;
