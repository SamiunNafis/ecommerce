import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import {
    deleteItem,
    resetCart,
    decreamentQuantity,
    increamentQuantity,
    addToCart
} from "../redux/bazarSlice";

export const CartItem = () => {
    const productData = useSelector((state) => state.productData);
    const dispatch = useDispatch();

    const increaseQty = (item) => {
        dispatch(
            addToCart({
                id: item._id,
                title: item.title,
                image: item.image,
                price: item.price,
                quantity: 1,
                desc: item.description,
            })
        );
    };
    const decreaseQty = (item) => {
        dispatch(
            addToCart({
                id: item._id,
                title: item.title,
                image: item.image,
                price: item.price,
                quantity: -1,
                desc: item.description,
            })
        );
    };

    return (
        <div className="min-w-[280px] mb-3 max-w-md">
            <div className="w-full">
                <h2 className="text-xl font-titleFont">Cart items</h2>
            </div>
            <div>
                {
                    //productData.length
                    productData.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="flex items-center justify-between gap-5 mt-4 flex-wrap"
                            >
                                <div className="w-full flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <MdOutlineClose
                                            onClick={() =>
                                                dispatch(deleteItem(item.id)) &
                                                toast.error(
                                                    `${item.title} removed from cart`
                                                )
                                            }
                                            className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                                        />
                                        <img
                                            className="w-32 h-32 object-cover"
                                            src={item.image}
                                            alt="productImage"
                                        />
                                    </div>
                                    <h2 className="text-base">{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <div className="w-full text-gray-600 flex items-center justify-between border-[1px] border-gray-300 py-2 px-2">
                                    <p>Quantity</p>
                                    <p>{item.quantity}</p>

                                    <div className="flex items-center gap-4 font-semibold">
                                        <button
                                            onClick={() => decreaseQty(item)}
                                            className="px-2 py-1 border-[1px] border-gray-300"
                                        >
                                            {" "}
                                            -{" "}
                                        </button>

                                        <button
                                            onClick={() => increaseQty(item)}
                                            className="px-2 py-1 border-[1px] border-gray-300"
                                        >
                                            {" "}
                                            +{" "}
                                        </button>
                                    </div>
                                    <p className="font-bold">
                                        Total: $
                                        {parseInt(item.quantity) *
                                            parseInt(item.price)}
                                    </p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <button
                onClick={() =>
                    dispatch(resetCart()) &
                    toast.error("Your cart is now empty")
                }
                className="bg-red-500 hover:bg-red-700 text-white cursor-pointer w-32 h-10"
            >
                Reset Cart
            </button>
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
        </div>
    );
};

