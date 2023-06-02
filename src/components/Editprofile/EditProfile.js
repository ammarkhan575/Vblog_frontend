import React from "react";
import "./EditProfile.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function EditProfile(props) {
  

  useEffect(() => {
    {
      props.setbio(localStorage.getItem("inputValue2"));
      props.setname(localStorage.getItem("inputValue1"));
      props.settechstack(localStorage.getItem("inputValue4"));
      props.setavail(localStorage.getItem("inputValue3"));
    }
  }, []);



  return (
    <div className="edit_profile">
      <div className="upper_div"></div>
      <div className="lower_div">
        <div className="left_div"></div>
        <div className="right_div">
          <div className="first_div">
            <div className="first_first">
              {/* <img
                className="image_icon"
                src="https://avatars.githubusercontent.com/u/65578769?v=4"
                alt="profile photo"
              /> */}

              <button className="image_icon">{props?.name?.charAt(0).toUpperCase()}</button>
            </div>
            <div className="first_name">{props.name}</div>
            <div className="div_button">
              <div>
              <button className="first_button">
                <img
                  className="share_image"
                  title="Share profile"
                  src="../images/shareimage.png"
                />


              </button>
              </div>
              <div>
              <Link to="/profile">
                <button className="second_button" type="button" >
                  <img
                    className="share_image"
                    title="Edit profile"
                    src="../images/editimage.avif"
                  />
                </button>
              </Link>
              </div>
              
            </div>
          </div>
          <div className="second_div">
            <div className="card">
              <p className="para_text">About Me</p>
              
                <button className="card_first_button" >+Add</button>
                <p className="detailed_para">{props.bio}</p>
            </div>
            <div className="card">
              <p className="para_text">My Tech Stack</p>
              <button className="card_second_button">+Add</button>
              <p className="detailed_para">{props.techstack}</p>
            </div>

            <div className="card">
              <p className="para_text">I am available for</p>
              <button className="card_third_button">+Add</button>
              <p className="detailed_para">{props.avail}</p>
            </div>
          </div>
          <div className="third_div">
            <div className="third_div_div">
              <p className="para_text">Recent Activity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
