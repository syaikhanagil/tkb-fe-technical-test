import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Icon from '../Icon';

const Cart = () => {
    const [total, setTotal] = useState(0)
    const items = useSelector((state: any) => state.cart.items);

    useEffect(() => {
        if (items.length > 0) {
            let ttl = 0;
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < items.length; i++) {
                ttl += items[i].price * items[i].qty;
                setTotal(ttl);
            }
        }
    }, [items]);

    return (
        <div className="cart-content">
            <div className="cart-header">Keranjang: {items.length}</div>
            {items.length < 1 && (
                <div className="no-item">
                    Belum Ada Barang Ditambahkan
                </div>
            )}
            {items.length > 0 && items.map((i: any, idx: any) => {
                return (
                    <div key={idx} className="cart-item">
                        <div className="row">
                            <div className="col-8">
                                <p className="item-name">{i.name}</p>
                                <p className="item-price">{`Rp. ${new Intl.NumberFormat().format(i.price)}`}</p>
                            </div>
                            <div className="col-4">
                                <div className="qty-container">
                                    <div className="qty-add">
                                        <Icon icon="plus" />
                                    </div>
                                    <span id="qty">{i.qty}</span>
                                    <div className="qty-minus">
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