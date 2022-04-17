import React from 'react';
import './Footer.css'

const Footer = () => {

  const today = new Date();
  const year = today.getFullYear()

  return (
    <div className="footer">


      <footer className='text-center mt-5 bg-dark p-3 text-white footer  ' >

        <p className='m-4'> All &copy;Copyright Reserved By FitnesMania {year}</p>
        <p>Location: Dhaka 1207, Dhanmondi</p>

      </footer>
    </div>
  );
};

export default Footer;