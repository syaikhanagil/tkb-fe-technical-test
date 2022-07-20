import React from 'react';

interface IProductCard {
    thumb: any,
    title: string,
    price: number
}

const ProductCard = (props: IProductCard) => {
    const { thumb, title, price} = props;
    return (
        <div className="product-card">
            <div className="product-thumbnail">
                <img src={thumb} alt={title} />
            </div>
            <p className="product-title">{title}</p>
            <p className="product-price">{price}</p>
        </div>
    )
}

export default ProductCard;