import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import '../../Custom.css'
import { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import Swal from 'sweetalert2'




const Order = () => {

    const [user, loading, error] = useAuthState(auth);

    const [orderError, setOrderError] = useState('')
    const [totalPrice, setTotalPrice] = useState(0)

    //🧲🧲🧲🧲🧲🧲🧲🧲 product fetch start 🧲🧲🧲🧲🧲🧲🧲🧲
    const { productId } = useParams();

    const { data, isLoading, refetch } = useQuery('product', () => fetch(`https://polar-garden-93471.herokuapp.com/product/${productId}`).then(res => res.json()))

    //🧩🧩🧩🧩🧩🧩🧩🧩🧩 ui data pass 🧩🧩🧩🧩🧩🧩🧩🧩🧩 
    if (isLoading) {
        return <Loading></Loading>
    }
    const { img, name, description, available, minimum, price, _id } = data

    const orderValue = (e) => {
        const value = e.target.value;
        setTotalPrice(value * price)
        if (value < minimum) {
            return setOrderError('You have to at least order ' + minimum)

        }
        if (value > available) {
            return setOrderError(' You can not order more the ' + available)
        }
        else {
            setOrderError('')
        }
    }



    //🍔🍔🍔🍔🍔🍔🍔🍔🍔 Order handel 🍔🍔🍔🍔🍔🍔🍔🍔🍔

    const orderHandel = (e) => {
        e.preventDefault()
        const quantity = e.target.quantity.value;
        const number = e.target.phone.value;
        const address =e.target.address.value;
        if (quantity >= minimum && quantity <= available) {
            const totalPrice = quantity * price;
            Swal.fire({
                imageUrl: `${img}`,
                imageHeight: 200,
                imageWidth: 300,
                title: `${name}`,
                html: `<p>Quantity: $${quantity}</p>
                <p>Total Price: $${totalPrice}</p>`,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Continue'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Order Success',
                        'See more details on dashboard',
                        'success'
                    )
                    const newquantity = available - quantity;
                    const newData = { newquantity };
                    const email = user.email;
                    const productName = name;
                    const postData = { productName, email, quantity, totalPrice, number, address }


                    fetch('https://polar-garden-93471.herokuapp.com/orders', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(postData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data, "order post");
                        })

                    fetch(`https://polar-garden-93471.herokuapp.com/product/${productId}`, {
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
            })
        }
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
                            <h3 className="d-none d-md-block">{name}</h3>
                            <p className="mb-0">Available quantity: {available}</p>
                            <p className="mb-0">Minimum quantity: {minimum}</p>
                            <p className="mb-0">Price: ${price}</p>
                            <p className="mb-0">Total Price: ${totalPrice ? totalPrice : price * minimum}</p>
                        </div>
                        <div>
                            <form onSubmit={orderHandel}>
                                <div className="mb-3">
                                    <input
                                        required
                                        name="quantity"
                                        defaultValue={minimum}
                                        onChange={orderValue}
                                        placeholder={'minimum' + minimum}
                                        type="number"
                                        className="form-control mb-3 rounded-5 p-2 border-0 px-3" />
                                    <p className="ms-2 sub-color2 mb-1">{orderError}</p>
                                    <input
                                        required
                                        name="phone"
                                        placeholder='&#xf095; Your phone number'
                                        type="number"
                                        className="form-control mb-3 rounded-5 p-2 border-0 px-3 placeholder-icon" />
                                    <input
                                        required
                                        name="address"
                                        placeholder='&#xf041; Your Address'
                                        type="text"
                                        className="form-control mb-3 rounded-5 p-2 border-0 px-3 placeholder-icon" />

                                    <button type="submit" className="btn btn-primary rounded-5 px-4 w-100 ">Purchase</button>
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