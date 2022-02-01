import React, { useState } from "react";
import { Button, FormGroup } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import axiosWithAuth from "../utils/axiosWithAuth";

const initialValues = {
    nickname: '',
    species: '',
    waterFreq: '',
    plantImage: '',
    userId: localStorage.id
}

const AddPlant = () => {
    const [values, setValues] = useState(initialValues);
    const history = useHistory();

    const handleChange = e => {
        setValues({...values,
            [e.target.name]: e.target.value
        })
    }

    const handleAddPlant = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/plants/add', values)
                .then(res => {
                    history('/plants')
                })
                .catch(err => {
                    console.log(err);
                })
    }

    return (
        <form className='form-container login-form' onSubmit={handleAddPlant}>
            <div className='form-title'>
                <h1>Add A Plant</h1>
            </div>
            <FormGroup className='formGroup'>
                <div className='username-input form-spacing'>
                    <label>Name</label>
                        <input 
                            name='nickname'
                            type='text'
                            onChange={handleChange}
                        />
                </div>
                <div className='password-input form-spacing'>
                    <label>Species</label>
                        <input 
                            name='species'
                            type='text'
                            onChange={handleChange}
                        />
                </div>
                <div className='password-input form-spacing'>
                    <label>Water Frequency</label>
                        <input 
                            name='waterFreq'
                            type='text'
                            onChange={handleChange}
                        />
                </div>
                <div className='password-input form-spacing'>
                    <label>Image URL</label>
                        <input 
                            name='plantImage'
                            type='text'
                            onChange={handleChange}
                        />
                </div>
                <div className='submit'>
                    <Button id='submit-login'>Submit</Button>
                </div>
            </FormGroup>
        </form>
    )
}

export default AddPlant;

