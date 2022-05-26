import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";



const Order = () => {


    const { productId } = useParams();
    console.log(productId)
    const { data, isLoading, } = useQuery('product', () => fetch(`http://localhost:5000/product/${productId}`).then(res => res.json()))

    console.log(isLoading)



    if (isLoading) {
        return <Loading></Loading>
    }



    const { img, name, description, available, minimum, price, _id } = data
    // 🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟 HTML 🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟

    return (
        <div className="container">
            <div className='container'>
                <div className='col-12 col-md-10 mx-auto row my-5 shadow-lg rounded-4 custom-color3 order-div'>
                    <div className='col-12 col-md-6 p-0 bg-white d-flex justify-content-center align-items-center img-rounded-start d-none d-md-block'>
                        <img className=' d-none d-md-block ' src={img} alt="" />
                    </div>
                    <div className='col-12 col-md-6 p-4'>
                        <div className="sub-color mb-4">
                            <h1>{name}</h1>
                            <p>{description}</p>
                            <h3>Available quantity: {available}</h3>
                            <h3>Minimum quantity: {minimum}</h3>
                            <h3>Price: ${price}</h3>
                        </div>
                        <div>
                            <form>
                                <div class="mb-3 d-flex">
                                    <input
                                        type="email"
                                        class="form-control rounded-4 p-2"
                                        aria-describedby="emailHelp" />
                                    <button type="submit" class="btn btn-primary ms-2">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;