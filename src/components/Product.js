import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Product = () => {
    const id = useLocation();
    const [details, setDetails] = useState({});
    let [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    //console.log(id)

    useEffect(() => {
        setDetails(id.state.state.item);
    }, []);

    const decreaseQty = () => {
        setQty(qty === 1 ? qty : qty - 1);
    };
    const increaseQty = () => {
        setQty(qty + 1);
    };
    return (
        <div className="max-screen-w-xl mx-auto px-4 py-10 flex gap-8">
             <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="details-holder w-full h-full">
                <div className="w-[300px] relative">
                    <div>
                        <img
                            className="w-full h-[500px] object-cover max-w-[300px]"
                            src={details.image}
                            alt="product"
                        />
                    </div>
                    {details.isNew && (
                        <div className="font-titleFont text-sm flex justify-center items-center z-50 absolute bg-gray-900 text-white py-1 px-4 top-5 right-0">
                            <p>SALE</p>
                        </div>
                    )}
                </div>

                <div className="w-auto my-4 flex flex-col justify-center gap-4">
                    <h2 className="text-2xl font-bold">{details.title}</h2>
                    <div className="flex items-center gap-2">
                        <p className="line-through text-xs text-gray-400">
                            ${details.oldPrice}
                        </p>
                        <p>${details.price}</p>
                    </div>
                    <div className="my-5 flex items-center">
                        {[...Array(details.rating)].map((e, i) => {
                            return <AiFillStar key={i} />;
                        })}{" "}
                        ({details.rating}/5)
                    </div>
                    <div className="text-gray-600">{details.description}</div>
                    <div className="w-auto text-gray-600 flex items-center">
                        <div className="w-full text-gray-600 flex items-center justify-between border-[1px] border-gray-300 py-2 px-2">
                            <p>Quantity</p>
                            <div className="flex items-center gap-4 font-semibold">
                                <button
                                    onClick={decreaseQty}
                                    className="px-2 py-1 border-[1px] border-gray-300"
                                >
                                    -
                                </button>
                                <span>{qty}</span>
                                <button
                                    onClick={increaseQty}
                                    className="px-2 py-1 border-[1px] border-gray-300"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={() =>
                                dispatch(
                                    addToCart({
                                        id: details._id,
                                        title: details.title,
                                        image: details.image,
                                        price: details.price,
                                        quantity: qty,
                                        desc: details.description,
                                    })
                                ) && toast.success(`${details.title} is added`)
                            }
                            className="px-6 py-1 h-full text-white text-sm bg-gray-900"
                        >
                            Add to cart
                        </button>
                    </div>
                    <div className="text-gray-600">
                        Category: {details.category}
                    </div>
                </div>
            </div>
           
        </div>
    );
};
