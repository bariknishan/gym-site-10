import React from 'react';

const Trainer = ({ trainer }) => {

    const { name, img } = trainer;

    return (

        <div className="g-2  col-sm-12 col-md-6 col-lg-4 mt-5   ">
            <div className="card   text-center  p-2   " style={{ width: "22rem" }}      >

                <img src={img} height="300px" className="card-img-top    " alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold fs-4   "  >{name}</h5>
                    <p className="card-text  ">All are professional and award winning Bodybuilder. And they are world famous</p>
                    <a href="#" className="btn w-100 btn-warning"> SEE MORE</a>
                </div>
            </div>
        </div>

    );
};

export default Trainer;