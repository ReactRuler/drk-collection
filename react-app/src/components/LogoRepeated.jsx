import { useEffect, useState } from "react";
import "./LogoRepeated.css";

function LogoRepeated() {
  const [logoSrc, setLogoSrc] = useState("/logo_repeated.png");

  useEffect(() => {
    if (window.SHOPIFY_ASSETS?.logoRepeated) {
      setLogoSrc(window.SHOPIFY_ASSETS.logoRepeated);
    }
  }, []);

  return (
    <section className="logo-repeated-section">
      <div className="logo-repeated-container">
        <img src={logoSrc} alt="DRK Collection" className="logo-repeated-image" />
      </div>
    </section>
  );
}

export default LogoRepeated;

