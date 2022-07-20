import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartItem } from '../../redux/reducers/cart';

interface IProductCard {
    productId: string,
    thumb: any,
    title: string,
    price: number
}

const ProductCard = (props: IProductCard) => {
    const { productId, thumb, title, price} = props;
    const cartItems = useSelector((state: any) => state.cart.items);
    const dispatch = useDispatch();
    
    const addToCart = (id: string) => {
        const item = {
            id: productId,
            name: title,
            qty: 1,
            price
        }
        const items = [...cartItems, item]
        dispatch(updateCartItem(items));
    }

    return (
        <div className="product-card" onClick={() => addToCart(productId)}>
            <div className="product-thumbnail">
                <img src={thumb} alt={title} />
            </div>
            <p className="product-title">{title}</p>
            <p className="product-price">{`Rp ${new Intl.NumberFormat().format(price)}`}</p>
        </div>
    )
}

export default ProductCard;