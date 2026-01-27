import { useState } from "react";
import "./Header.css";

const menuItems = [
  {
    label: "DRINKWARE",
    link: "#",
    submenu: ["Water Bottles", "Travel Mugs", "Tumblers"]
  },
  {
    label: "FITNESS",
    link: "#",
    submenu: ["Weights", "Yoga Mats", "Equipment"]
  },
  {
    label: "HOME",
    link: "#",
    submenu: ["Decor", "Furniture", "Accessories"]
  },
  {
    label: "TRAVEL",
    link: "#",
    submenu: ["Luggage", "Bags", "Accessories"]
  },
  {
    label: "BASICS",
    link: "#",
    submenu: ["T-Shirts", "Hoodies", "Pants"]
  },
  {
    label: "DIGITAL",
    link: "#",
    submenu: ["Headphones", "Speakers", "Accessories"]
  },
  {
    label: "OFFICE",
    link: "#",
    submenu: ["Desk Accessories", "Organizers", "Supplies"]
  }
];

function Header({ onSearchClick }) {
  return (
    <header className="site-header">
      <div className="page-width">
        <div className="header-wrapper">
          <div className="header-logo">
            <a href="/">
              <img src={window.SHOPIFY_ASSETS?.logo || "/drk-logo.png"} alt="DRK Collection" />
            </a>
          </div>
          <nav className="header-nav">
            {menuItems.map((item, index) => (
              <div key={index} className="menu-item-wrapper" data-menu-item>
                <a href={item.link} className="menu-link">{item.label}</a>
                {item.submenu && item.submenu.length > 0 && (
                  <div className="menu-dropdown" style={{ display: 'none' }} data-dropdown>
                    <div className="dropdown-content">
                      <div className="dropdown-menu-columns">
                        <div className="dropdown-column">
                          {item.submenu.map((subItem, subIndex) => (
                            <a key={subIndex} href="#" className="dropdown-link">{subItem}</a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="header-icons">
            <button className="search-icon" onClick={onSearchClick}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <button className="cart-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="9" cy="21" r="2.25" />
                <circle cx="20" cy="21" r="2.25" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </button>
            <button className="account-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="7" r="3" />
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

