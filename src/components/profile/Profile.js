import React, { useState } from "react";
import { useEffect } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import Sidebar from "../headers/Sidebar";

function Profile(props) {
  const handleChange1 = (e) => {
    {
      props.setname(e.target.value);
    }
    localStorage.setItem("inputValue1", e.target.value);
  };

  const handleChange2 = (e) => {
    {
      props.setbio(e.target.value);
    }

    localStorage.setItem("inputValue2", e.target.value);
  };

  const handleChange3 = (e) => {
    {
      props.setavail(e.target.value);
    }

    localStorage.setItem("inputValue3", e.target.value);
  };

  const handleChange4 = (e) => {
    {
      props.settechstack(e.target.value);
    }

    localStorage.setItem("inputValue4", e.target.value);
  };

  useEffect(() => {
    {
      props.setname(localStorage.getItem("inputValue1"));
    }
    {
      props.setbio(localStorage.getItem("inputValue2"));
    }
    {
      props.setavail(localStorage.getItem("inputValue3"));
    }
    {
      props.settechstack(localStorage.getItem("inputValue4"));
    }
  }, []);

  return (
    <div className="profile">
      <div className="upper_div"></div>
      <div className="lower_div">
        <div className="left_div">
          <Sidebar />
        </div>
        <div className="right_div">
          <div className="board_upper">
            <div className="upperboard_left">
              <p className="basic_info">Basic Info</p>
              <br></br>
              <p className="detailed_info">Full Name</p>
              <input
                type="text"
                name="fname"
                value={props.name}
                placeholder="Your name"
                onChange={handleChange1}
              />
              <br></br>
              <p className="detailed_info">Profile Tagline</p>
              <input type="text" placeholder="Your Tagline" />
              <br></br>
              <p className="detailed_info">Profile Photo </p>
              <button className="image_icon">
                {props?.name?.charAt(0).toUpperCase()}
              </button>
              <br></br>
              <p className="detailed_info">Location</p>
              <input type="text" placeholder="Your Location" />
              <br></br>
              <br></br>
              <p className="basic_info">About you</p>
              <br></br>
              <p className="detailed_info">Profile Bio (About you)</p>
              <textarea
                type="text"
                name="bio"
                value={props.bio}
                onChange={handleChange2}
                placeholder="I am a developer from …"
              ></textarea>
              <br></br>
              <br></br>
              <p className="detailed_info">Tech Stack</p>
              <input
                type="text"
                value={props.techstack}
                onChange={handleChange4}
                placeholder="Your tech stack"
              />
              <br></br>
              <p className="detailed_info">Available for</p>
              <textarea
                value={props.avail}
                onChange={handleChange3}
                placeholder="I am available for"
              ></textarea>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Link to="/editProfile" bio="this is the bio">
                <button className="update_button">Update</button>
              </Link>
            </div>
            <div className="upperboard_right">
              <p className="basic_info">Social</p>
              <br></br>
              <p className="detailed_info">Twitter Profile</p>
              <input type="text" placeholder="Your profile" />
              <br></br>
              <p className="detailed_info">Instagram Profile</p>
              <input type="text" placeholder="Your profile" />
              <br></br>
              <p className="detailed_info">Github Profile</p>
              <input type="text" placeholder="Your profile" />
              <br></br>
              <p className="detailed_info">StackOverflow Profile</p>
              <input type="text" placeholder="Your profile" />
              <br></br>
              <p className="detailed_info">Facebook Profile</p>
              <input type="text" placeholder="Your profile" />
              <br></br>
              <p className="detailed_info">Website Url</p>
              <input type="text" placeholder="Your url" />
              <br></br>
              <p className="detailed_info">LinkedIn Url</p>
              <input type="text" placeholder="Your url" />
              <br></br>
              <p className="detailed_info">Youtube Channel</p>
              <input type="text" placeholder="Your channel" />
              <br></br>
              <br></br>
              <p className="basic_info">Profile Identity</p>
              <br></br>
              <p className="detailed_info">Username</p>
              <input type="text" placeholder="Your username" />
              <br></br>
              <p className="detailed_info">Email Address</p>
              <input type="text" placeholder="Your email" />
              <br></br>
            </div>
          </div>
          <div className="board_lower"> </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
