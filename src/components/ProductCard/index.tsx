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
        const existingItem = cartItems.filter((item: any) => {
            return item.id === productId;
        })
        if (existingItem.length > 0) {
            const currentItem = cartItems.filter((item: any) => item.id !== productId);
            const updateItem = {
                id: productId,
                name: title,
                qty: existingItem[0].qty + 1,
                price
            }
            const items = [updateItem, ...currentItem];
            dispatch(updateCartItem(items));

        } else {
            const item = {
                id: productId,
                name: title,
                qty: 1,
                price
            }
            const items = [...cartItems, item]
            dispatch(updateCartItem(items));
        }
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