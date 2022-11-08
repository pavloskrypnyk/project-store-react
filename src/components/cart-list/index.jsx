import { useSelector } from "react-redux";
import CartItem from "../cart-item";
import './index.css';

const CartList = ({onOpenCart}) => {
    const products = useSelector(state => state.cart.cart)
    const {totalPrice} = useSelector(state => state.cart)
    
    return (
          <>           
            <div className="page__cart">    
                <div className="cart__container">
                    <div className="cart__close-button" onClick={() => onOpenCart(false)}>
                        <div className="close-button__container">
                        <i className="bi bi-x-lg"></i>
                        </div>
                    </div>
                    <div className="cart__list">
                        {products.map((product) => <CartItem {...product} key={product.id}/>)}
                    </div>                    
                    
                    <div className="cart__total-oreder">
                        <div className="total-order__container">
                            <div className="total-order__title">Total:</div>
                            <div className="tottal-order__total-price">{totalPrice}</div>
                            <div className="total-order__valute">UAH</div>
                        </div>
                    </div>
                    <div className="cart__order-button">
                        <div className="order-button__title">ORDER</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartList