import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

function Header() {
  return (
    <header className="main-header style-five">
      <div className="header-top-two auto-hidden">
        <div className="auto-container">
          <div className="top-inner clearfix">
            <ul className="info pull-left clearfix">
              <li>
                <i className="flaticon-telephone"></i>Ask for a quote{" "}
                <a href="tel:4412345678">+44 123-456-78</a>
              </li>
              <li>
                <i className="flaticon-email"></i>
                <a href="mailto:support@info.com">support@info.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="header-lower">
        <div className="auto-container">
          <div className="outer-box clearfix">
            <div className="menu-area pull-left clearfix">
              <div className="mobile-nav-toggler">
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
                <i className="icon-bar"></i>
              </div>
              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className="collapse navbar-collapse show clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    <li className="current dropdown">
                      <a href="">Home</a>
                      <ul>
                        <li>
                          <a href="">Home 01</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home 02</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home 03</a>
                        </li>
                        <li>
                          <a href="index-onepage.html">OnePage Home</a>
                        </li>
                        <li>
                          <a href="index-rtl.html">RTL Home</a>
                        </li>
                        <li className="dropdown">
                          <a href="">Header Style</a>
                          <ul>
                            <li>
                              <a href="">Header Style 01</a>
                            </li>
                            <li>
                              <a href="index-2.html">Header Style 02</a>
                            </li>
                            <li>
                              <a href="index-3.html">Header Style 03</a>
                            </li>
                            <li>
                              <a href="blog.html">Header Style 04</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="">About</a>
                      <ul>
                        <li>
                          <a href="about.html">Company</a>
                        </li>
                        <li className="dropdown">
                          <a href="">Projects</a>
                          <ul>
                            <li>
                              <a href="project.html">Our Projects</a>
                            </li>
                            <li>
                              <a href="project-details.html">Project Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="reviews.html">Reviews</a>
                        </li>
                        <li>
                          <a href="faq.html">Faq’s</a>
                        </li>
                        <li>
                          <a href="error.html">404</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="">Services</a>
                      <ul>
                        <li>
                          <a href="service.html">Commerical</a>
                        </li>
                        <li>
                          <a href="service-2.html">Residential</a>
                        </li>
                        <li>
                          <a href="service-details.html">Hospitality & Hotel</a>
                        </li>
                        <li>
                          <a href="service-details-2.html">Municipalities</a>
                        </li>
                        <li>
                          <a href="service-details-3.html">Education Centre</a>
                        </li>
                        <li>
                          <a href="service-details-4.html">Office Buildings</a>
                        </li>
                        <li>
                          <a href="service-details-5.html">Restaurants</a>
                        </li>
                        <li>
                          <a href="service-details-6.html">Car Showrooms</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="">Elements</a>
                      <div className="megamenu">
                        <div className="row clearfix">
                          <div className="col-xl-6 column">
                            <ul>
                              <li>
                                <h4>Elements 1</h4>
                              </li>
                              <li>
                                <a href="feature-element-1.html">
                                  Feature Block 01
                                </a>
                              </li>
                              <li>
                                <a href="feature-element-2.html">
                                  Feature Block 02
                                </a>
                              </li>
                              <li>
                                <a href="feature-element-3.html">
                                  Feature Block 03
                                </a>
                              </li>
                              <li>
                                <a href="feature-element-4.html">
                                  Feature Block 04
                                </a>
                              </li>
                              <li>
                                <a href="about-element-1.html">
                                  About Block 01
                                </a>
                              </li>
                              <li>
                                <a href="about-element-2.html">
                                  About Block 02
                                </a>
                              </li>
                              <li>
                                <a href="about-element-3.html">
                                  About Block 03
                                </a>
                              </li>
                              <li>
                                <a href="news-element-1.html">News Block 01</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-xl-6 column">
                            <ul>
                              <li>
                                <h4>Elements 2</h4>
                              </li>
                              <li>
                                <a href="news-element-2.html">News Block 02</a>
                              </li>
                              <li>
                                <a href="service-element-1.html">
                                  Service Block 01
                                </a>
                              </li>
                              <li>
                                <a href="service-element-2.html">
                                  Service Block 02
                                </a>
                              </li>
                              <li>
                                <a href="team-element-1.html">Team Block 01</a>
                              </li>
                              <li>
                                <a href="team-element-2.html">Team Block 02</a>
                              </li>
                              <li>
                                <a href="faq-element.html">Faq Block</a>
                              </li>
                              <li>
                                <a href="working-element.html">Working Block</a>
                              </li>
                              <li>
                                <a href="clients-element.html">Clients Block</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="dropdown">
                      <a href="">Blog</a>
                      <ul>
                        <li>
                          <a href="blog.html">Blog Simple</a>
                        </li>
                        <li>
                          <a href="blog-2.html">Blog With Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Single Post</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="">Shop</a>
                      <ul>
                        <li>
                          <a href="shop.html">Products</a>
                        </li>
                        <li>
                          <a href="shop-details.html">Product Details</a>
                        </li>
                        <li>
                          <a href="cart.html">Shopping Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="account.html">My Account</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div className="menu-right-content clearfix">
              <ul className="social-links clearfix">
                <li>
                  <a href="">
                    <FaFacebookF size={16}/>
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaTwitter size={16}/>
                  </a>
                </li>
                <li>
                  <a href="">
                    <FaYoutube size={16} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
