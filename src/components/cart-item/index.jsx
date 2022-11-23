import { useDispatch } from "react-redux";

import {
  addProductToCart,
  minusCount,
  removeProductFromCart,
} from "../../redux/slices/cart-slice";
import "./index.css";

const CartItem = ({ id, title, price, images, count }) => {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(
      addProductToCart({
        id,
      })
    );
  };

  const onClickMinus = () => {
    if (count > 1) {
      dispatch(minusCount(id));
    }
  };

  const onClickRemove = () => {
    dispatch(removeProductFromCart(id));
  };
  return (
    <>
      <div className="cart-item-content">
        <div
          className="cart-item-image"
          style={{ backgroundImage: `url(${images[0]})` }}
        ></div>
        <div className="cart-item-title">{title}</div>
        <div className="cart-item-circle">
          <div className="circle-button remove" onClick={onClickMinus}>
            <i className="bi bi-dash-circle"></i>
          </div>
          <div className="circle-count">{count}</div>
          <div className="circle-button add" onClick={onClickPlus}>
            <i className="bi bi-plus-circle"></i>
          </div>
        </div>
        <div className="cart-item-price">
          <div className="price">{price * count}</div>
          <div className="valute">UAH</div>
        </div>
        <div className="cart-item-delete-item" onClick={onClickRemove}>
          <i className="bi bi-trash"></i>
        </div>
      </div>
    </>
  );
};

export default CartItem;
