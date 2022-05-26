import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";



const Order = () => {


    const { productId } = useParams();
    console.log(productId)


    const { data, isLoading } = useQuery('products', () => fetch(`http://localhost:5000/product/${productId}`).then(res => res.json()))

    console.log(isLoading)



    if (isLoading) {
        <Loading></Loading>
    }



    const { img, name, description, available, minimum, price, _id } = data
    // 🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟 HTML 🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟🍟

    return (
        <div className="container">
            <div className="text-center">
                <h2 className="rounded fw-bold py-2 px-4 shadow-lg text-info mt-4 d-inline-block">
                    Stock Update
                </h2>
            </div>

            <div className="mb-5">
                <div className="row g-5 shadow-lg rounded pb-5 pb-md-2 my-4">
                    <div className="col-12 col-md-6">
                        <div className="">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="">
                            <h1>{name}</h1>
                            <p className="text-justify">
                                <small>{description}</small>
                            </p>
                            <h3 className="mb-1">Available quantity: {available}</h3>
                            <h3 className="mb-1">Minimum quantity: {minimum}</h3>
                            <h3 className="mb-1">Price: ${price}</h3>
                            <div className="d-flex mt-5 pt-2 mb-3">
                                <button

                                    className="btn btn-info px-4  me-2 "
                                >
                                    Deliver <i className="fa-solid fa-truck"></i>
                                </button>
                                <form className="d-flex ">
                                    <input type="number" className="form-control" name="number" required />
                                    <button className="ms-2 px-3 btn btn-info" type="submit">
                                        Add
                                    </button>
                                </form>
                            </div>
                            <div className="d-flex">
                                <Link className="btn btn-info px-5" to="/manageitems">
                                    Manage items <i className="fa-solid fa-list-check"></i>
                                </Link>
                                <Link className="btn btn-info px-5 ms-2" to="/additems">
                                    Add items <i className="fa-solid fa-circle-plus"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;