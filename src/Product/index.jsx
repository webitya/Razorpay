import React from "react";

const Product = ({ handlePayment }) => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Sample Product</h1>
      <p>Product Name: Awesome T-Shirt</p>
      <p>Price: ₹500</p>
      <button
        onClick={handlePayment}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Buy Now
      </button>
    </div>
  );
};

export default Product;
