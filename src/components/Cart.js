import React from 'react'
import { useSelector } from 'react-redux';
import { CartItem } from './CartItem';
import StripeCheckout from 'react-stripe-checkout';

export const Cart = () => {
    const productData = useSelector((state) => state.productData)
    //console.log(productData)
    return(
        <div>
            <div className="header w-full flex flex-col items-center justify-center gap-3 py-2">
                <h2 className='text-2xl font-titleFont'>My Cart</h2>
                <span className='w-[40px] bg-gray-900 h-[5px]'></span>
            </div>
            <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-row flex-wrap justify-between">
                {
                    productData.length === 0 ? (
                        <p className='text-xl'>No items in your cart</p>
                    ) : (
                        <CartItem />
                    )
                }
                <div>
                    <div className="min-w-[280px] max-w-md bg-[#efefef] px-4 py-6 flex flex-col gap-3">
                        <h2 className='font-titleFont font-bold text-2xl'>Total amount</h2>
                    
                    <div>
                        Subtotal: ${200}
                    </div>
                    <div>
                        Shipping: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis.
                    </div>
                    <div className="w-full h-[1px] bg-gray-300"> </div>
                    <span className='font-bold my-2'>Total: ${200}</span>
                    <button className='w-full bg-gray-900 text-white h-10'>Proceed to payment</button>
                    {/*<div>
                <StripeCheckout
  name="Three Comma Co." // the pop-in header title
  description="Big Data Stuff" // the pop-in header subtitle
  image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
  ComponentClass="div"
  panelLabel="Give Money" // prepended to the amount in the bottom pay button
  amount={1000000} // cents
  currency="USD"
  stripeKey="pk_test_51Mv0h5Ja8OMKkpWiSKLGLMksuaaUZUmNtif5SWwhzjUEZPZcFxY6a5wCOYxoGBB2jTs6ChiiThRfPhj8KwgBHwCy00NkpSNr9M"
  locale="us"
  email="test@example.com"
  // Note: Enabling either address option will give the user the ability to
  // fill out both. Addresses are sent as a second parameter in the token callback.
//  shippingAddress
  //billingAddress={false}
  // Note: enabling both zipCode checks and billing or shipping address will
  // cause zipCheck to be pulled from billing address (set to shipping if none provided).
 // zipCode={false}
 // alipay // accept Alipay (default false)
//  bitcoin // accept Bitcoins (default false)
//  allowRememberMe // "Remember Me" option (default true)
 // token={this.onToken} // submit callback
 // opened={this.onOpened} // called when the checkout popin is opened (no IE6/7)
 // closed={this.onClosed} // called when the checkout popin is closed (no IE6/7)
  // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
  // you are using multiple stripe keys
  reconfigureOnUpdate={false}
  // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
  // useful if you're using React-Tap-Event-Plugin
  triggerEvent="onTouchTap"
  />
  
  <button className="btn btn-primary">
    Use your own child component, which gets wrapped in whatever
    component you pass into as "ComponentClass" (defaults to span)
  </button>
                </div>*/}
                </div>
                </div>
            </div>
        </div>
    )
}