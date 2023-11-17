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
                            <a href="tel:87073579707" >
                                <span>8 707 357-97-07</span>
                            </a>
                        </div>
                        <div className="telegram">
                            <a href="https://t.me/marso_su" >
                                <img className="telegram-img" src="https://marso.su/bitrix/components/aspro/social.info.mshop/images/svg/telegram.svg" />
                            </a>
                        </div>
                        {/* <div className="payment">
                            <img className="footer-img" src="../logo/footer.png" />
                        </div> */}
                        <div className="footer-text">
                            <p style={{ fontSize: 10 }}>2023 © MARSO. Все права защищены.</p>
                        </div>
                    </div>
                    {/* <div className="main-footer">
                        <div className="footer-links">
                            <Link to={"/#"} >
                                <p className="footer-link weight">Важное</p>
                            </Link>
                            <Link to={"/#"}>
                                <div style={{ lineHeight: 0.5 }}>
                                    <p className="footer-link">Клуб MARSO</p>
                                </div>
                            </Link>
                        </div>
                    </div> */}
                    <div className="main-footer company">
                        <div className="footer-links">
                            <Link to={"/#"} >
                                <p className="footer-link weight">Компания</p>
                            </Link>
                            <Link to={"/#"}>
                                <p className="footer-link">О компании</p>
                            </Link>
                            {/* <Link to={"/#"}>
                                <p className="footer-link">Новости</p>
                            </Link> */}
                            {/* <Link to={"/#"}>
                                <p className="footer-link">Маркетинг план</p>
                            </Link> */}
                            <Link to={"/#"}>
                                <p className="footer-link">Каталог продукции MARSO (часть 1)</p>
                            </Link>
                            <Link to={"/#"}>
                                <p className="footer-link">Каталог продукции MARSO (часть 2)</p>
                            </Link>
                        </div>
                    </div>
                    {/* <div className="main-footer">
                        <div className="footer-links">
                            <Link to={"/#"} >
                                <p className="footer-link weight">Информация</p>
                            </Link>
                            <Link to={"/#"}>
                                <p className="footer-link">Договор-Оферта</p>
                            </Link>
                            <Link to={"/#"}>
                                <p className="footer-link">Наши реквизиты</p>
                            </Link>
                            <Link to={"/#"}>
                                <p className="footer-link">Политика конфиденциальности</p>
                            </Link>
                        </div>
                    </div> */}
                    <div className="main-footer">
                        <div className="footer-links">
                            <Link to={"/#"} >
                                <p className="footer-link weight">Помощь</p>
                            </Link>
                            <Link to={"/#"}>
                                <p className="footer-link">Условия оплаты</p>
                            </Link>
                            <Link to={"/#"}>
                                <p className="footer-link">Условия доставки</p>
                            </Link>
                            {/* <Link to={"/#"}>
                                <p className="footer-link">Возврат и обмен</p>
                            </Link> */}
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