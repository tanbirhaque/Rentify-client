import { CardNumberElement, CardExpiryElement, CardCvcElement, useElements, useStripe, } from "@stripe/react-stripe-js";
import { FaAffiliatetheme, FaCcAmazonPay, FaMoneyCheck } from "react-icons/fa";
import { SiKlarna } from "react-icons/si";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import animation from "./Animation.json";
import Lottie from "lottie-react";

const PaymentForm = ({ queryParams }) => {
  const [error, setError] = useState();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { price, requestId, propertyId, owner, property_img, property_title, property_location, property_category, property_status} = queryParams;

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price, requestId, propertyId, owner })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, price, requestId, propertyId, owner]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement);

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
      setError("");
    }
    // confirm error
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        // save the payment in the database
        const payment = {
          paymentUser: user?.email,
          propertyId,
          requestId,
          price,
          owner,
          property_img,
          property_title,
          property_location, 
          property_category,
          property_status,
          date: new Date().toLocaleDateString("en-GB"),
          transactionId: paymentIntent.id,
        };
        const res = axiosSecure.post("/payments", payment);
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
    <div className="px-4 md:px-10">
      {/* new from added and design by sojib */}
      {/* redesign and make responsive by Rana */}
      <div>
        <div className=" flex flex-col md:flex-row justify-center items-center my-10">
          <div className="bg-gray-800 w-full md:w-[440px] h-auto md:h-[780px] rounded-t-lg md:rounded-r-none md:rounded-l-lg">
            <div className="ml-4 md:mt-10 mt-5">
              <div className="flex mb-2 items-center">
                <img
                  className="max-w-[60px] md:w-full"
                  src="https://i.ibb.co/3kqdMYy/logo-white.png"
                  alt="Logo"
                />
                <h4 className="font-bold poppins-font text-2xl lg:text-[34px] text-white ml-2">
                  Renti<span className="text-[#e33226]">fy</span>
                </h4>
              </div>
              <h2 className="text-white font-bold mb-1 md:text-xl lg:text-3xl">
                <span className="text-3xl font-bold">P</span>roperty
              </h2>
              <p className="my-2 text-white text-sm md:text-base lg:text-lg">
                {property_title}
              </p>
              <p className="text-2xl font-bold text-white">$ {price}</p>
              <div className="pr-4">
                <img
                  className="w-full rounded mt-2 h-[260px]"
                  src={property_img}
                  alt="Property"
                />
              </div>
              <p className="text-sm text-center mt-5 text-gray-50">
                Powered by stripe <span className="text-white">|</span>{" "}
                <span className="text-white">Terms & Conditions</span>
              </p>
              <div className="lg:-mt-20">
                <Lottie animationData={animation} />
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-b-lg md:rounded-l-none md:rounded-r-lg w-full md:w-[580px] h-auto md:h-[780px]">
            <form className="card-body xl:mt-6" onSubmit={handleSubmit}>
              <div className="w-[80%] mx-auto">
                <h2 className="text-3xl font-bold">Pay For Properties</h2>
              </div>
              <div className="form-control w-[80%] mx-auto">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder={user?.email}
                  className="input input-bordered"
                  readOnly
                />
              </div>
              <div className="form-control w-[80%] mx-auto">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="Phone Number"
                  className="input input-bordered"
                />
              </div>
              <div className="">
                <label className="label w-[80%] mx-auto">
                  <span className="text-xl font-bold">Payment Method</span>
                </label>
                <div className="flex flex-wrap gap-1 justify-evenly items-center w-[80%] mx-auto">
                  <div className="border-2 p-2 rounded-lg w-[100px]">
                    <FaMoneyCheck className="text-xl font-bold"></FaMoneyCheck>
                    <span className="mt-1">Card</span>
                  </div>
                  <div className="border-2 p-2 rounded-lg w-[100px]">
                    <FaCcAmazonPay className="text-xl font-bold"></FaCcAmazonPay>
                    <span className="mt-1">Apple Pay</span>
                  </div>
                  <div className="border-2 p-2 rounded-lg w-[100px]">
                    <SiKlarna className="text-xl font-bold"></SiKlarna>
                    <span className="mt-1">Klarna</span>
                  </div>
                  <div className="border-2 p-2 rounded-lg w-[100px]">
                    <FaAffiliatetheme className="text-xl font-bold"></FaAffiliatetheme>
                    <span className="mt-1">Affirm</span>
                  </div>
                </div>
                <div className="form-control w-[80%] mx-auto">
                  <label className="label">
                    <span className="text-xl font-bold pt-3">
                      Card Information
                    </span>
                  </label>
                  <div className="grid grid-cols gap-2 border p-3 bg-white rounded">
                    <div>
                      <label className="label">
                        <span className="text-black font-semibold italic">
                          Card Number
                        </span>
                      </label>
                      <CardNumberElement
                        options={{
                          style: {
                            base: {
                              fontSize: "16px",
                              color: "black",
                              "::placeholder": {
                                color: "gray",
                              },
                            },
                          },
                          placeholder: "Input your card number",
                        }}
                      />
                    </div>
                    <div>
                      <label className="label">
                        <span className="text-black font-semibold italic">
                          Expire Date
                        </span>
                      </label>
                      <CardExpiryElement
                        options={{
                          style: {
                            base: {
                              fontSize: "16px",
                              color: "black",
                              "::placeholder": {
                                color: "gray",
                              },
                            },
                          },
                        }}
                      />
                    </div>
                    <div>
                      <label className="label">
                        <span className="text-black font-semibold italic">
                          CVC
                        </span>
                      </label>
                      <CardCvcElement
                        options={{
                          style: {
                            base: {
                              fontSize: "16px",
                              color: "black",
                              "::placeholder": {
                                color: "gray",
                              },
                            },
                          },
                          placeholder: "Input card cvc",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-control mt-2 xl:mt-6 w-[80%] mx-auto">
                <button
                  className="btn bg-[#002172] text-white w-full"
                  type="submit"
                  disabled={!stripe || !clientSecret}
                >
                  Pay for: $ {price} {owner}
                </button>
                <p className="text-red-600">{error}</p>
                {transactionId && (
                  <p className="text-green-800">
                    Your transaction id: {transactionId}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;