import React, { useState } from 'react';
import { Button } from 'reactstrap';
import EditPlant from './EditPlant';

function PlantItem(props) {
  const { plant, handleDelete, handleUpdatePlant } = props;
  const [ formToggle, setFormToggle ] = useState(false);

  return (
    <div className='plant-item-container'>
      <div className='plant-item-img'>
        <img 
          src={plant.plant_image}
          alt='plant'
          width='100%'
        />
      </div>
      <div className='plant-item-info'>
        <div className='plant-labels'>
          <h4>{plant.nickname}</h4>
          <p>{plant.species}</p>
        </div>
        <div className='plant-links'>
          <Button 
          color='link'
          size='sm'
          className='edit'
          onClick={() => {setFormToggle(!formToggle)}}>
            Edit
          </Button>
          <Button
          color='link'
          size='sm'
          className='remove'
          onClick={() => {handleDelete(plant.plant_id)}}>
            Remove
          </Button>
          { formToggle && 
          <EditPlant plant={plant} handleUpdatePlant={handleUpdatePlant} formToggle={formToggle} setFormToggle={setFormToggle} />}
        </div>
      </div>
    </div>
  )
}

export default PlantItem;