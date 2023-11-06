/* eslint-disable react/jsx-no-target-blank */

import { NavLink } from "react-router-dom";

const HomePage = () => {

    return (
        <div>
            <div className="wrapper fixed__footer">
                {/* Start Header Style */}
                <header id="header" className="htc-header">
                    {/* Start Mainmenu Area */}
                    <div
                        id="sticky-header-with-topbar"
                        className="mainmenu__area sticky__header"
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2 col-lg-2 col-sm-3 col-xs-3">
                                    <div className="logo">
                                        <a href="index.html">
                                            <img src="images/logo/uniqlo.png" alt="logo" />
                                        </a>
                                    </div>
                                </div>
                                {/* Start MAinmenu Ares */}
                                <div className="col-md-8 col-lg-8 col-sm-6 col-xs-6">
                                    <nav className="mainmenu__nav hidden-xs hidden-sm">
                                        <ul className="main__menu" >
                                            <li className="drop" >
                                                <a >Home</a>
                                            </li>
                                            {/* Nam */}
                                            <li className="drop">
                                                <a href="about.html" >Nam</a>
                                                <ul className="dropdown mega_dropdown">
                                                    {/* Start Single Mega MEnu */}
                                                    <li>
                                                        <a className="mega__title" href="shop.html">
                                                            Áo
                                                        </a>
                                                        <ul className="mega__item">
                                                            <li>
                                                                <a href="shop.html">Tất Cả Áo</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-sidebar.html">Áo Sơ mi</a>
                                                            </li>
                                                            <li>
                                                                <a href="cart.html">Áo Thun</a>
                                                            </li>
                                                            <li>
                                                                <a href="checkout.html">Áo Khoác</a>
                                                            </li>
                                                            <li>
                                                                <a href="wishlist.html">Áo Khoác</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    {/* End Single Mega MEnu */}
                                                    {/* Start Single Mega MEnu */}
                                                    <li>
                                                        <a className="mega__title" href="shop.html">
                                                            Quần
                                                        </a>
                                                        <ul className="mega__item">
                                                            <li>
                                                                <a href="#">Tất Cả Quần</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Quần Jean</a>
                                                            </li>
                                                            <li>
                                                                <a href="wishlist.html">Quần Tây</a>
                                                            </li>
                                                            <li>
                                                                <a href="cart.html">Quần Short</a>
                                                            </li>
                                                            <li>
                                                                <a href="checkout.html">Quần Nỉ</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    {/* End Single Mega MEnu */}
                                                    {/* Start Single Mega MEnu */}
                                                    <li>
                                                        <a className="mega__title" href="shop.html">
                                                            Phụ Kiện
                                                        </a>
                                                        <ul className="mega__item">
                                                            <li>
                                                                <a href="#">Mũ</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Túi</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    {/* End Single Mega MEnu */}
                                                </ul>
                                            </li>

                                            {/* Nữ */}
                                            <li className="drop">
                                                <a href="about.html">Nữ</a>
                                                <ul className="dropdown mega_dropdown">
                                                    {/* Start Single Mega MEnu */}
                                                    <li>
                                                        <a className="mega__title" href="shop.html">
                                                            Áo
                                                        </a>
                                                        <ul className="mega__item">
                                                            <li>
                                                                <a href="shop.html">Tất Cả Áo</a>
                                                            </li>
                                                            <li>
                                                                <a href="shop-sidebar.html">Áo Sơ mi</a>
                                                            </li>
                                                            <li>
                                                                <a href="cart.html">Áo Thun</a>
                                                            </li>
                                                            <li>
                                                                <a href="checkout.html">Áo Len</a>
                                                            </li>
                                                            <li>
                                                                <a href="wishlist.html">Áo Hoodie</a>
                                                            </li>
                                                            <li>
                                                                <a href="wishlist.html">Áo Lông Cừu</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    {/* End Single Mega MEnu */}
                                                    {/* Start Single Mega MEnu */}
                                                    <li>
                                                        <a className="mega__title" href="shop.html">
                                                            Quần
                                                        </a>
                                                        <ul className="mega__item">
                                                            <li>
                                                                <a href="#">Tất Cả Quần</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Quần Jean</a>
                                                            </li>
                                                            <li>
                                                                <a href="wishlist.html">Quần Tây</a>
                                                            </li>
                                                            <li>
                                                                <a href="cart.html">Quần Ống Rộng</a>
                                                            </li>
                                                            <li>
                                                                <a href="checkout.html">Quần Nỉ</a>
                                                            </li>
                                                            <li>
                                                                <a href="checkout.html">Quần Legging</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a className="mega__title" href="shop.html">
                                                            Đầm & Chân Váy
                                                        </a>
                                                        <ul className="mega__item">
                                                            <li>
                                                                <a href="#">Váy</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Đầm</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    {/* End Single Mega MEnu */}
                                                    {/* Start Single Mega MEnu */}
                                                    <li>
                                                        <a className="mega__title" href="shop.html">
                                                            Phụ Kiện
                                                        </a>
                                                        <ul className="mega__item">
                                                            <li>
                                                                <a href="#">Túi</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Mũ</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Kính</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Giày</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    {/* End Single Mega MEnu */}
                                                </ul>
                                            </li>

                                            {/* sidebar */}
                                            <li>
                                                <a href="shop-sidebar.html">Shop Sidebar</a>
                                            </li>

                                            <li>
                                                <a href="contact.html">contact</a>
                                            </li>
                                        </ul>
                                    </nav>

                                </div>
                                {/* End MAinmenu Ares */}
                                <div className="col-md-2 col-sm-4 col-xs-3">
                                    <ul className="menu-extra">
                                        <li className="search search__open hidden-xs" >
                                            <span className="ti-search" />
                                        </li>
                                        {/* <nav className="navbar navbar-light bg-light">
                                                <div className="container-fluid">
                                                    <form className="d-flex">
                                                        <input className="form-control me-2" type="search" 
                                                        placeholder="Search" aria-label="Search"/>
                                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                                    </form>
                                                </div>
                                            </nav> */}
                                        <NavLink to={`/login`}>
                                            <li>
                                                <a href="login-register.html">
                                                    <span className="ti-user col-md-2" />
                                                </a>
                                            </li>
                                        </NavLink>
                                        <NavLink to={`/cart`}>
                                            <li className="cart__menu">
                                                <span className="ti-shopping-cart col-md-2" />
                                            </li>
                                        </NavLink>

                                        <li className="toggle__menu hidden-xs hidden-sm">
                                            <span className="ti-menu" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mobile-menu-area" />
                        </div>
                    </div>
                    {/* End Mainmenu Area */}
                </header>
                {/* End Header Style */}
                <div className="body__overlay" />
                {/* Start Offset Wrapper */}
                <div className="offset__wrapper">

                    {/* Start Search Popap */}
                    <div className="search__area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="search__inner">
                                        <form action="#" method="get">
                                            <input placeholder="Search here... " type="text" />
                                            <button type="submit" />
                                        </form>
                                        <div className="search__close__btn">
                                            <span className="search__close__btn_icon">
                                                <i className="zmdi zmdi-close" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* End Search Popap */}
                    {/* Start Offset MEnu */}
                    <div className="offsetmenu">
                        <div className="offsetmenu__inner">
                            <div className="offsetmenu__close__btn">
                                <a href="#">
                                    <i className="zmdi zmdi-close" />
                                </a>
                            </div>
                            <div className="off__contact">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="images/logo/uniqlo.png" alt="logo" />
                                    </a>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetu adipisicing elit sed do
                                    eiusmod tempor incididunt ut labore.
                                </p>
                            </div>
                            <ul className="sidebar__thumd">
                                <li>
                                    <a href="#">
                                        <img src="images/sidebar-img/1.jpg" alt="sidebar images" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/sidebar-img/2.jpg" alt="sidebar images" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/sidebar-img/3.jpg" alt="sidebar images" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/sidebar-img/4.jpg" alt="sidebar images" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/sidebar-img/5.jpg" alt="sidebar images" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/sidebar-img/6.jpg" alt="sidebar images" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/sidebar-img/7.jpg" alt="sidebar images" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/sidebar-img/8.jpg" alt="sidebar images" />
                                    </a>
                                </li>
                            </ul>
                            <div className="offset__widget">
                                <div className="offset__single">
                                    <h4 className="offset__title">Language</h4>
                                    <ul>
                                        <li>
                                            <a href="#"> Engish </a>
                                        </li>
                                        <li>
                                            <a href="#"> French </a>
                                        </li>
                                        <li>
                                            <a href="#"> German </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="offset__single">
                                    <h4 className="offset__title">Currencies</h4>
                                    <ul>
                                        <li>
                                            <a href="#"> USD : Dollar </a>
                                        </li>
                                        <li>
                                            <a href="#"> EUR : Euro </a>
                                        </li>
                                        <li>
                                            <a href="#"> POU : Pound </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="offset__sosial__share">
                                <h4 className="offset__title">Follow Us On Social</h4>
                                <ul className="off__soaial__link">
                                    <li>
                                        <a
                                            className="bg--twitter"
                                            href="https://twitter.com/devitemsllc"
                                            target="_blank"
                                            title="Twitter"
                                        >
                                            <i className="zmdi zmdi-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="bg--instagram"
                                            href="https://www.instagram.com/devitems/"
                                            target="_blank"
                                            title="Instagram"
                                        >
                                            <i className="zmdi zmdi-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="bg--facebook"
                                            href="https://www.facebook.com/devitems/?ref=bookmarks"
                                            target="_blank"
                                            title="Facebook"
                                        >
                                            <i className="zmdi zmdi-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="bg--googleplus"
                                            href="https://plus.google.com/"
                                            target="_blank"
                                            title="Google Plus"
                                        >
                                            <i className="zmdi zmdi-google-plus" />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="bg--google"
                                            href="#"
                                            target="_blank"
                                            title="Google"
                                        >
                                            <i className="zmdi zmdi-google" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* End Offset MEnu */}
                    {/* Start Cart Panel */}
                    <div className="shopping__cart">
                        <div className="shopping__cart__inner">
                            <div className="offsetmenu__close__btn">
                                <a href="#">
                                    <i className="zmdi zmdi-close" />
                                </a>
                            </div>
                            <div className="shp__cart__wrap">
                                <div className="shp__single__product">
                                    <div className="shp__pro__thumb">
                                        <a href="#">
                                            <img src="images/product/sm-img/1.jpg" alt="product images" />
                                        </a>
                                    </div>
                                    <div className="shp__pro__details">
                                        <h2>
                                            <a href="product-details.html">
                                                BO&amp;Play Wireless Speaker
                                            </a>
                                        </h2>
                                        <span className="quantity">QTY: 1</span>
                                        <span className="shp__price">$105.00</span>
                                    </div>
                                    <div className="remove__btn">
                                        <a href="#" title="Remove this item">
                                            <i className="zmdi zmdi-close" />
                                        </a>
                                    </div>
                                </div>
                                <div className="shp__single__product">
                                    <div className="shp__pro__thumb">
                                        <a href="#">
                                            <img src="images/product/sm-img/2.jpg" alt="product images" />
                                        </a>
                                    </div>
                                    <div className="shp__pro__details">
                                        <h2>
                                            <a href="product-details.html">Brone Candle</a>
                                        </h2>
                                        <span className="quantity">QTY: 1</span>
                                        <span className="shp__price">$25.00</span>
                                    </div>
                                    <div className="remove__btn">
                                        <a href="#" title="Remove this item">
                                            <i className="zmdi zmdi-close" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <ul className="shoping__total">
                                <li className="subtotal">Subtotal:</li>
                                <li className="total__price">$130.00</li>
                            </ul>
                            <ul className="shopping__btn">
                                <li>
                                    <a href="cart.html">View Cart</a>
                                </li>
                                <li className="shp__checkout">
                                    <a href="checkout.html">Checkout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* End Cart Panel */}
                </div>
                {/* End Offset Wrapper */}
                {/* Start Slider Area */}
                {/* Start Single Slide */}
                <div
                    className="slide slider__full--screen"
                    style={{
                        background:
                            "rgba(0, 0, 0, 0) url(images/bg/thu.jpeg) no-repeat scroll center center / cover",
                        height: "500px"
                    }}
                >
                    <div className="ht__bradcaump__wrap ">
                        <div className="container ">
                            <div className="row ">
                                <div className="col-xs-12 ">
                                    <div className="bradcaump__inner text-center " style={{ paddingLeft: "530px" }}>
                                        <h2 className="bradcaump-title" style={{ color: "white" }}>New Product Collection</h2>

                                        <a className="breadcrumb-item" style={{ color: "white" }}>
                                            Show Now
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* End Single Slide */}

                    </div>
                </div>
                {/* Start Slider Area */}
                {/* Start Our Product Area */}
                <section className="htc__product__area ptb--130 bg__white">
                    <div className="container">
                        <div className="htc__product__container">
                            {/* Start Product MEnu */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="product__menu">
                                        <button data-filter="*" className="is-checked">
                                            All
                                        </button>
                                        <button data-filter=".cat--1">Furnitures</button>
                                        <button data-filter=".cat--2">Bags</button>
                                        <button data-filter=".cat--3">Decoration</button>
                                        <button data-filter=".cat--4">Accessories</button>
                                    </div>
                                </div>
                            </div>
                            {/* End Product MEnu */}
                            <div className="row">
                                <div className="product__list">
                                    {/* Start Single Product */}
                                    <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
                                        <div className="product foo">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="#">
                                                        <img src="images/product/1.png" alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <ul className="product__action">
                                                        <li style={{ left: "-26px" }}>
                                                            <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                <span className="ti-plus"></span>
                                                            </a>
                                                        </li>
                                                        <li style={{ left: "-4px" }}>
                                                            <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add__to__wishlist">
                                                    <a
                                                        data-toggle="tooltip"
                                                        title="Add To Wishlist"
                                                        className="add-to-cart"
                                                        href="wishlist.html"
                                                    >
                                                        <span className="ti-heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2>
                                                    <a href="product-details.html">Simple Black Clock</a>
                                                </h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Product */}
                                    {/* Start Single Product */}
                                    <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
                                        <div className="product foo">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="#">
                                                        <img src="images/product/1.png" alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <ul className="product__action">
                                                        <li style={{ left: "-26px" }}>
                                                            <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                <span className="ti-plus"></span>
                                                            </a>
                                                        </li>
                                                        <li style={{ left: "-4px" }}>
                                                            <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add__to__wishlist">
                                                    <a
                                                        data-toggle="tooltip"
                                                        title="Add To Wishlist"
                                                        className="add-to-cart"
                                                        href="wishlist.html"
                                                    >
                                                        <span className="ti-heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2>
                                                    <a href="product-details.html">Simple Black Clock</a>
                                                </h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Product */}
                                    {/* Start Single Product */}
                                    <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
                                        <div className="product foo">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="#">
                                                        <img src="images/product/1.png" alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <ul className="product__action">
                                                        <li style={{ left: "-26px" }}>
                                                            <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                <span className="ti-plus"></span>
                                                            </a>
                                                        </li>
                                                        <li style={{ left: "-4px" }}>
                                                            <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add__to__wishlist">
                                                    <a
                                                        data-toggle="tooltip"
                                                        title="Add To Wishlist"
                                                        className="add-to-cart"
                                                        href="wishlist.html"
                                                    >
                                                        <span className="ti-heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2>
                                                    <a href="product-details.html">Simple Black Clock</a>
                                                </h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Product */}
                                    {/* Start Single Product */}
                                    <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
                                        <div className="product foo">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="#">
                                                        <img src="images/product/1.png" alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <ul className="product__action">
                                                        <li style={{ left: "-26px" }}>
                                                            <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                <span className="ti-plus"></span>
                                                            </a>
                                                        </li>
                                                        <li style={{ left: "-4px" }}>
                                                            <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add__to__wishlist">
                                                    <a
                                                        data-toggle="tooltip"
                                                        title="Add To Wishlist"
                                                        className="add-to-cart"
                                                        href="wishlist.html"
                                                    >
                                                        <span className="ti-heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2>
                                                    <a href="product-details.html">Simple Black Clock</a>
                                                </h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Product */}
                                    {/* Start Single Product */}
                                    <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
                                        <div className="product foo">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="#">
                                                        <img src="images/product/1.png" alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <ul className="product__action">
                                                        <li style={{ left: "-26px" }}>
                                                            <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                <span className="ti-plus"></span>
                                                            </a>
                                                        </li>
                                                        <li style={{ left: "-4px" }}>
                                                            <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add__to__wishlist">
                                                    <a
                                                        data-toggle="tooltip"
                                                        title="Add To Wishlist"
                                                        className="add-to-cart"
                                                        href="wishlist.html"
                                                    >
                                                        <span className="ti-heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2>
                                                    <a href="product-details.html">Simple Black Clock</a>
                                                </h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Product */}
                                    {/* Start Single Product */}
                                    <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
                                        <div className="product foo">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="#">
                                                        <img src="images/product/1.png" alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <ul className="product__action">
                                                        <li style={{ left: "-26px" }}>
                                                            <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                <span className="ti-plus"></span>
                                                            </a>
                                                        </li>
                                                        <li style={{ left: "-4px" }}>
                                                            <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add__to__wishlist">
                                                    <a
                                                        data-toggle="tooltip"
                                                        title="Add To Wishlist"
                                                        className="add-to-cart"
                                                        href="wishlist.html"
                                                    >
                                                        <span className="ti-heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2>
                                                    <a href="product-details.html">Simple Black Clock</a>
                                                </h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Product */}
                                    {/* Start Single Product */}
                                    <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
                                        <div className="product foo">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="#">
                                                        <img src="images/product/1.png" alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <ul className="product__action">
                                                        <li style={{ left: "-26px" }}>
                                                            <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                <span className="ti-plus"></span>
                                                            </a>
                                                        </li>
                                                        <li style={{ left: "-4px" }}>
                                                            <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add__to__wishlist">
                                                    <a
                                                        data-toggle="tooltip"
                                                        title="Add To Wishlist"
                                                        className="add-to-cart"
                                                        href="wishlist.html"
                                                    >
                                                        <span className="ti-heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2>
                                                    <a href="product-details.html">Simple Black Clock</a>
                                                </h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Product */}
                                    {/* Start Single Product */}
                                    <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
                                        <div className="product foo">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="#">
                                                        <img src="images/product/1.png" alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <ul className="product__action">
                                                        <li style={{ left: "-26px" }}>
                                                            <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                <span className="ti-plus"></span>
                                                            </a>
                                                        </li>
                                                        <li style={{ left: "-4px" }}>
                                                            <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add__to__wishlist">
                                                    <a
                                                        data-toggle="tooltip"
                                                        title="Add To Wishlist"
                                                        className="add-to-cart"
                                                        href="wishlist.html"
                                                    >
                                                        <span className="ti-heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2>
                                                    <a href="product-details.html">Simple Black Clock</a>
                                                </h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Product */}
                                    {/* Start Single Product */}
                                    <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
                                        <div className="product foo">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="#">
                                                        <img src="images/product/1.png" alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <ul className="product__action">
                                                        <li style={{ left: "-26px" }}>
                                                            <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                <span className="ti-plus"></span>
                                                            </a>
                                                        </li>
                                                        <li style={{ left: "-4px" }}>
                                                            <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add__to__wishlist">
                                                    <a
                                                        data-toggle="tooltip"
                                                        title="Add To Wishlist"
                                                        className="add-to-cart"
                                                        href="wishlist.html"
                                                    >
                                                        <span className="ti-heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2>
                                                    <a href="product-details.html">Simple Black Clock</a>
                                                </h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Product */}
                                    {/* Start Single Product */}
                                    <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
                                        <div className="product foo">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="#">
                                                        <img src="images/product/1.png" alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <ul className="product__action">
                                                        <li style={{ left: "-26px" }}>
                                                            <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                <span className="ti-plus"></span>
                                                            </a>
                                                        </li>
                                                        <li style={{ left: "-4px" }}>
                                                            <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add__to__wishlist">
                                                    <a
                                                        data-toggle="tooltip"
                                                        title="Add To Wishlist"
                                                        className="add-to-cart"
                                                        href="wishlist.html"
                                                    >
                                                        <span className="ti-heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2>
                                                    <a href="product-details.html">Simple Black Clock</a>
                                                </h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Product */}
                                    {/* Start Single Product */}
                                    <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
                                        <div className="product foo">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="#">
                                                        <img src="images/product/1.png" alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <ul className="product__action">
                                                        <li style={{ left: "-26px" }}>
                                                            <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                <span className="ti-plus"></span>
                                                            </a>
                                                        </li>
                                                        <li style={{ left: "-4px" }}>
                                                            <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add__to__wishlist">
                                                    <a
                                                        data-toggle="tooltip"
                                                        title="Add To Wishlist"
                                                        className="add-to-cart"
                                                        href="wishlist.html"
                                                    >
                                                        <span className="ti-heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2>
                                                    <a href="product-details.html">Simple Black Clock</a>
                                                </h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Product */}
                                    {/* Start Single Product */}
                                    <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
                                        <div className="product foo">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="#">
                                                        <img src="images/product/1.png" alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <ul className="product__action">
                                                        <li style={{ left: "-26px" }}>
                                                            <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                <span className="ti-plus"></span>
                                                            </a>
                                                        </li>
                                                        <li style={{ left: "-4px" }}>
                                                            <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add__to__wishlist">
                                                    <a
                                                        data-toggle="tooltip"
                                                        title="Add To Wishlist"
                                                        className="add-to-cart"
                                                        href="wishlist.html"
                                                    >
                                                        <span className="ti-heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2>
                                                    <a href="product-details.html">Simple Black Clock</a>
                                                </h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Product */}
                                    {/* Start Single Product */}
                                    <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
                                        <div className="product foo">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="#">
                                                        <img src="images/product/1.png" alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <ul className="product__action">
                                                        <li style={{ left: "-26px" }}>
                                                            <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                <span className="ti-plus"></span>
                                                            </a>
                                                        </li>
                                                        <li style={{ left: "-4px" }}>
                                                            <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add__to__wishlist">
                                                    <a
                                                        data-toggle="tooltip"
                                                        title="Add To Wishlist"
                                                        className="add-to-cart"
                                                        href="wishlist.html"
                                                    >
                                                        <span className="ti-heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2>
                                                    <a href="product-details.html">Simple Black Clock</a>
                                                </h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Product */}
                                    {/* Start Single Product */}
                                    <div className="col-md-3 single__pro col-lg-3 col-sm-4 col-xs-12 cat--4">
                                        <div className="product foo">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="#">
                                                        <img src="images/product/14.png" alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <ul className="product__action">
                                                        <li>
                                                            <a
                                                                data-toggle="modal"
                                                                data-target="#productModal"
                                                                title="Quick View"
                                                                className="quick-view modal-view detail-link"
                                                                href="#"
                                                            >
                                                                <span className="ti-plus" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a title="Add TO Cart" href="cart.html">
                                                                <span className="ti-shopping-cart" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add__to__wishlist">
                                                    <a
                                                        data-toggle="tooltip"
                                                        title="Add To Wishlist"
                                                        className="add-to-cart"
                                                        href="wishlist.html"
                                                    >
                                                        <span className="ti-heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2>
                                                    <a href="product-details.html">Wood Long TV Board</a>
                                                </h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Product */}
                                    {/* Start Single Product */}
                                    <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
                                        <div className="product foo">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="#">
                                                        <img src="images/product/1.png" alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <ul className="product__action">
                                                        <li style={{ left: "-26px" }}>
                                                            <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                <span className="ti-plus"></span>
                                                            </a>
                                                        </li>
                                                        <li style={{ left: "-4px" }}>
                                                            <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add__to__wishlist">
                                                    <a
                                                        data-toggle="tooltip"
                                                        title="Add To Wishlist"
                                                        className="add-to-cart"
                                                        href="wishlist.html"
                                                    >
                                                        <span className="ti-heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2>
                                                    <a href="product-details.html">Simple Black Clock</a>
                                                </h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Product */}
                                    {/* Start Single Product */}
                                    <div className="col-md-3 single__pro col-lg-3 cat--1 col-sm-4 col-xs-12">
                                        <div className="product foo">
                                            <div className="product__inner">
                                                <div className="pro__thumb">
                                                    <a href="#">
                                                        <img src="images/product/1.png" alt="product images" />
                                                    </a>
                                                </div>
                                                <div className="product__hover__info">
                                                    <ul className="product__action">
                                                        <li style={{ left: "-26px" }}>
                                                            <a data-toggle="modal" data-target="#productModal" title="Quick View" className="quick-view modal-view detail-link" href="#">
                                                                <span className="ti-plus"></span>
                                                            </a>
                                                        </li>
                                                        <li style={{ left: "-4px" }}>
                                                            <a title="Add TO Cart" href="cart.html"><span className="ti-shopping-cart"></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="add__to__wishlist">
                                                    <a
                                                        data-toggle="tooltip"
                                                        title="Add To Wishlist"
                                                        className="add-to-cart"
                                                        href="wishlist.html"
                                                    >
                                                        <span className="ti-heart" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="product__details">
                                                <h2>
                                                    <a href="product-details.html">Simple Black Clock</a>
                                                </h2>
                                                <ul className="product__price">
                                                    <li className="old__price">$16.00</li>
                                                    <li className="new__price">$10.00</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Single Product */}
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                {/* End Our Product Area */}

                {/* Start Footer Area */}
                <footer
                    className="htc__foooter__area"
                    style={{
                        background:
                            "rgba(0, 0, 0, 0) url(images/bg/6.jpg) no-repeat scroll center center / cover",

                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="footer__container clearfix">
                                {/* Start Single Footer Widget */}
                                <div className="col-md-3 col-lg-3 col-sm-6">
                                    <div className="ft__widget">
                                        <div className="ft__logo">
                                            <a href="index.html">
                                                <img src="images/logo/uniqlo.png" alt="footer logo" />
                                            </a>
                                        </div>
                                        <div className="footer__details">
                                            <p>
                                                Get 10% discount with notified about the latest news and
                                                updates.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Footer Widget */}
                                {/* Start Single Footer Widget */}
                                <div className="col-md-3 col-lg-3 col-lg-offset-1 col-sm-6 smb-30 xmt-30">
                                    <div className="ft__widget">
                                        <h2 className="ft__title">Newsletter</h2>
                                        <div className="newsletter__form">
                                            <div className="input__box">
                                                <div id="mc_embed_signup">
                                                    <form
                                                        action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"
                                                        method="post"
                                                        id="mc-embedded-subscribe-form"
                                                        name="mc-embedded-subscribe-form"
                                                        className="validate"
                                                        target="_blank"
                                                        noValidate=""
                                                    >
                                                        <div
                                                            id="mc_embed_signup_scroll"
                                                            className="htc__news__inner"
                                                        >
                                                            <div className="news__input">
                                                                <input
                                                                    type="email"
                                                                    defaultValue=""
                                                                    name="EMAIL"
                                                                    className="email"
                                                                    id="mce-EMAIL"
                                                                    placeholder="Email Address"
                                                                    required=""
                                                                />
                                                            </div>
                                                            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                                            <div
                                                                style={{ position: "absolute", left: "-5000px" }}
                                                                aria-hidden="true"
                                                            >
                                                                <input
                                                                    type="text"
                                                                    name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                                                                    tabIndex={-1}
                                                                    defaultValue=""
                                                                />
                                                            </div>
                                                            <div className="clearfix subscribe__btn">
                                                                <input
                                                                    type="submit"
                                                                    defaultValue="Send"
                                                                    name="subscribe"
                                                                    id="mc-embedded-subscribe"
                                                                    className="bst__btn btn--white__color"
                                                                />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Footer Widget */}
                                {/* Start Single Footer Widget */}
                                <div className="col-md-3 col-lg-3 col-sm-6 smt-30 xmt-30">
                                    <div className="ft__widget contact__us">
                                        <h2 className="ft__title">Contact Us</h2>
                                        <div className="footer__inner">
                                            <p>
                                                28 Nguyen Tri Phuong
                                                <br />
                                                Hue
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* End Single Footer Widget */}
                                {/* Start Single Footer Widget */}
                                <div className="col-md-3 col-lg-2 col-sm-6 smt-30 xmt-30">
                                    <div className="ft__widget">
                                        <h2 className="ft__title">Follow Us</h2>
                                        <ul className="social__icon">
                                            <li>
                                                <a href="https://twitter.com/devitemsllc" target="_blank">
                                                    <i className="zmdi zmdi-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.instagram.com/devitems/"
                                                    target="_blank"
                                                >
                                                    <i className="zmdi zmdi-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.facebook.com/devitems/?ref=bookmarks"
                                                    target="_blank"
                                                >
                                                    <i className="zmdi zmdi-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://plus.google.com/" target="_blank">
                                                    <i className="zmdi zmdi-google-plus" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* End Single Footer Widget */}
                            </div>
                        </div>

                        {/* End Copyright Area */}
                    </div>
                </footer>
                {/* End Footer Area */}
            </div>
            {/* Body main wrapper end */}
            {/* QUICKVIEW PRODUCT */}
            <div id="quickview-wrapper">
                {/* Modal */}
                <div className="modal fade" id="productModal" tabIndex={-1} role="dialog">
                    <div className="modal-dialog modal__container" role="document">
                        <div className="modal-content">
                            <div className="modal-header modal__header">
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="modal-product">
                                    {/* Start product images */}
                                    <div className="product-images">
                                        <div className="main-image images">
                                            <img alt="big images" src="images/product/big-img/1.jpg" />
                                        </div>
                                    </div>
                                    {/* end product images */}
                                    <div className="product-info">
                                        <h1>Simple Fabric Bags</h1>
                                        <div className="rating__and__review">
                                            <ul className="rating">
                                                <li>
                                                    <span className="ti-star" />
                                                </li>
                                                <li>
                                                    <span className="ti-star" />
                                                </li>
                                                <li>
                                                    <span className="ti-star" />
                                                </li>
                                                <li>
                                                    <span className="ti-star" />
                                                </li>
                                                <li>
                                                    <span className="ti-star" />
                                                </li>
                                            </ul>
                                            <div className="review">
                                                <a href="#">4 customer reviews</a>
                                            </div>
                                        </div>
                                        <div className="price-box-3">
                                            <div className="s-price-box">
                                                <span className="new-price">$17.20</span>
                                                <span className="old-price">$45.00</span>
                                            </div>
                                        </div>
                                        <div className="quick-desc">
                                            Designed for simplicity and made from high quality materials.
                                            Its sleek geometry and material combinations creates a modern
                                            look.
                                        </div>
                                        <div className="select__color">
                                            <h2>Select color</h2>
                                            <ul className="color__list">
                                                <li className="red">
                                                    <a title="Red" href="#">
                                                        Red
                                                    </a>
                                                </li>
                                                <li className="gold">
                                                    <a title="Gold" href="#">
                                                        Gold
                                                    </a>
                                                </li>
                                                <li className="orange">
                                                    <a title="Orange" href="#">
                                                        Orange
                                                    </a>
                                                </li>
                                                <li className="orange">
                                                    <a title="Orange" href="#">
                                                        Orange
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="select__size">
                                            <h2>Select size</h2>
                                            <ul className="color__list">
                                                <li className="l__size">
                                                    <a title="L" href="#">
                                                        L
                                                    </a>
                                                </li>
                                                <li className="m__size">
                                                    <a title="M" href="#">
                                                        M
                                                    </a>
                                                </li>
                                                <li className="s__size">
                                                    <a title="S" href="#">
                                                        S
                                                    </a>
                                                </li>
                                                <li className="xl__size">
                                                    <a title="XL" href="#">
                                                        XL
                                                    </a>
                                                </li>
                                                <li className="xxl__size">
                                                    <a title="XXL" href="#">
                                                        XXL
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="social-sharing">
                                            <div className="widget widget_socialsharing_widget">
                                                <h3 className="widget-title-modal">Share this product</h3>
                                                <ul className="social-icons">
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            title="rss"
                                                            href="#"
                                                            className="rss social-icon"
                                                        >
                                                            <i className="zmdi zmdi-rss" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            title="Linkedin"
                                                            href="#"
                                                            className="linkedin social-icon"
                                                        >
                                                            <i className="zmdi zmdi-linkedin" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            title="Pinterest"
                                                            href="#"
                                                            className="pinterest social-icon"
                                                        >
                                                            <i className="zmdi zmdi-pinterest" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            title="Tumblr"
                                                            href="#"
                                                            className="tumblr social-icon"
                                                        >
                                                            <i className="zmdi zmdi-tumblr" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            target="_blank"
                                                            title="Pinterest"
                                                            href="#"
                                                            className="pinterest social-icon"
                                                        >
                                                            <i className="zmdi zmdi-pinterest" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="addtocart-btn">
                                            <a href="#">Add to cart</a>
                                        </div>
                                    </div>
                                    {/* .product-info */}
                                </div>
                                {/* .modal-product */}
                            </div>
                            {/* .modal-body */}
                        </div>
                        {/* .modal-content */}
                    </div>
                    {/* .modal-dialog */}
                </div>
                {/* END Modal */}
            </div>
        </div>
    )
}
export default HomePage;