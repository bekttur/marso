import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom";



export const Footer = () => {
    return (
        <footer>
            <div className="block">
                <div className="footer-block">
                    <div className="contact-footer">
                        <div className="call-footer-block">
                            <span className="icon-phone"></span>
                            <a href="tel:87782433318">
                                <span>8 778 243-33-18</span>
                            </a>
                        </div>
                        <div className="telegram">
                            <a href="https://t.me/marso_su" >
                                <img className="telegram-img" src="https://marso.su/bitrix/components/aspro/social.info.mshop/images/svg/telegram.svg" />
                            </a>
                        </div>
                        <div className="footer-text">
                            <p style={{ fontSize: 10 }}>2023 © MARSO. Все права защищены.</p>
                        </div>
                    </div>
                    <div className="main-footer company">
                        <div className="footer-links">
                            <Link to={"/company"} >
                                <p className="footer-link weight">Компания</p>
                            </Link>
                            <Link to={"/company"}>
                                <p className="footer-link">О компании</p>
                            </Link>
                            <a target="_blank" href="https://marso.su/upload/catalog.pdf">
                                <p className="footer-link">Каталог продукции MARSO (часть 1)</p>
                            </a>
                            <a target="_blank" href="https://marso.su/upload/catalog_2.pdf">
                                <p className="footer-link">Каталог продукции MARSO (часть 2)</p>
                            </a>
                        </div>
                    </div>
                    
                    <div className="main-footer">
                        <div className="footer-links">
                            <p className="footer-link weight">Помощь</p>
                            <Link to={"/payment"}>
                                <p className="footer-link">Условия оплаты</p>
                            </Link>
                            <Link to={"/#"}>
                                <p className="footer-link">Условия доставки</p>
                            </Link>
                            <Link to={"/#"}>
                                <p className="footer-link">Сертификаты</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}