import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { FaAffiliatetheme, FaCcAmazonPay, FaMoneyCheck } from "react-icons/fa";
import { SiKlarna } from "react-icons/si";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from '../../../Hooks/useAuth';
import Swal from "sweetalert2";

const PaymentForm = ({ queryParams, }) => {
  const [error, setError] = useState();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { price, requestId, propertyId, owner, property_img, property_title } = queryParams;
  console.log(property_img, property_title)

  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price, requestId, propertyId, owner })
      .then(res => {
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
      })
  }, [axiosSecure, price, requestId, propertyId, owner]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError('');
    }
    // confirm error
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || "anonymous",
          name: user?.displayName || "anonymous"
        }
      }
    })
    if (confirmError) {
      console.log('confirm error');
    }
    else {
      console.log('payment intent', paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id);
        // save the payment in the database
        const payment = {
          paymentUser: user?.email,
          propertyId,
          requestId,
          price,
          owner,
          date: new Date().toLocaleDateString("en-GB"),
          transactionId: paymentIntent.id,
        };
        const res = axiosSecure.post('/payments', payment);
        if (res) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };

  return (
    <div className="px-10">
      {/* new from added and desgin by sojib */}
      <div>
        <div className=" flex justify-center items-center my-10">
          <div className=" bg-gray-800 w-[440px] h-[780px] rounded-l-lg">
            <div className=" ml-10 mt-10">
              <div className="flex mb-2 items-center">
                <img
                  className="max-w-[60px] md:w-full"
                  src="https://i.ibb.co/3kqdMYy/logo-white.png"
                />
                <h4 className="font-bold poppins-font text-2xl lg:text-[34px] text-white ml-2">
                  Renti<span className="text-[#e33226]">fy</span>
                </h4>
              </div>
              <h2 className=" text-white font-bold mb-1"><span className=" text-3xl text-white font-bold">P</span>roperty</h2>
              <p className=" my-4 text-white">{property_title}</p>
              <p className=" text-2xl font-bold text-white">{price} $</p>
              <div>
                <img className=" w-[75%] rounded mt-2 h-[260px]" src={property_img} alt="" />
              </div>
              <p className=" text-sm mt-20 text-gray-50">Powred by stripe   <span>terms & conditions</span></p>
            </div>
          </div>
          <div className=" bg-gray-100 rounded-r-lg w-[580px] h-[780px]">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="w-[80%] mx-auto">
                <h2 className=" text-3xl font-bold">Pay For properties</h2>
              </div>
              <div className="form-control w-[80%] mx-auto">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control w-[80%] mx-auto">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input type="number" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="">
                <label className="label w-[80%] mx-auto">
                  <span className=" text-xl font-bold">Payment method</span>
                </label>
                <div className=" flex justify-evenly items-center w-[80%] mx-auto">
                  <div className=" border-2 p-2 rounded-lg w-[100px]">
                    <FaMoneyCheck className=" text-xl font-bold"></FaMoneyCheck>
                    <span className=" mt-1">Card</span>
                  </div>
                  <div className=" border-2 p-2 rounded-lg w-[100px]">
                    <FaCcAmazonPay className=" text-xl font-bold"></FaCcAmazonPay>
                    <span className=" mt-1">Apple Pay</span>
                  </div>
                  <div className=" border-2 p-2 rounded-lg w-[100px]">
                    <SiKlarna className=" text-xl font-bold"></SiKlarna>
                    <span className=" mt-1">Klarna</span>
                  </div>
                  <div className=" border-2 p-2 rounded-lg w-[100px]">
                    <FaAffiliatetheme className=" text-xl font-bold"></FaAffiliatetheme>
                    <span className=" mt-1">Affirm</span>
                  </div>
                </div>
                <div className=" w-[80%] mx-auto my-5">
                  <label className="label">
                    <span className="label-text font-bold">Card Information</span>
                  </label>
                  <CardElement
                    className=" w-[98%] h-5 mx-auto"
                    options={{
                      style: {
                        base: {
                          fontSize: '28px',
                          color: 'black',
                          '::placeholder': {
                            color: 'gray',
                          },
                        },
                        invalid: {
                          color: '#9e2146',
                        },
                      },
                    }}
                  />
                </div>
                <div className="form-control w-[80%] mx-auto mt-5">
                  <label className="label">
                    <span className="label-text">Number of card</span>
                  </label>
                  <input type="text" placeholder="Card number" className="input input-bordered" required />
                </div>
                <div className="form-control w-[80%] mx-auto mt-3">
                  <label className="label">
                    <span className="label-text">Country of region</span>
                  </label>
                  <input type="text" placeholder="City" className="input input-bordered" required />
                </div>
              </div>
              <div className="form-control mt-3 w-[80%] mx-auto">
                <button className="btn bg-[#002172] my-3 text-white" type="submit"
                  disabled={!stripe || !clientSecret}>
                  Pay for: $ {price} {owner}
                </button>
                <p className="text-red-600">{error}</p>
                {transactionId && <p className="text-green-800"> Your transaction id: {transactionId}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <form onSubmit={handleSubmit}>
        <button className="btn btn-info my-3" type="submit"
          disabled={!stripe || !clientSecret}>
          Pay for: $ {price} {owner}
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && <p className="text-green-800"> Your transaction id: {transactionId}</p>}
      </form> */}
    </div>
  );
};

export default PaymentForm;
