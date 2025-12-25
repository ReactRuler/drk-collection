import { useEffect, useState } from "react";
import "./TravelCTA.css";

function TravelCTA() {
  const [bgImage, setBgImage] = useState("/cta-bg.png");

  useEffect(() => {
    if (window.SHOPIFY_ASSETS?.ctaBg) {
      setBgImage(window.SHOPIFY_ASSETS.ctaBg);
    }
  }, []);

  return (
    <section className="travel-cta-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="travel-cta-content">
        <div className="travel-cta-text">
          <h2 className="travel-cta-title">DRK TRAVEL EDITION</h2>
          <p className="travel-cta-description">
            Black-on-black design crafted to turn every journey into a style statement.
          </p>
        </div>
        <div className="travel-cta-buttons">
          <a href="#" className="travel-cta-button">
            EXPLORE COLLECTION
          </a>
        </div>
      </div>
    </section>
  );
}

export default TravelCTA;

