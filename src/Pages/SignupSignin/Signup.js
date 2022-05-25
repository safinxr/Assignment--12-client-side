import React from 'react';

const Signup = () => {
    return (
            <div className='container my-4 '>
                <div className='row my-5 shadow rounded-4 bg-color'>
                    <div className='col-12 col-md-6  p-0'>
                        <iframe title="map" className='w-100 ' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34747.166883872516!2d90.40225921525625!3d23.73503766666181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c366afdaf%3A0x63cbcd8b4dfb9d3c!2sMotijheel%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1653504230632!5m2!1sen!2sbd" width="800" height="540" style={{ border: 0, allowFullScreen: "", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }}></iframe>
                    </div>
                    <div className='col-12 col-md-6 p-4 '>
                        <div className='col-8 mx-auto'>
                            <h1 className='text-center fw-bold text-white'>Signup</h1>
                            <form className='text-white'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Your name</label>
                                    <input type="Name" class="form-control" id="exampleInputEmail1" name='name' aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" name='password' class="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" class="btn btn-primary fs-5 p-1 w-100">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Signup;