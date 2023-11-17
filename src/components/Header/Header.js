import React, { useState } from "react"
import "./Header.css"
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";



export const Header = ({ perfumes, searchResult, setSearchResult }) => {

    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');
    const [showSearchResults, setShowSearchResults] = useState(true);

    const searchInput = (event) => {
        const value = event.target.value.toLowerCase(); // Convert input value to lowercase
        setSearchTerm(event.target.value); // Keep the original (mixed case) value for display

        // Concatenate the results from all three arrays
        const result = [
            ...perfumes.men.filter(item => item.name.toLowerCase().includes(value)),
            ...perfumes.women.filter(item => item.name.toLowerCase().includes(value)),
            ...perfumes.unisex.filter(item => item.name.toLowerCase().includes(value))
        ];

        setSearchResult(result);

        if (value == "") {
            setSearchResult([])
        }

        setShowSearchResults(true)

    }

    const handleAllResultsClick = () => {
        navigate('/catalog');
        setSearchTerm('');
        setShowSearchResults(false);
        console.log(searchResult);

    };

    const handleBackgroundClick = () => {
        setSearchTerm('');
        setShowSearchResults(false);
    }


    return (
        <div onClick={handleBackgroundClick}>
            <header>
                <div className="call-block-phone">
                    <span className="icon-phone"></span>
                    <a href="tel:87073579707" >
                        <span>8 707 357-97-07</span>
                    </a>
                </div>
                <nav>

                    <div className="logo-block">
                        <Link to={"/"}>
                            <img className="logo-img" src="../logo/marso.jpg" />
                        </Link>
                    </div>
                    <div className="call-block">
                        <span className="icon-phone"></span>
                        <a href="tel:87073579707" >
                            <span>8 707 357-97-07</span>
                        </a>
                    </div>
                    <div className="search-block">
                        <input className="search-input" type="text" value={searchTerm} placeholder="Поиск по сайту" onChange={searchInput} />
                        <input className="search-btn" type="submit" onClick={handleAllResultsClick} />
                        <div className="search-results">
                            {searchResult.map((item, index) => {
                                if (index < 5) { // Check if the index is less than 5
                                    return (
                                        <div className="search-product" key={item.id} style={{ display: showSearchResults ? "flex" : "none" }}>
                                            <div className="result-img">
                                                <img width={50} src={item.img} alt={item.name} />
                                            </div>
                                            <div className="result-name">
                                                <Link to={`/perfume/${item.id}`}>
                                                    <p className="all-products">{item.name}</p>
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                            {searchResult.length > 5 && (
                                <div className="search-product" style={{ display: showSearchResults ? "flex" : "none" }}>
                                    <div className="result-name">
                                        <p className="all-products" onClick={handleAllResultsClick}>Все результаты</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
                <div className="perfume-links">
                    <div className="perfume-link">
                        <div className="link">
                            <Link to={'/women'}>
                                <h5 className="perfume-link-text">ЖЕНСКИЙ ПАРФЮМ</h5>
                            </Link>
                        </div>
                    </div>
                    <div className="perfume-link">
                        <div className="link">
                            <Link to={'/men'}>
                                <h5 className="perfume-link-text">МУЖСКОЙ ПАРФЮМ</h5>
                            </Link>
                        </div>

                    </div>
                    <div className="perfume-link">
                        <div className="link">
                            <Link to={'/unisex'}>
                                <h5 className="perfume-link-text">UNISEX ПАРФЮМ</h5>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
        </div>

    )
}
