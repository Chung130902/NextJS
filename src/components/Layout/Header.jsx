import Image from 'next/image';
import React from 'react';
import { NavLink } from "react-router-dom";
import Link from 'next/link';
import { FaFacebook, FaTwitter,FaInstagram, FaSistrix, FaPhoneAlt, FaBattleNet, FaHeart, FaUserAlt , FaShoppingCart, FaTwitterSquare, FaCartPlus} from "react-icons/fa";

function Header(props) {
  return (
    <header>
     <div className="container">
            <div className="header-top">
                <div className="header-top-left xs-hidden">FREE RETURNS. STANDARD SHIPPING ORDERS $99+</div>
                <div className="header-top-right  sm-flex-full">
                    <div className="header-menu d-flex md-hidden">
                       
                            <a href="#">My Account</a>
                            <a href="#">Contact Us</a>
                           <a href="#">Blog</a>
                           <a href="#">My Wishlist</a>
                            <a href="#">Cart</a>
                          <a href="#" className="login-link">Log In</a>
                       
                    </div>
                    <div className="header-menu social-icons">
                        <a href="#" className="social-facebook" target="_blank"><FaFacebook/></a>
                        <a href="#" className="social-twitter" target="_blank"><FaTwitter/></a>
                        <a href="#" className="social-instagram" target="_blank"><FaInstagram/></a>
                    </div>
                </div>
            </div>
            <div className="header-middle">
                    <div className="header-middle-flex d-flex">
                    <div className="lg-hidden mtoggle" id="mtoggle">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                    <div className="navbar-brand">
                        <FaBattleNet/> Chung_Cosmetic
                    </div>
                    <div className="search-bar xs-hidden">
                        <form className="search-form clearfix" action="" method="GET">
                            <input type="text" name="keywords" placeholder="Search keywords..."/>
                            <button type="submit" aria-label="Search" title="Search"><FaSistrix/></button>
                        </form>
                    </div>
                    <div className="header-contact d-flex sm-hidden">
                        <div><FaPhoneAlt/></div>
                        <h6>CALL US NOW <a href="tel:#" className="font1">+123 5678 890</a></h6>
                    </div>
                    <div className="header-icon d-flex">
                        {/* <a className="sm-show" onclick="toggleSearchMobile()"  href="javascript:;" aria-label="Search" title="Search">
                            <FaSistrix/>
                        </a> */}
                        <a  href="#" aria-label="Login" title="Login">
                          <div><FaUserAlt/></div>
                            
                        </a>
                        <a href="#" aria-label="Collect" title="Collect">
                          <div><FaHeart/></div>
                            
                        </a>
                        <a id="cart"  href="#" aria-label="Cart" title="Cart">
                            <em>0</em>
                            <div><FaShoppingCart/></div>
                            
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
        <div className="header-bottom md-hidden">
            <nav className="container main-nav">
                {/* <span className="lg-hidden mclose" id="mclose">x</span> */}
                <ul className="d-flex">
                    <li className="current">
                        <a href="#">Home</a>
                    </li>
                    <li className="has-child">
                        <a href="javascript:;">Categories</a>
                        <div className="nav-child">
                            <a href="#">Fashion</a>
                            <a href="#">Electronic</a>
                            <a href="#">Watch</a>
                            <a href="#">Accessories</a>
                        </div>
                    </li>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>

    </header>
  );
}

export default Header;