import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../redux/slices/cart-slice';
import './index.css';

const Card = ({product}) => {
    const {id, images, rating, price, title, category} = product;
    const dispatch = useDispatch();
    const onClickAddProduct = () => {
        const item ={
            id,
            title,
            price,
            images
        }

        dispatch(addProductToCart(item))
   }
    
    return (
        <div className="card-item__content">
            <div style={{"backgroundImage": `url(${images[0]})`}} alt="product" className="card-item__img"></div>
            <div className="card-item__rating-pice-content">
                <div className="rating__content">
                    <div className="rating-text">{rating}</div>
                    <div className="rating-icon">
                        <i className="bi bi-star"></i>
                    </div>
                </div>
                <div className="price__content">
                    <div className="price-text">{price}</div>
                    <div className="price-valute">UAH</div>
                </div>
            </div>
            <div className="card-item__title">
                {title}
            </div>
            <div className="card-item__description">
                {category}
            </div>
            <div className="card-item__button" onClick={()=>onClickAddProduct()}>
                <div>ADD TO CART</div>
            </div>
        </div>
    )
}

export default Card


