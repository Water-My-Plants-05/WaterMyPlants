import React from "react";
// import { Button } from "reactstrap";

function HomePage() {
  return (
    <div className='home-container'>
      <div className='home-text'>
        <h1>Did you wet your plants?</h1>
      </div>

      <div className='home-details'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quis
          enim lobortis scelerisque fermentum dui faucibus. Feugiat scelerisque
          varius morbi enim nunc faucibus a pellentesque.
        </p>
      </div>
      <div className='home-button'>
        <button id='submit' type='submit'>
          <span>Log In</span>
        </button>
        <a href='/signup'>Don't have an account? Sign Up!</a>
      </div>
    </div>
  );
}

export default HomePage;
