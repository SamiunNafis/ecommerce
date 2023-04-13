import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductsCard = ({ product }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const id = product.title;
    const idString = id.toLowerCase().split(" ").join("");
    const handleClick = (event) => {
        event.stopPropagation();
        history.push(`/product/${idString}`, {
            state: {
                item: product,
            },
        });
    };

    const handleDispatch = (e) => {
        e.stopPropagation();
        dispatch(
            addToCart({
                id: product._id,
                title: product.title,
                image: product.image,
                price: product.price,
                quantity: 1,
                desc: product.description,
            })
        );
        toast.success(`${product.title} is added`);
    };
    return (
        <div
            onClick={handleClick}
            className="flex justify-start relative product-item group overflow-hidden"
        >
            <div>
                <div className="w-full h-96 cursor-pointer overflow-hidden">
                    <img
                        className="w-full h-full object-cover group-hover:scale-110 duration-300"
                        src={product.image}
                        alt="product"
                    />
                </div>
                <div className="w-full border-[1px] px-2 py-2">
                    <div className="relative flex justify-between items-center">
                        <div>
                            <h2 className="product-title overflow-hidden font-titleFont text-base font-bold">
                                {product.title}
                            </h2>
                        </div>
                        <div className="flex gap-2 overflow-hidden">
                            <div className="flex gap-1 items-center group-hover:translate-x-24 transition-transform duration-300">
                                <p className="line-through text-xs text-gray-400">
                                    ${product.oldPrice}
                                </p>
                                <p>${product.price}</p>
                            </div>
                            <div
                                onClick={handleDispatch}
                                className="cursor-pointer w-[100px] h-full absolute z-30 flex justify-end items-center opacity-0 hover:text-black text-xs text-gray-600 right-[50%] group-hover:opacity-100 group-hover:right-0 transition-right duration-300">
                                <p className="flex h-full items-center">
                                    add to cart{" "}
                                    <span>
                                        <BsArrowRight />
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="flex items-center text-gray-400 text-xs">
                            <AiFillStar />
                            {product.rating}/5
                        </p>
                    </div>
                </div>
            </div>
            {product.isNew && (
                <div className="font-titleFont text-sm flex justify-center items-center z-50 absolute bg-gray-900 text-white py-1 px-4 top-5 right-0">
                    <p>SALE</p>
                </div>
            )}
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