import React from 'react';
import '../index.css';

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='copyright'>
        <p>Copyright © 2022 IWETMYPLANTS LLC. All Rights Reserved.</p>
      </div>
      <div className='about-link'>
        <a href='/about'>Meet the Team!</a>
      </div>
    </footer>
  )
}

export default Footer;