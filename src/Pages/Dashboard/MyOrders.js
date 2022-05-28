import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';


const MyOrders = () => {
    const navigate = useNavigate()
    const [user,] = useAuthState(auth);
    const { data, isLoading, refetch } = useQuery('MyOrders', () => fetch(`http://localhost:5000/orders/${user?.email}`, {
        method: 'GET',
        headers:{
            'authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => {
        console.log('res', res);
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/');
        }
        return res.json()
    }))

    const cancelHandel = (id) => {
        Swal.fire({
            title: 'Are you sure?', 
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Cancel success!',
                'Your order has been canceled.',
                'success'
              )
              fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    refetch()                
                })
            }
          })
    }


    return (
        <div>
            <table className="table my-4">
                <thead>
                    <tr>
                        <th style={{ backgroundColor: 'lightgray' }} scope="col">No.</th>
                        <th style={{ backgroundColor: 'lightgray' }} scope="col">Product name</th>
                        <th style={{ backgroundColor: 'lightgray' }} scope="col">quantity</th>
                        <th style={{ backgroundColor: 'lightgray' }} scope="col">Price</th>
                        <th style={{ backgroundColor: 'lightgray' }} scope="col">Order manage</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data?.map((order, index) =>
                            <tr key={order._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{order.productName}</td>
                                <td>{order.quantity}</td>
                                <td>${order.totalPrice}</td>
                                <td>
                                    <button onClick={() => cancelHandel(order._id)} className='btn text-white px-3 bg-sub2  btn-secondary border-0'>Cancel</button>
                                    <button onClick={()=>{
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Sorry',
                                            text: 'The payment method has not been added yet 😥',
                                            
                                          })
                                    }} className='btn bg-color text-white px-4 ms-4 '>Pay</button>
                                </td>

                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;