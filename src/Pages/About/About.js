import React from 'react';
import pic from '../../images/about/my.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about-container col-sm-12  text-center'>

            <div className="about-area ">
                <img src={pic} alt="" />
            </div>

            <div className="para">
                <p>Hello! Im am Abdul Barek. I am from Dinajpur.But Now I am living in Dhaka. I have completed my   graduation <br />
                    in CSE from University Of Development Alternative 2021. My Dream is to become software Developer one day. <br />
                    Within Four months i want to see myself In an IT company as a Front-end Developer. And i am trying on it. <br />
                    I am working hard to achive my goal. My hobbies are playing, visiting, workout, Movies etc.
                </p>
            </div>



        </div>
    );
};

export default About;