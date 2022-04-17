import React from 'react';
import Footer from '../../SharedPage/Footer/Footer';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Trainers from '../Trainers/Trainers';

const Home = () => {
    return (
        <>
           <Banner></Banner> 
         <Services></Services>
         <Trainers></Trainers>
        <Footer></Footer>
        </>
    );
};

export default Home;