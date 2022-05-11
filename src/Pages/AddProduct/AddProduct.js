import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/service`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                reset();
            })


    };

    // "quantity": "1",
    //     "supplier": "Yamaha"
    return (
        <div className='w-50 mx-auto'>
            <h2>Add Product</h2>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' {...register("amount")} />
                <input className='mb-2' placeholder='Quantity' {...register("quantity")} />
                <input className='mb-2' placeholder='Brand' {...register("supplier")} />
                <input className='mb-2' placeholder='Photo URL' {...register("img")} />

                <input className='mb-2' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddProduct;