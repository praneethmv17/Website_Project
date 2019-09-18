// components/Header.js

import "./Header.scss";

const Header = () => (
  
  <div>
    <div className="Header">
      <div className="TopMenu">
        <div id="Language">UNITED STATES / ENGLISH</div>
        <div id="Store">FIND A STORE</div>
        <div id="Newsletter">NEWSLETTER</div>
      </div>
      <div className="Title">CAROLINA HERRERA</div>
      <div className="MenuItems">
        <nav>
            <ul>
                <li><a>GIFT GUIDE</a></li>
                <li><a>FASHION</a></li>
                <li><a>FRAGRANCES</a></li>
                <li><a>BRIDAL</a></li>
                <li><a>THE HOUSE</a></li>
                <li><a>SERVICES</a></li>
            </ul>
        </nav>
      </div>
    </div>
    
  </div>
);

export default Header;