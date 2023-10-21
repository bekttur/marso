import React, { useEffect, useState } from "react";
import "./Basket.css";
import { Link } from "react-router-dom";

export const Basket = ({ basket, setBasket }) => {

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalPrice(basket.reduce((acc, product) => acc + product.price * product.count, 0));
    }, [basket]);

    const [count, setCount] = useState(basket.length);
    const [productText, setProductText] = useState("товар");

    useEffect(() => {
        if (count === 1) {
            setProductText("товар");
        } else if (count > 1 && count <= 4) {
            setProductText("товара");
        } else if (count > 4) {
            setProductText("товаров");
        }
    }, [count]);

    const handleIncrement = (id) => {
        const updatedBasket = basket.map((item) => {
            if (id === item.id) {
                return { ...item, count: item.count + 1 };
            }
            return item;
        });

        setBasket(updatedBasket);

        console.log(updatedBasket);
    };

    const handleDecrement = (id) => {
        const updatedBasket = basket.map((item) => {
            if (id === item.id && item.count > 1) {
                return { ...item, count: item.count - 1 };
            }
            return item;
        });

        setBasket(updatedBasket);

        console.log(updatedBasket);
    };


    const clearBtn = () => {
        setBasket([])
        localStorage.setItem('basket', JSON.stringify(basket));

    }

    const deleteProduct = (id) => {
        const updatedBasket = basket.filter(item => item.id !== id);

        setCount(updatedBasket.length);
        setBasket(updatedBasket);

        console.log(updatedBasket);
    }




    return (
        <div className="block">
            <h1>Корзина</h1>
            {basket.length !== 0 ? (
                <div className="basket-block">
                    <div className="basket-nav">
                        <div>
                            <p className="basket-text">В корзине {count} {productText} </p>
                        </div>
                        <div className="clear">
                            <button className="clear-btn" onClick={clearBtn}>Очистить</button>
                        </div>
                    </div>
                    <div className="basket-products">
                        {basket.map((item) => {
                            return (
                                <div className="basket-card" key={item.id}>
                                    <div className="basket-img-block">
                                        <img className="basket-product-img" src={item.img} alt={item.name} />
                                    </div>
                                    <div className="basket-title">
                                        <h4>{item.name}</h4>
                                    </div>
                                    <div className="basket-info-block">
                                        <div className="basket-price-block">
                                            <p style={{ fontWeight: 600 }}>2 365 руб.</p>
                                            <p style={{ fontSize: 13, color: "#a1a1a1" }}>цена за 1 шт</p>
                                        </div>
                                        <div className="counter">
                                            <div className="basket-btns">
                                                <button className="handle-btn" onClick={() => handleDecrement(item.id)}>
                                                    -
                                                </button>
                                                <div className="count">
                                                    <span>{item.count}</span>
                                                </div>
                                                <button className="handle-btn" onClick={() => handleIncrement(item.id)}>
                                                    +
                                                </button>
                                            </div>
                                            <span style={{ fontSize: "0.7rem", color: "#a1a1a1" }}>шт</span>
                                        </div>
                                        <div className="total-product-price">
                                            <p style={{ fontWeight: 600 }}>{item.count * item.price} руб.</p>
                                        </div>
                                    </div>
                                    <div className="product-out-block">
                                        <button className="product-out" onClick={() => { deleteProduct(item.id) }}></button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="total-basket">
                        <div className="total-products">
                            <div className="total">
                                <p>Итого:</p>
                            </div>
                            <div className="total-price">
                                <h2 className="totalPrice">{totalPrice} руб.</h2>
                            </div>
                            <div className="payment">
                                <button className="payment-btn">Оформить заказ</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="basket-null">
                    <div className="basket-null-img">
                    </div>
                    <div className="basket-null-text">
                        <p style={{ fontSize: 36, color: "#bababa", marginBottom: 42 }}>Ваша корзина пуста</p>
                        <p><span><Link to={"/"} style={{ color: "#009897" }}>Нажмите здесь</Link></span>, чтобы продолжить покупки</p>
                    </div>
                </div>
            )}

        </div>
    );
};
