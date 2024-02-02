import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { useSearchParams } from "react-router-dom";

const stripePromise = loadStripe("pk_test_51OHt7bH9TPzhm8dEdB9Q2V4YQQQbICLKTHpGYotiazevmSOH7MkDT1izKsWqAG2gD2Ktw1jO4vdQ4MUMfjDjZF5P00AVkDm1EA");

const Payment = () => {
    const [params] = useSearchParams();
    const queryParams = {
        price: params.get("price"),
        owner: params.get('owner'),
        requestId: params.get("requestId"),
        propertyId: params.get('propertyId'),
        property_status: params.get('property_status')
    }
    return (
        <div>
            <Elements stripe={stripePromise}>
                <PaymentForm queryParams={queryParams} />
            </Elements>
        </div>
    );
};

export default Payment;