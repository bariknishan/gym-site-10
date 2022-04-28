import React from 'react';
import useServices from '../../Hooks/UseServices';

const ManageServices = () => {

    const [services ,setServices]= useServices()


    const handleDelete=id=>{
        const proceed= window.confirm('are you sure?');
        if(proceed){
     const url = `http://localhost:5000/service/${id}`  // para is id 

       fetch(url, {
           method: 'DELETE'
       })

      .then(res=>res.json())
      .then(data=>{
          console.log(data)

          const remaining= services.filter(service=> service._id !==id );
          setServices(remaining);
      }) 

        }
    }
    
    return (
        <div  className='w-50 mx-auto mb-4'>
            <h2>Manage Your services</h2>
            <br />

            {
                services.map(service=> <div  key={service._id}>

                    <p>{service.name} <button onClick={()=>handleDelete(service._id)}>X</button></p>
                </div>)
            }
        </div>
    );
};

export default ManageServices;