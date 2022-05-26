import React from 'react';
import { Link } from 'react-router-dom';
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';

const Signup = () => {
    //🤖🤖🤖🤖🤖🤖🤖 Firebase Hooks 🤖🤖🤖🤖🤖🤖🤖🤖 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);



    // 🔓🔓🔓🔓🔓🔓🔓🔓🔓🔓 Signup Handel🔓🔓🔓🔓🔓🔓🔓🔓🔓🔓
    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

   // 🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟 HTML 🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟 
    return (
        <div className='container my-4 '>
            <div className='row my-5 shadow rounded-4 bg-color'>
                <div className='col-12 col-md-6  p-0'>
                    <iframe title="map" className='w-100 ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34747.166883872516!2d90.40225921525625!3d23.73503766666181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c366afdaf%3A0x63cbcd8b4dfb9d3c!2sMotijheel%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1653504230632!5m2!1sen!2sbd" width="800" height="540" style={{ border: 0, allowFullScreen: "", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }}></iframe>
                </div>
                <div className='col-12 col-md-6 p-4 '>
                    <div className='col-8 mx-auto'>
                        <h1 className='text-center fw-bold text-white'>Signup</h1>
                        <form onSubmit={handleSubmit} className='text-white'>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Your name</label>
                                <input type="Name" className="form-control" id="exampleInputEmail1" name='name' aria-describedby="emailHelp" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail2" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail2" name='email' aria-describedby="emailHelp" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" name='password' className="form-control" id="exampleInputPassword1" required />
                            </div>
                            <button type="submit" className="btn btn-primary fs-5 p-1 w-100">Submit</button>
                        </form>
                        <p className="my-2 text-white">
                            Already have an account ? <Link className=" text-danger text-decoration-none"
                                to="/sign"
                            >
                                Signin
                            </Link>
                        </p>
                        <div className=' d-flex align-items-center justify-content-center'>
                            <div className='border w-50'></div>
                            <p className='mx-2 text-white mt-2'>or</p>
                            <div className='border w-50'></div>
                        </div>
                        <button className='btn text-white border-light w-100'><i className="fa-brands fa-google"></i> Continue With Google
                        </button>                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;