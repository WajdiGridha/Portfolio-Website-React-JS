import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaGithub
  } from "react-icons/fa";
const Contact = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="contactSection">
                <div className="row justifyConter">
                <div className="col-6">
                    <div className="contactSection-logo">
                        <img  src="images/logo.png" alt=""/>  
                    </div>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry
                     Lorem Ipsum has been the industry's standard dummy text.
                     Lorem Ipsum is simply dummy text of the printing and typesetting 
                     industry Lorem Ipsum has been the industry's standard dummy text.</p>
                                <ul className="contactCircles">
                                        <li><FaFacebookF/></li>
                                        <li><FaInstagram /></li>
                                        <li><FaLinkedinIn/></li>
                                        <li><FaGithub /></li>
                                </ul>
                 </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
