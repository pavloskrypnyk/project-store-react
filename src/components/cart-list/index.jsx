import { useSelector } from "react-redux";
import CartItem from "../cart-item";
import "./index.css";

const CartList = ({ onOpenCart }) => {
  const products = useSelector((state) => state.cart.cart);
  const { totalPrice } = useSelector((state) => state.cart);

  return (
    <>
      <div className="os-cart">
        <div className="cart-content">
          <div className="cart-close-button" onClick={() => onOpenCart(false)}>
            <i className="bi bi-x-lg"></i>
          </div>

          <div className="cart-list">
            {products.map((product) => (
              <CartItem {...product} key={product.id} />
            ))}
          </div>

          <div className="cart-total-oreder">
            <div className="total-order-title">Total:</div>
            <div className="tottal-order-price">{totalPrice}</div>
            <div className="total-order-valute">UAH</div>
          </div>
          <button className="cart-order-button">ORDER</button>
        </div>
      </div>
    </>
  );
};

export default CartList;
