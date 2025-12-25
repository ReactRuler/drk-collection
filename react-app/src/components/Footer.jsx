import { useEffect, useState } from "react";
import "./Footer.css";

function Footer() {
  const [assets, setAssets] = useState({
    logo: "/logo-footer.png",
    background: "",
    facebook: "/_Facebook.png",
    instagram: "/_Instagram.png",
    whatsapp: "/_WhatsApp.png",
    linkedin: "/_Linkedin.png",
  });

  useEffect(() => {
    if (window.SHOPIFY_ASSETS) {
      setAssets({
        logo: window.SHOPIFY_ASSETS.footerLogo || "/logo-footer.png",
        background: window.SHOPIFY_ASSETS.footerBackground || "",
        facebook: window.SHOPIFY_ASSETS.facebookIcon || "/_Facebook.png",
        instagram: window.SHOPIFY_ASSETS.instagramIcon || "/_Instagram.png",
        whatsapp: window.SHOPIFY_ASSETS.whatsappIcon || "/_WhatsApp.png",
        linkedin: window.SHOPIFY_ASSETS.linkedinIcon || "/_Linkedin.png",
      });
    }
  }, []);

  return (
    <footer
      className="footer-section"
      style={
        assets.background
          ? { backgroundImage: `url(${assets.background})` }
          : {}
      }
    >
      <div className="footer-main-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={assets.logo} alt="DRK Collection" />
          </div>
          <p className="footer-description">
            A design-forward brand where everyday objects are reimagined in
            black. Minimal, timeless, and iconic.
          </p>
          <div className="footer-social-icons">
            <a href="#" className="social-icon">
              <img src={assets.facebook} alt="Facebook" />
            </a>
            <a href="#" className="social-icon">
              <img src={assets.instagram} alt="Instagram" />
            </a>
            <a href="#" className="social-icon">
              <img src={assets.whatsapp} alt="WhatsApp" />
            </a>
            <a href="#" className="social-icon">
              <img src={assets.linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-columns">
            <div className="footer-column">
              <h3 className="footer-column-title">HOME</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Offers</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Categories</a>
                </li>
                <li>
                  <a href="#">New Arrivals</a>
                </li>
                <li>
                  <a href="#">Best Selling</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">COMPANY</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Reviews</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">LEGAL</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Cookie Settings</a>
                </li>
                <li>
                  <a href="#">Tracking Package</a>
                </li>
                <li>
                  <a href="#">Exchange and Return</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-subscribe">
            <h3 className="subscribe-title">SAY HELLO!</h3>
            <p className="subscribe-description">
              Get the latest trends delivered to your inbox.
            </p>
            <button className="subscribe-button">
              <span>SUBSCRIBE</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

