import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { NavLink, useSearchParams } from "react-router-dom";
import './Payment.css';

const stripePromise = loadStripe("pk_test_51OHt7bH9TPzhm8dEdB9Q2V4YQQQbICLKTHpGYotiazevmSOH7MkDT1izKsWqAG2gD2Ktw1jO4vdQ4MUMfjDjZF5P00AVkDm1EA");

const Payment = () => {
    const [params] = useSearchParams();
    const queryParams = {
        price: params.get("price"),
        owner: params.get('owner'),
        requestId: params.get("requestId"),
        propertyId: params.get('propertyId'),
        property_img: params.get("property_img"),
        property_title: params.get("property_title"),
        property_location: params.get("property_location"),
        property_category: params.get('property_category'),
        property_status: params.get('property_status')
    }
    console.log(queryParams)
    console.log(queryParams)
    return (
        <div>
            <div className="paybgimg">
                <div className=" bg-[#000000B2]">
                    <div className=" max-w-screen-2xl mx-auto py-24">
                        <h2 className="text-6xl font-bold text-white font-serif">Payment</h2>
                        <div className="mt-2">
                            <NavLink to='/' className='navAfter relative font-medium text-base text-white mx-3'>Home</NavLink>
                            <NavLink to='/my-requests' className='navAfter relative font-medium text-base text-white mx-3 '>Payment</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <Elements stripe={stripePromise}>
                <PaymentForm queryParams={queryParams} />
            </Elements>
        </div>
    );
};

export default Payment;