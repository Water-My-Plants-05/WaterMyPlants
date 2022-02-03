import React, {useState} from 'react';
import { Button, FormGroup} from 'reactstrap';

const EditPlant = (props) => {
  const { plant, handleUpdatePlant, formToggle, setFormToggle} = props;
  const [ formValues, setFormValues ] = useState(plant);

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdatePlant(formValues)
    setFormToggle(!formToggle)
  }

  return (
    <div className='edit-plant'>
      <form className='form-container edit-form' onSubmit={handleSubmit}>
        <div className='form-title'>
          <h1>Edit My Plant</h1>
        </div>
        <FormGroup className='formGroup'>
          <div className='form-spacing'>
            <label>Nickname: &nbsp;</label>
            <input 
              type='text'
              name='nickname'
              value={formValues.nickname}
              onChange={onChange}
            />
          </div>
          <div className='form-spacing'>
            <label>Species: &nbsp;</label>
            <input 
              type='text'
              name='species'
              value={formValues.species}
              onChange={onChange}
            />
          </div>
          <div className='form-spacing'>
            <label>Water Frequency: &nbsp;</label>
            <input 
              type='text'
              name='water_freq'
              value={formValues.water_freq}
              onChange={onChange}
            />
          </div>
          <div className='form-spacing'>
            <label>Image URL: &nbsp;</label>
            <input 
              type='text'
              name='plant_image'
              value={formValues.plant_image}
              onChange={onChange}
            />
          </div>
          <div className='submit'>
            <Button>Submit</Button>
            <Button color='link' id='cancel' onClick={() => {setFormToggle(!formToggle)}}>Cancel</Button>
          </div>
        </FormGroup>
      </form>
    </div>
  )
}

export default EditPlant;