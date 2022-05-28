import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const AddAReview = () => {
    const [user] = useAuthState(auth);

    const reviewHandel = (e) => {
        e.preventDefault()
        const review = e.target.review.value;
        const country = e.target.country.value;
        const rating = e.target.rating.value;
        const img = e.target.img.value;
        const email = user.email;
        const name = user.displayName;
        const newReview = { review, country, rating, email, name, img }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                e.target.reset();
            })

    }

    return (
        <div className='container'>
            <div className='col-12 col-md-6 mx-auto shadow p-5 my-4 mb-4 rounded-4'>
                <h1 className='text-center sub-color mb-4'>Give us a Review</h1>
                <form onSubmit={reviewHandel}>
                    <div className="mb-3">
                        <input type="email" value={user.email} disabled className="form-control rounded-5" required />
                    </div>
                    <div className="mb-3">
                        <input name='country' type="text" placeholder='&#xf57c; country' className="form-control rounded-5 placeholder-icon" required />
                    </div>
                    <div className="mb-3">
                        <textarea placeholder='Write your review here &#xf075;' name="review" className="form-control rounded-4 placeholder-icon" cols="30" rows="6" required></textarea>
                    </div>
                    <div className="mb-3">
                        <input name='img' placeholder='&#xf03e; image URL'  type="url" className="form-control rounded-5 placeholder-icon " required />
                    </div>
                    <div className="mb-3">
                        <input name='rating' placeholder='&#xf005; Give star 1 to 5' min='1' max='5' type="number" className="form-control rounded-5 placeholder-icon " required />
                    </div>

                    <button type="submit" className="btn btn-primary w-100 rounded-5">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddAReview;