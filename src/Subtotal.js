import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
import { getBasketTotal } from "./StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <p>
        Subtotal{basket.length} items:{" "}
        <strong>
          <CurrencyFormat
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
        </strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This Order Contains a gift
      </small>

      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
