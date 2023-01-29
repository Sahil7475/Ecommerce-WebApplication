import React from 'react'
import { Link } from 'react-router-dom'
import ".//footer.css"
function Footer() {
    return (
        <footer>




            <div class="row">
                <div className="contain">
                    <div class="col-3">
                        <div class="link-cat"  >
                            <span class="footer-toggle"></span>
                            <span class="footer-cat">Get to Know Us</span>
                        </div>
                        <ul class="footer-cat-links">
                            <li><a href=""><span>About Us</span></a></li>
                            <li><a href=""><span>Careers</span></a></li>
                            <li><a href=""><span>Press Releases</span></a></li>
                            <li><a href=""><span>Amazon Science</span></a></li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <div class="link-cat"  >
                            <span class="footer-toggle"></span>
                            <span class="footer-cat">
                                Connect with Us</span>
                        </div>
                        <ul class="footer-cat-links">
                            <li><a href=""><span>Facebook</span></a></li>
                            <li><a href=""><span>Twitter</span></a></li>
                            <li><a href=""><span>Instagram</span></a></li>

                        </ul>
                    </div>
                    <div class="col-3">
                        <div class="link-cat"  >
                            <span class="footer-toggle"></span>
                            <span class="footer-cat">
                                Make Money with Us</span>
                        </div>
                        <ul class="footer-cat-links">
                            <li><a href=""><span>Sell on Amazon</span></a></li>
                            <li><a href=""><span>Sell under Amazon Accelerator</span></a></li>
                            <li><a href=""><span>Protect and Build Your Brand</span></a></li>
                            <li><a href=""><span>Amazon Global Selling</span></a></li>
                            <li><a href=""><span>Become an Affiliate</span></a></li>
                            <li><a href=""><span>Fulfilment by Amazon</span></a></li>
                            <li><a href=""><span>Advertise Your Products</span></a></li>
                            <li><a href=""><span>Amazon Pay on Merchants</span></a></li>
                        </ul>
                    </div>

                    <div class="col-3">
                        <div class="link-cat"  >
                            <span class="footer-toggle"></span>
                            <span class="footer-cat">Let Us Help You</span>
                        </div>
                        <ul class="footer-cat-links">
                            <li><a href=""><span>Your Account</span></a></li>
                            <li><a href=""><span>Returns Centre</span></a></li>
                            <li><a href=""><span>100% Purchase Protection</span></a></li>
                            <li><a href=""><span>Amazon App Download</span></a></li>
                        </ul>
                    </div>
                </div>

            </div>
            <div id="copyright">
                <Link to="/">
                    <img src="	https://pngimg.com/uploads/amazon/amazon_PNG11.png" class="amazon-footer-logo" alt="" />
                </Link>
            </div>
            <div id="owner">
                <span>

                </span>
            </div>


        </footer>
    )
}

export default Footer