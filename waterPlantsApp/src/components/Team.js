import React from "react";
import { FaGithub } from "react-icons/fa";

function Team() {
  return (
    <div className='team-background'>
      <div className='team'>
        <h1>Meet the Team!</h1>
        <p>
          <i>We love wetting our plants</i>
        </p>
      </div>
      <div className='team-container'>
        <div className='team-member'>
          <img src={require("../images/Ryan.png")} alt='Pic of Ryan Howard' />
          <div className='member-title'>
            <h3>
              Ryan Howard{" "}
              <a href='https://github.com/ryanghoward' target='_blank'>
                <FaGithub className='github-icon' />
              </a>
            </h3>
            <h5>Frontend Engineer</h5>
          </div>
        </div>
        <div className='team-member'>
          <img
            src={require("../images/Oscar.png")}
            alt='Pic of Oscar Hernandez'
          />
          <div className='member-title'>
            <h3>
              Oscar Hernandez{" "}
              <a href='https://github.com/oscy7' target='_blank'>
                <FaGithub className='github-icon' />
              </a>
            </h3>
            <h5>Backend Engineer</h5>
          </div>
        </div>
        <div className='team-member'>
          <img src={require("../images/Ben.png")} alt='Pic of Ben Rusinowski' />
          <div className='member-title'>
            <h3>
              Ben Rusinowski{" "}
              <a href='https://github.com/Role4Initiative' target='_blank'>
                <FaGithub className='github-icon' />
              </a>
            </h3>
            <h5>Frontend Engineer</h5>
          </div>
        </div>
        <div className='team-member'>
          <img
            src={require("../images/Chris.png")}
            alt='Pic of Chris Castillo'
          />
          <div className='member-title'>
            <h3>
              Chris Castillo{" "}
              <a href='https://github.com/SaltStalactite' target='_blank'>
                <FaGithub className='github-icon' />
              </a>
            </h3>
            <h5>Backend Engineer</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
