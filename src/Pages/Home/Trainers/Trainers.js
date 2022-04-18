import React from 'react';
import trainer1 from '../../../images/trainer/trainer.png'
import trainer2 from '../../../images/trainer/trainer2.png'
import trainer3 from '../../../images/trainer/trainer3.png'
import Trainer from '../Trainer/Trainer';


const trainers= [
    { id: 1, name:"SAHIL KHAN" ,img: trainer1},
    { id: 2, name:"TAMEER ANWAR" ,img: trainer2},
    { id: 3, name:" HASIB HOLY" ,img: trainer3},
]





const Trainers = () => {



    return (
        <div className='container'  id='trainers'>
            <h2  className='text-center fs-1 mt-5  text-warning  fw-bold'> SEE MY TRAINERS</h2>


            <div className="row">
           {
               trainers.map( trainer=> <Trainer 
               
               key={trainer.id}
               trainer={trainer}

               ></Trainer>)
           }

            </div>
        </div>
    );
};

export default Trainers;