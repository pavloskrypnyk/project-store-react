import Card from '../card';
import CardSkeleton from '../card/skeleton';

import './index.css';

const CardList = ({products, isLoadCard, cart, onAddCart}) => {
    
    return (
        <>
            {/* Cards component */}
            {
                isLoadCard === true
                ? [...new Array(9)].map((_, index)=><CardSkeleton key={index} />) 
                : products.map((product) => <Card product={product} key={product.id} onAddCart={onAddCart} cart={cart}/>)
                }   
        </>
    )
}

export default CardList;

