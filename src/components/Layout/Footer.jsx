import Image from 'next/image';
import React from 'react';
import {FaBattleNet} from "react-icons/fa";

function Footer(props) {
  return (
    <footer>
        <div class="container">
            <div class="footer-row d-flex md-flex-wrap">
                <div class="footer-col">
                    <h4 class="widget-title">About Us</h4>
                    <div className="navbar-brand">
                        <FaBattleNet/> Chung_Cosmetic
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapibus lacus. Duis nec vestibulum magna, et dapibus lacus.</p>
                    <div class="social-icons">
                        <a href="#" class="social-icon social-facebook" target="_blank" title="Facebook"><i class="fa fa-facebook"></i></a>
                        <a href="#" class="social-icon social-twitter" target="_blank" title="Twitter"><i class="fa fa-twitter"></i></a>
                        <a href="#" class="social-icon social-linkedin" target="_blank" title="Linkedin"><i class="fa fa-linkedin"></i></a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4 class="widget-title">Contact Info</h4>
                    <ul class="contact-info">
                        <li>
                            <span class="contact-info-label">Address:</span>123 Street Name, City, England
                        </li>
                        <li>
                            <span class="contact-info-label">Phone:</span><a href="tel:">(123) 456-7890</a>
                        </li>
                        <li>
                            <span class="contact-info-label">Email:</span> <a href="mailto:mail@example.com">mail@example.com</a>
                        </li>
                        <li>
                            <span class="contact-info-label">Working Days/Hours:</span> Mon - Sun / 9:00 AM - 8:00 PM
                        </li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 class="widget-title">Customer Service</h4>
                    <ul class="links">
                        <li><a href="#">Help &amp; FAQs</a></li>
                        <li><a href="#">Order Tracking</a></li>
                        <li><a href="#">Shipping &amp; Delivery</a></li>
                        <li><a href="#">Orders History</a></li>
                        <li><a href="#">Advanced Search</a></li>
                        <li><a href="dashboard.html">My Account</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="demo1-about.html">About Us</a></li>
                        <li><a href="#">Corporate Sales</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 class="widget-title">Poppular Tags</h4>
                    <div class="tagcloud">
                        <a href="#">Bag</a>
                        <a href="#">Black</a>
                        <a href="#">Blue</a>
                        <a href="#">Clothes</a>
                        <a href="#">Fashion</a>
                        <a href="#">Hub</a>
                        <a href="#">Jean</a>
                        <a href="#">Shirt</a>
                        <a href="#">Skirt</a>
                        <a href="#">Sports</a>
                        <a href="#">Sweater</a>
                        <a href="#">Winter</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="copyright">
                    © Chung All Rights Reserved
                </div>
            </div>
        </div>
        
    </footer>
  );
}

export default Footer;