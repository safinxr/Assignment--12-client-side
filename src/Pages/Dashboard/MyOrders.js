import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MyOrders = () => {

    const [user, loading, error] = useAuthState(auth);
    
    const { data, isLoading, refetch } = useQuery('MyOrders', () => fetch(`http://localhost:5000/orders/${user?.email}`).then(res => res.json()))
   console.log(data)
    return (
        <div>
            <table className="table my-4">
                <thead>
                    <tr>
                        <th style={{ backgroundColor: 'lightgray' }} scope="col">No.</th>
                        <th style={{ backgroundColor: 'lightgray' }} scope="col">Product name</th>
                        <th style={{ backgroundColor: 'lightgray' }} scope="col">quantity</th>
                        <th style={{ backgroundColor: 'lightgray' }} scope="col">Price</th>
                        <th style={{ backgroundColor: 'lightgray' }} scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data?.map((order, index) => 
                        <tr key={order._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{order.productName}</td>
                            <td>{order.quantity}</td>
                            <td>{order.totalPrice}</td>
                            <td><button className='btn btn-primary'>Pay</button></td>
                            
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;