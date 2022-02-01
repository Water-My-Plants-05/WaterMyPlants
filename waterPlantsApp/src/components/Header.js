import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return(
        <HeaderStyle>
            <p>I Wet My Plants</p>
            <NavBarStyle>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/plants">Plants</Link></li>
                <li><Link to="/add-plant">Add a Plant</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </NavBarStyle>
        </HeaderStyle>
    );
}

export default Header;


const HeaderStyle = styled.div`
    padding: 1em;
    background-color: #7fbf7c;
    display:flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-style: italic;
        font-weight: bold;
        font-size: 2em;
        color: darkgreen;
    }

    p:hover {
        color: white;
    }
`

const NavBarStyle = styled.ul`
  li {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        
        a {
            text-decoration: none;
            color: darkgreen;
            font-size: 1em;
        }

        a:hover {
            color: white;
        }
    }
`

