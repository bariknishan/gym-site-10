
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);

        const url = `http://localhost:5000/service`;
        fetch(url, {


            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result=>{
                console.log(result);
            })

    };


    return (
        <div className=' w-50 mx-auto'>
            <h2 className='mt-4 text-center'>Plaese Add Service</h2>


            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='description'{...register("description")} />
                <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='photo URL' type="text" {...register("img")} />
                <input className='bg-primary' type="submit" value="Add service" />
            </form>




        </div>

    );
};

export default AddService;