import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {

    const items = useSelector((state: any) => state.cart.items);

    return (
        <div className="cart-content">
            <div className="cart-header">Keranjang: {items.length}</div>
            {items.length < 1 && (
                <div className="no-item">
                    Belum Ada Barang Ditambahkan
                </div>
            )}
            {items.length > 0 && (
                <div className="cart-item">Item</div>
            )}
            <div className="cart-footer text-center">
                <div className="row align-items-center">
                    <div className="col-4 border-end">
                        <div className="block">
                            <i data-feather="repeat" />
                        </div>
                        <span className="block">Split Bill</span>
                    </div>
                    <div className="col-8">
                        <div className="charge">
                            <span>Bayar</span>
                            <span>{items.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;