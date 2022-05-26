import React from 'react';

const ContactUs = () => {
    return (
        <div className='container my-4'>
            <div className='row my-5 shadow rounded-4'>
                <div className='col-12 col-md-6  p-0'>
                    <iframe title="map" className='w-100 img-rounded-start' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34747.166883872516!2d90.40225921525625!3d23.73503766666181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c366afdaf%3A0x63cbcd8b4dfb9d3c!2sMotijheel%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1653504230632!5m2!1sen!2sbd" width="800" height="540" style={{ border: 0, allowFullScreen: "", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }}></iframe>
                </div>
                <div className='col-12 col-md-6 p-4 '>
                    <form>
                        <h2 className='text-center fw-bold sub-color'>CONTACT US</h2>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                            <input type="text" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label">Your Email</label>
                            <input type="email" name='email' className="form-control" id="exampleInputPassword2" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="massage" className="form-label">Write Your Massage Here</label>
                            <textarea name="feedback" id="massage" className='form-control' cols="30" rows="7" required></textarea>
                        </div>

                        <button type="submit" className="btn bg-color text-white border-0 py-2 px-4 ">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;