import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import useToken from '../../Hooks/UseToken';

const Signup = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    //🤖🤖🤖🤖🤖🤖🤖 Firebase Hooks start🤖🤖🤖🤖🤖🤖🤖🤖 

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [token] = useToken(user || gUser)

    if (token) {
        navigate(from, { replace: true });
    }

    // 🔓🔓🔓🔓🔓🔓🔓🔓🔓🔓 Signup Handel start🔓🔓🔓🔓🔓🔓🔓🔓🔓🔓
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
        <div className='container'>
            <div className=' row my-5 shadow-lg rounded-4 custom-color2'>
                <div className='col-12 col-md-6 p-0 d-node d-md-block '>
                    <img className='w-100 h-100 d-none d-md-block img-rounded-start' src="https://i.ibb.co/zWcsB79/Untitled-design-1-min.png" alt="" />
                </div>
                <div className='col-12 col-md-6 p-4 d-flex align-items-center'>
                    <div className='col-12 col-md-8 mx-auto'>
                        <h1 className='text-center fw-bold text-white mb-4'>Signup</h1>
                        <form onSubmit={handleSubmit} className='text-white'>
                            <div className="mb-4">
                                <input type="Name"
                                    placeholder='&#xf007; Your name'
                                    className="form-control rounded-5 border-0 placeholder-icon py-2 px-3"
                                    id="exampleInputEmail1" name='name' aria-describedby="emailHelp" required />
                            </div>
                            <div className="mb-4">
                                <input
                                    placeholder='&#xf0e0; Your email'
                                    type="email" className="form-control rounded-5 border-0 placeholder-icon py-2 px-3" id="exampleInputEmail2" name='email' aria-describedby="emailHelp" required />
                            </div>
                            <div className="mb-4">
                                <input
                                    placeholder='&#xf023; Password'
                                    type="password" name='password' className="form-control rounded-5 border-0 placeholder-icon py-2 px-3" id="exampleInputPassword1" required />
                            </div>
                            <p className='mb-2 text-danger'>{error?.message.split(':')[1]}</p>
                            <button type="submit" className="btn bg-color text-white fs-5 p-1 w-100  rounded-5 border-0">
                                {
                                    loading || updating ? <Loading></Loading> : 'Signup'
                                }
                            </button>
                        </form>
                        <p className="my-2 text-white">
                            Already have an account ? <Link className=" text-danger text-decoration-none"
                                to="/signin"
                            >
                                Signin
                            </Link>
                        </p>
                        <div className=' d-flex align-items-center justify-content-center'>
                            <div className='border w-50'></div>
                            <p className='mx-2 text-white mt-2'>or</p>
                            <div className='border w-50'></div>
                        </div>
                        <p className='mb-2 text-danger'>{gError?.message.split(':')[1]}</p>
                        <button
                            onClick={() => signInWithGoogle()}
                            className='btn text-white border-light w-100 rounded-5'>
                            {
                                gLoading ? <Loading></Loading> : <i className="fa-brands fa-google "><span className='ms-2 roboto'>Continue With Google</span></i>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;