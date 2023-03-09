import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Header from "./Header";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <>
      <Header />
      <div className="checkout">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/NAB/Subheader_PC_Wedding.jpg"
          alt="add banner"
        />
        {basket?.length == 0 ? (
          <div className="checkout__title">
            <h2>Your shopping basket in empty</h2>
            <p>You have to content in your basket</p>
          </div>
        ) : (
          <div>
            <h2>Your Shopping basket</h2>
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Checkout;
