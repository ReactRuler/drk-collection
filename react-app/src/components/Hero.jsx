import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="page-width">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">THE DRK SIDE OF COOL</h1>
            <p className="hero-description">
              Everyday objects transformed into icons. Black on black, always.
            </p>
            <div className="hero-buttons">
              <a href="#" className="btn-primary">SHOP ESSENTIALS</a>
              <a href="#" className="btn-secondary">EXPLORE</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="placeholder-image">Hero Image</div>
          </div>
        </div>
      </div>
      <div className="hero-highlights">
        <div className="highlights-container">
          <div className="highlight-item">
            <img src="/fast-dispatch.svg" alt="Fast Dispatch" />
            <span>FAST DISPATCH</span>
          </div>
          <div className="highlight-item">
            <img src="/easy-returns.svg" alt="Easy Returns" />
            <span>EASY RETURNS</span>
          </div>
          <div className="highlight-item">
            <img src="/secure-checkout.svg" alt="Secure Checkout" />
            <span>SECURE CHECKOUT</span>
          </div>
          <div className="highlight-item">
            <img src="/247-customer-support.svg" alt="24/7 Support" />
            <span>24/7 CUSTOMER SUPPORT</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

