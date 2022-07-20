import React from 'react';
import Main from '../../layout/Main';
import productDummy from '../../assets/dummy/product.json';
import ProductCard from '../../components/ProductCard';
import thumbnail from '../../assets/img/tkb.png';

class Home extends React.Component {
    render() {
        return (
            <Main activeMenu='home'>
                <div className="home-content">
                    <div className="product-list">
                        {productDummy.map((i: any, idx: any) => {
                            return (
                                <ProductCard key={idx} thumb={thumbnail} title={i.name} price={i.price} />
                            )
                        })}
                    </div>
                    <div className="cart-item">

                    </div>
                </div>
            </Main>
        )
    }
}

export default Home;