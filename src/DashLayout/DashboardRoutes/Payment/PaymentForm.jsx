import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from '../../../Hooks/useAuth';
import Swal from "sweetalert2";

const PaymentForm = ({queryParams,}) => {
  const [error, setError] = useState();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { price, requestId, propertyId, owner } = queryParams;

  useEffect( () =>{
    axiosSecure.post('/create-payment-intent',{ price, requestId, propertyId, owner })
    .then(res=>{
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
    })
  },[axiosSecure, price, requestId, propertyId, owner]);

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
    if(confirmError){
        console.log('confirm error');
    }
    else{
        console.log('payment intent', paymentIntent);
        if(paymentIntent.status === "succeeded"){
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
            if(res){
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
    <div className="p-32">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-info my-3" type="submit" 
        disabled={!stripe || !clientSecret}>
          Pay for: $ {price} {owner}
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && <p className="text-green-800"> Your transaction id: {transactionId}</p>}
      </form>
    </div>
  );
};

export default PaymentForm;
