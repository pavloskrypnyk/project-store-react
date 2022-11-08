import { useDispatch } from "react-redux";

import { addProductToCart, minusCount, removeProductFromCart } from "../../redux/slices/cart-slice";
import './index.css';

const CartItem = ({id, title, price, images, count}) => {
  const dispatch = useDispatch()  
  const onClickPlus = () => {
      dispatch(addProductToCart({
        id
      }))
    };
  
  

  const onClickMinus = () => {
    if(count > 1){
      dispatch(minusCount(id))
    }
  }

  const onClickRemove = () => {
    dispatch(removeProductFromCart(id))
  }
    return (
        <>
         <div className="cart-item__container">
                <div className="cart-item__image" style={{"backgroundImage": `url(${images[0]})`}}></div>
                <div className="cart-item__title">{title}</div>
                <div className="cart-item__circle">
                    <div className="circle__container">
                    <div className="circle__button remove" onClick={onClickMinus}>
                        <i className="bi bi-dash-circle"></i>
                    </div>
                    <div className="circle__count">{count}</div>
                    <div className="circle__button add" onClick={onClickPlus}>
                        <i className="bi bi-plus-circle"></i>
                    </div>
                    </div>
                </div>
                <div className="cart-item__total-item">
                    <div className="total-item__container">
                    <div className="total-item__price">{price * count}</div>
                    <div className="total-item__valute">UAH</div>
                    </div>
                </div>
                <div className="cart-item__delete-item" onClick={onClickRemove}>
                    <i className="bi bi-trash"></i>
                </div>
            </div>

        </>
    )
}

export default CartItem