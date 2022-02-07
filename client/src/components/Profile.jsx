import React from 'react'
import Typical from 'react-typical'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-section">
        <div className="profile-info">
          <div className="profile-socials">
            <div className="profile-social-icons">
              <a href="#">
                <i className='profile-icons bx bxl-discord-alt'></i>
              </a>
              <a href="#">
                <i className='profile-icons bx bxl-discord'></i>
              </a>            
              <a href="#">
                <i className='profile-icons bx bxl-twitch'></i>
              </a>
              <a href="#">
                <i className='profile-icons bx bxl-github'></i>
              </a>
              <a href="#">
                <i className='profile-icons bx bxl-linkedin'></i>
              </a>
            </div>
          </div>
          <div className="profile-detail-container">
            <span className="profile-detail-bio">
              {" "}
              Hello, I am <span className="profile-name-style">AJ!</span>
            </span>
          </div>
          <div className="profile-details">
            <span className="profile-detail-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Sun Rise Community Founder",
                    3000,
                    "Top FiveM Developer",
                    2000,
                    "Full Stack Developer",
                    2000,
                    "Data Structure and Algorithm Developer",
                    4000
                  ]}
                />
              </h1>
              <span className="profile-tagline">
                Busy creating cutting edge and innovative sources for FiveM Framework. 
              </span>
            </span>
          </div>
          <div className="profile-btn-section">
            <button className="profile-btn-1 profile-btn">
              {""}
              Blog{""}
            </button>
            <button className="profile-btn-2 profile-btn">
              Fourm{""}
              </button>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-backgorund">
          </div>
        </div>
      </div>   
    </div>
  )
}
