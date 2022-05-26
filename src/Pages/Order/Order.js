import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import '../../Custom.css'
import { useState } from "react";



const Order = () => {

    const [orderError, setOrderError] = useState('')
    const [totalPrice, setTotalPrice] = useState(0)

    const { productId } = useParams();
    console.log(productId)
    const { data, isLoading, } = useQuery('product', () => fetch(`http://localhost:5000/product/${productId}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    const orderValue = (e) => {
        const value = e.target.value;
        setTotalPrice(value * price)
        if (value <= minimum) {
            return setOrderError('Error: You have to at least order ' + minimum)

        }
        if (value > available) {
            return setOrderError('Error: You can not order more the ' + available)
        }
        else {
            setOrderError('')
        }
    }


    const { img, name, description, available, minimum, price, _id } = data
    // 🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟 HTML 🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟

    return (
        <div className="container ">
            <div className='container'>

                <div className="d-md-none d-flex justify-content-center align-items-center shadow rounded-4 sm-div">
                    <img className="w-75" src={img} alt="" />
                </div>

                <div className='col-12 col-md-10 mx-auto row my-md-5 shadow-lg rounded-4 bg-color order-div '>
                    <div className='col-12 col-md-6 p-0  d-flex justify-content-center align-items-center img-rounded-start bg-white'>
                        <h3 className="d-md-none px-3 text-center">{name}</h3>
                    <img className='d-none d-md-block w-100' src={img} alt="" />
                    </div>
                    <div className='col-12 col-md-6 p-4'>
                        <div className="sub-color mb-4 text-white">
                            <h1 className="d-none d-md-block">{name}</h1>
                            <p>{description}</p>
                            <h3>Available quantity: {available}</h3>
                            <h3>Minimum quantity: {minimum}</h3>
                            <h3>Price: ${price}</h3>
                        </div>
                        <div>
                            <form>
                                <div className="mb-3 d-flex">
                                    <input
                                        onChange={orderValue}
                                        placeholder="Minimum 100"
                                        type="number"
                                        className="form-control rounded-5 p-2 border-0 px-3"
                                        aria-describedby="emailHelp" />
                                        
                                    <button type="submit" className="btn btn-primary ms-1 rounded-5 px-4">${totalPrice}_Order</button>
                                </div>
                                <p className="ms-2 sub-color2">{orderError}</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;