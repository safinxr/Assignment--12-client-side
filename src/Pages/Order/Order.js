import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import '../../Custom.css'
import { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";




const Order = () => {

    const [user, loading, error] = useAuthState(auth);

    const [orderError, setOrderError] = useState('')
    const [totalPrice, setTotalPrice] = useState(0)

    //🧲🧲🧲🧲🧲🧲🧲🧲 product fetch start 🧲🧲🧲🧲🧲🧲🧲🧲
    const { productId } = useParams();
    
    const { data, isLoading, refetch } = useQuery('product', () => fetch(`http://localhost:5000/product/${productId}`).then(res => res.json()))


    //🧩🧩🧩🧩🧩🧩🧩🧩🧩 ui data pass 🧩🧩🧩🧩🧩🧩🧩🧩🧩 
    if (isLoading) {
        return <Loading></Loading>
    }
    const { img, name, description, available, minimum, price, _id } = data
    const orderValue = (e) => {
        const value = e.target.value;
        setTotalPrice(value * price)
        if (value <= minimum) {
            return setOrderError('You have to at least order ' + minimum)

        }
        if (value > available) {
            return setOrderError(' You can not order more the ' + available)
        }
        else {
            setOrderError('')
        }
    }
    if (totalPrice < 1) {
        setTotalPrice(price * minimum)
    }

    //🍔🍔🍔🍔🍔🍔🍔🍔🍔 Order handel 🍔🍔🍔🍔🍔🍔🍔🍔🍔

    const orderHandel = (e) => {
        e.preventDefault()
        const quantity = e.target.quantity.value;
        const newquantity = available - quantity;
        const newData = { newquantity };
        fetch(`http://localhost:5000/product/${productId}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newData),
        })
            .then(res => res.json())
            .then(data => {
                refetch()
            })
    }

    // 🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟 HTML 🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟

    return (
        <div className="container ">
            <div className='container'>

                <div className="d-md-none d-flex justify-content-center align-items-center shadow rounded-4 sm-div">
                    <img className="w-75" src={img} alt="" />
                </div>

                <div className='col-12 col-md-10 mx-auto row my-md-5 shadow-lg rounded-4 bg-color order-div '>
                    <div className='col-12 col-md-6 p-0 p-md-4  d-flex justify-content-center align-items-center img-rounded-start bg-white'>
                        <h3 className="d-md-none px-3 text-center">{name}</h3>
                        <img className='d-none d-md-block w-100' src={img} alt="" />
                    </div>
                    <div className='col-12 col-md-6 p-4'>
                        <div className="sub-color mb-4 text-white">
                            <h2 className="d-none d-md-block">{name}</h2>
                            <p>{description}</p>
                            <h3>Available quantity: {available}</h3>
                            <h3>Minimum quantity: {minimum}</h3>
                            <h3>Price: ${price}</h3>
                            <h3>Total Price: ${totalPrice}</h3>
                        </div>
                        <div>
                            <form onSubmit={orderHandel}>
                                <div className="mb-3 d-flex">
                                    <input
                                        name="quantity"
                                        defaultValue={minimum}
                                        onChange={orderValue}
                                        placeholder={'minimum' + minimum}
                                        type="number"
                                        className="form-control rounded-5 p-2 border-0 px-3"
                                        aria-describedby="emailHelp" />

                                    <button type="submit" className="btn btn-primary ms-1 rounded-5 px-4">Order</button>
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