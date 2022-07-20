import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartItem } from '../../redux/reducers/cart';
import Icon from '../Icon';

const Cart = () => {
    const [total, setTotal] = useState(0)
    const cartItems = useSelector((state: any) => state.cart.items);
    const dispatch = useDispatch();

    useEffect(() => {
        if (cartItems.length > 0) {
            let ttl = 0;
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < cartItems.length; i++) {
                ttl += cartItems[i].price * cartItems[i].qty;
                setTotal(ttl);
            }
        }
    }, [cartItems]);

    const addQty = (productId: string) => {
        const existingItem = cartItems.filter((item: any) => {
            return item.id === productId;
        })
        if (existingItem.length > 0) {
            const currentItem = cartItems.filter((item: any) => item.id !== productId);
            const updateItem = {
                id: productId,
                name: existingItem[0].name,
                qty: existingItem[0].qty + 1,
                price: existingItem[0].price
            }
            const items = [updateItem, ...currentItem];
            dispatch(updateCartItem(items));
        }
    }

    const minQty = (productId: string) => {
        const existingItem = cartItems.filter((item: any) => {
            return item.id === productId;
        })
        if (existingItem.length > 0 && existingItem[0].qty > 1) {
            const currentItem = cartItems.filter((item: any) => item.id !== productId);
            const updateItem = {
                id: productId,
                name: existingItem[0].name,
                qty: existingItem[0].qty - 1,
                price: existingItem[0].price
            }
            const items = [updateItem, ...currentItem];
            dispatch(updateCartItem(items));
        }
    }

    return (
        <div className="cart-content">
            <div className="cart-header">Keranjang: {cartItems.length}</div>
            {cartItems.length < 1 && (
                <div className="no-item">
                    Belum Ada Barang Ditambahkan
                </div>
            )}
            {cartItems.length > 0 && cartItems.map((i: any, idx: any) => {
                return (
                    <div key={idx} className="cart-item">
                        <div className="row">
                            <div className="col-8">
                                <p className="item-name">{i.name}</p>
                                <p className="item-price">{`Rp. ${new Intl.NumberFormat().format(i.price)}`}</p>
                            </div>
                            <div className="col-4">
                                <div className="qty-container">
                                    <div className="qty-add" onClick={() => addQty(i.id)}>
                                        <Icon icon="plus" />
                                    </div>
                                    <span id="qty">{i.qty}</span>
                                    <div className="qty-minus" onClick={() => minQty(i.id)}>
                                        <Icon icon="minus" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
            <div className="cart-footer text-center">
                <div className="row align-items-center">
                    <div className="col-4 border-end">
                        <div className="block">
                            <Icon icon="repeat" />
                        </div>
                        <span className="block">Split Bill</span>
                    </div>
                    <div className="col-8">
                        <div className="charge">
                            <span>Bayar </span>
                            <span id="total">{`Rp.  ${new Intl.NumberFormat().format(total)}`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;