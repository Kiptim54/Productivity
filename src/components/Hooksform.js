import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().matches("^[0-9]"),
});
const Hooksform = () => {
    const { register, errors, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="container">
            <h4 className="text-center">Practising hooks form</h4>

            <form
                action=""
                className="form-group"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                    className="form-control"
                    ref={register}
                />
               <p className="text-danger">{errors.name && errors.name.message}</p> 
            
                <label htmlFor="password">password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    className="form-control"
                    ref={register({ required: true })}
                />
                <p className="text-danger">{errors.password && errors.password.message}</p>
                <button type="submit" className="btn bg-white mt-4">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Hooksform;
