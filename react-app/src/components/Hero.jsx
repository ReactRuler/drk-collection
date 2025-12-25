import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const [assets, setAssets] = useState({
    fastDispatch: "/fast-dispatch.svg",
    easyReturns: "/easy-returns.svg",
    secureCheckout: "/secure-checkout.svg",
    customerSupport: "/247-customer-support.svg",
  });

  useEffect(() => {
    if (window.SHOPIFY_ASSETS) {
      setAssets({
        fastDispatch:
          window.SHOPIFY_ASSETS.fastDispatch || "/fast-dispatch.svg",
        easyReturns: window.SHOPIFY_ASSETS.easyReturns || "/easy-returns.svg",
        secureCheckout:
          window.SHOPIFY_ASSETS.secureCheckout || "/secure-checkout.svg",
        customerSupport:
          window.SHOPIFY_ASSETS.customerSupport || "/247-customer-support.svg",
      });
    }
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-highlights">
        <div className="highlights-container">
          <div className="highlight-item">
            <img src={assets.fastDispatch} alt="Fast Dispatch" />
          </div>
          <div className="highlight-item">
            <img src={assets.easyReturns} alt="Easy Returns" />
          </div>
          <div className="highlight-item">
            <img src={assets.secureCheckout} alt="Secure Checkout" />
          </div>
          <div className="highlight-item">
            <img src={assets.customerSupport} alt="24/7 Support" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
