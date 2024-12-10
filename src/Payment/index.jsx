import React from "react";
import Product from "../Product";

const Payment = () => {
  const handlePayment = () => {
    const options = {
      key: "rzp_test_fOsTScdkbhACcC", // Replace with your Razorpay Key ID
      amount: 50000, // Amount in paise (₹500 = 50000 paise)
      currency: "INR",
      name: "Awesome T-Shirt",
      description: "Sample Product",
      image: "https://example.com/logo.png", // Replace with your logo URL
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        console.log("Payment Response:", response);
      },
      prefill: {
        name: "John Doe",
        email: "johndoe@example.com",
        contact: "9876543210",
      },
      theme: {
        color: "#007BFF",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <Product handlePayment={handlePayment} />
    </div>
  );
};

export default Payment;

// Ensure you import Product from "./Product.js"

