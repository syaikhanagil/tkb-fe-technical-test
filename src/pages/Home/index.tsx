import React, { useEffect, useState } from 'react';
import Main from '../../layout/Main';
import ProductCard from '../../components/ProductCard';
import thumbnail from '../../assets/img/tkb.png';
import Cart from '../../components/Cart';
import productDummy from '../../assets/dummy/product.json';

const Home = () => {
    const [keyword, setKeyword] = useState("");
    const [productList, setProductList] = useState<any>([]);

    useEffect(() => {
        if (keyword.length > 0) {
            const products = productDummy.filter((match: any) => {
                const regex = new RegExp(`${keyword}`, 'gi');
                return match.name.match(regex);
            });
            setTimeout(() => {
                setProductList(products);
            }, 250);
        } else {
            setProductList(productDummy);
        }
    }, [keyword]);


    return (
        <Main activeMenu='home'>
            <div className="home-content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <div className="product-search">
                                <input className="search-input" type="text" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setKeyword(event.target.value)} value={keyword} placeholder="Cari produk" />
                            </div>
                            <div className="category-list">
                                <div className="category-item">All</div>
                                <div className="category-item">Food</div>
                                <div className="category-item">Coffee</div>
                                <div className="category-item">Non-Coffee</div>
                            </div>
                            <div className="product-list">
                                {productList.map((i: any, idx: any) => {
                                    return (
                                        <ProductCard key={idx} thumb={thumbnail} title={i.name} price={i.price} />
                                    )
                                })}
                            </div>

                        </div>
                        <div className="col-12 col-md-4">
                            <div className="cart-container">
                                <Cart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Home;