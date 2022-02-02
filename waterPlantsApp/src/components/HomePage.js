import React from 'react';
import { Button } from 'reactstrap';

function HomePage() {
  return (
    <div className='home-container'>
      <div className='home-text'>
        <h1>Did you wet your plants?</h1>
      </div>

      <div className='home-details'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quis enim lobortis scelerisque fermentum dui faucibus. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque.
        </p>
      </div>
      <div className='home-button'>
        <Button id='home-btn' href='/login'>Login </Button>
        or <br />
        <Button id='home-btn' href='/signup'>Signup Here</Button>
      </div>
    </div>
  )
}

export default HomePage;