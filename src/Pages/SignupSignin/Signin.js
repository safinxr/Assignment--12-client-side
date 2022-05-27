import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/UseToken';
import Loading from '../Loading/Loading';

const Signin = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    //🤖🤖🤖🤖🤖🤖🤖 Firebase Hooks start🤖🤖🤖🤖🤖🤖🤖🤖 

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [token] = useToken(user || gUser) 

    if(token){
        navigate(from, { replace: true });
    }


    // 🔓🔓🔓🔓🔓🔓🔓🔓🔓🔓 Signup Handel🔓🔓🔓🔓🔓🔓🔓🔓🔓🔓
    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }


    // 🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟 HTML 🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟
    return (
        <div className='container'>
            <div className=' row my-5 shadow-lg rounded-4 custom-color'>
                <div className='col-12 col-md-6 p-0 d-node d-md-block'>
                    <img className='w-100 h-100 d-none d-md-block img-rounded-start' src="https://i.ibb.co/Yyj2S36/Untitled-design-min.png" alt="" />
                </div>
                <div className='col-12 col-md-6 p-4 d-flex align-items-center'>
                    <div className='col-12 col-md-8 mx-auto'>
                        <h1 className='text-center fw-bold text-white mb-4'>Signup</h1>
                        <form onSubmit={handleSubmit} className='text-white'>
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
                                    loading? <Loading></Loading> : 'Signup'
                                }
                            </button>
                        </form>
                        <p className="my-2 text-white">
                            Dont have an account ? <Link className=" text-danger text-decoration-none"
                                to="/signup"
                            >
                                Signup
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

export default Signin;