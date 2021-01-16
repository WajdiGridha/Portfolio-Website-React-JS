import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaPlay,
} from "react-icons/fa";


const Banner = () => {
  const [state] = React.useState({
    title: "I am Wajdi Gridha",
    text:
      "i m Wajdi professional web devlopper with long experience in the field",
    image: "images/man-01.png",
  });
  return (
    <header className="header">
      <canvas className="background"></canvas>
      <script src="../../node_modules\particlesjs\dist\particles.js"></script>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                  <a href="https://www.facebook.com/wajdigridha" > <FaFacebookF /></a>
                  </li>
                  <li>
                  <a href="https://www.instagram.com/wajdygr" > <FaInstagram /></a>  
                  </li>
                  <li>
                  <a href="https://www.linkedin.com/in/wajdi-gridha-b034471b4/" ><FaLinkedinIn /></a> 
                  </li>
                  <li>
                  <a href="https://github.com/WajdiGridha" ><FaGithub /></a> 
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="" className="btn btn-outline">
                    My Portfolio
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href="" className="btn btn-smart">
                    <FaPlay className="play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
