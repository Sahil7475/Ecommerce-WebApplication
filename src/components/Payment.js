import React from 'react'
import ".//payment.css"
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from ".//axios";
import { db } from './firebase';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    const history = useHistory();
    var date = new Date();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthname = month[date.getMonth()];
    var current_date = monthname + " " + date.getDate() + "th " + date.getFullYear();

    var hours = date.getHours();
    var minutes = date.getMinutes();

    // Check whether AM or PM
    var newformat = hours >= 12 ? 'PM' : 'AM';

    // Find current hour in AM-PM Format
    hours = hours % 12;

    // To display "0" as "12"
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;


    var current_time = " " + hours + ':' + minutes + ' ' + newformat;
    const stripe = useStripe();
    const elements = useElements();

    const [succeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientsecret] = useState(true);

    useEffect(() => {
        //generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientsecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log("The SECRET IS >>> ", clientSecret);
    console.log(user);
    const handlesubmit = async (event) => {
        /* do all the stripe fancy stuff */
        event.preventDefault();
        setProcessing(true);

        /* const paymentIntent = await stripe.confirmCardPayment(clientSecret, { payment_method: 'card' }); */

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {

                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntents=payment confirmation
            console.log("&&" + paymentIntent);
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent)
                .set({
                    basket: basket,
                    amount: getBasketTotal(basket) * 100,
                    created: current_date + current_time,
                })



            setSucceded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders');
        })

    }
    const handlechange = event => {
        /* Listen for changes in cardelement
            and display any errors as the customer types their card details
        */
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    return (
        <div className='payment'>
            <div className="payment_container">
                <h1>
                    Checkout {<Link to="/checkout">{basket?.length} items</Link>}
                </h1>

                {/* payment section -delivery address */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>123 react lane</p>
                        <p>los angeles, CA</p>
                    </div>
                </div>
                {/* payment section - review items*/}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment_items">
                        {/* products */}
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* payment section - payment method */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h1>Payment Method</h1>
                    </div>
                    <div className="payment_details">
                        {/* stripe magic will go */}
                        <form action="" onSubmit={handlesubmit}>
                            <CardElement onChange={handlechange} />
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <p>
                                                <h3>Order Total:{value}</h3>

                                            </p>

                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
            <div className="summary">
                <div className="summarycontent">
                    <h2>Order summary</h2>
                    <CurrencyFormat
                        renderText={(value) => (
                            <>
                                <p>
                                    Subtotal ({basket?.length} items)
                                </p>

                            </>
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                    />
                    <div className='delivery'>
                        <p>delivery : </p>
                        <p className='value'>$0</p>
                    </div>
                    <div className='delivery'>
                        <p>Total : </p>
                        <p className='value1'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <p>
                                            <strong>{value}</strong>
                                        </p>

                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                        </p>
                    </div>
                    <div className='total'>
                        <div>Order Total:</div>

                        <p className="amount">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <p>
                                            <strong>{value}</strong>
                                        </p>

                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />

                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment