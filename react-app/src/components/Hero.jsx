import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-highlights">
        <div className="highlights-container">
          <div className="highlight-item">
            <img src="/fast-dispatch.svg" alt="Fast Dispatch" />
          </div>
          <div className="highlight-item">
            <img src="/easy-returns.svg" alt="Easy Returns" />
          </div>
          <div className="highlight-item">
            <img src="/secure-checkout.svg" alt="Secure Checkout" />
          </div>
          <div className="highlight-item">
            <img src="/247-customer-support.svg" alt="24/7 Support" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
