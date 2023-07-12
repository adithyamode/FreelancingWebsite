 import React, { useEffect, useState } from "react";
 import axios from "axios";
 import { CREATE_ORDER } from "../utils/constants";
 import { Elements } from "@stripe/react-stripe-js";
 import CheckoutForm from "../components/CheckoutForm";
 import { useRouter } from "next/router";

import { useCookies } from "react-cookie";
import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe("pk_test_51NOawfSD53WzCeXR8pTqIjYOk2Ub7QSDg2IQLNmZ1RV8Rn2XrytJANkCNX646CV2yvpznrlO3MLW5XMsaEoaKkvQ00a1HDaq3N");
 //const stripePromise = loadStripe("pk_test_51NP4YdSAsQ3SS2RcynwDc6tJXYRIPucynn5h9c1c4jQlspzxZnKHukRAqM9VFwv5LV5Y8Si6xl1EBI2m51IRo4fn00VsH1d5Ge");
//const stripePromise = loadStripe("pk_test_51NPJ0xSH7xDliB0AFJ2RaT7pPMBFFUG7sSVkoip8AuE7RIy7Ge10aqwFQEFcYqpYeI02NTaOJ1O1xXObdTaCEl3500h52NLoJ1");
//const stripePromise = loadStripe("pk_test_51NPLkWSIBQRwvMBJc4Bv9Dy9psAK9nCaYKZCOcS9pKUmdsy59BPB5sebyzD1xcLDw9QQXN7rSCwwEH6yFYSM7Q3s00WcfMDbs4");
const stripePromise = loadStripe("pk_test_51NPMGWSBZKfEL1mS34S8J8p01GGewqjXKKEKxM3b88D4jXdECnnLyJXJHJnu1XpEcjsuBuz7HJC5uIBMKBqlqcQ000blNi4uXr");
function checkout() {
  const [clientSecret, setClientSecret] = useState("");
   const router = useRouter();
  const [cookies]=useCookies();
  const { gigId } = router.query;
  useEffect(() => {
    const createOrder= async () => {
      try{ 
      const { data } = await axios.post(
        CREATE_ORDER,
        { gigId },
        {
          // headers:{ 
        //   Authorization: `Bearer ${cookies.jwt}`,
        //   },
        withCredentials:true,
         },
      );
     setClientSecret(data.clientSecret);
        }catch(err){
          console.log(err);
        }
    };
    if (gigId){ 
       createOrder();
    }
  }, [gigId]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  
  return (
    <div className="min-h-[80vh] max-w-full mx-20 flex flex-col gap-10 items-center">
      <h1 className="text-3xl">
        Please complete the payment to place the order.
      </h1>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
    
  );
}

export default checkout;


