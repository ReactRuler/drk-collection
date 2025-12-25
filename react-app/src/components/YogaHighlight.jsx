import { useEffect, useState } from "react";
import "./YogaHighlight.css";

function YogaHighlight() {
  const [images, setImages] = useState({
    waterRipples: "",
    products: "",
    model: "",
  });

  useEffect(() => {
    if (window.SHOPIFY_ASSETS) {
      setImages({
        waterRipples:
          window.SHOPIFY_ASSETS.yogaWaterRipples ||
          "/bottom-horizontal-no-text.png",
        products: window.SHOPIFY_ASSETS.yogaProducts || "/yoga-products.png",
        model: window.SHOPIFY_ASSETS.yogaModel || "/yoga-lady.png",
      });
    } else {
      setImages({
        waterRipples: "/bottom-horizontal-no-text.png",
        products: "/yoga-products.png",
        model: "/yoga-lady.png",
      });
    }
  }, []);

  return (
    <section className="yoga-highlight-section">
      <div className="yoga-highlight-container">
        <div className="yoga-highlight-content">
          <div className="yoga-highlight-left">
            <h2 className="yoga-highlight-title">DRK Yoga</h2>
            <p className="yoga-highlight-description">
              The art of stillness, the power of black.
            </p>
            <a href="#" className="yoga-highlight-button">
              EXPLORE COLLECTION
            </a>
          </div>
          <div className="yoga-highlight-middle">
            {images.products ? (
              <img src={images.products} alt="Yoga Products" />
            ) : (
              <div className="yoga-image-placeholder">Yoga Products</div>
            )}
          </div>
          <div className="yoga-highlight-right">
            {images.model ? (
              <img src={images.model} alt="Yoga Model" />
            ) : (
              <div className="yoga-image-placeholder">Yoga Model</div>
            )}
          </div>
          <div className="yoga-water-ripples">
            {images.waterRipples ? (
              <img src={images.waterRipples} alt="Water Ripples" />
            ) : (
              <div className="yoga-image-placeholder">Water Ripples</div>
            )}
            <div className="yoga-water-ripples-text">
              <p>
                <b>DRK Yoga </b>transforms silence into motion and simplicity
                into elegance. Designed in black to sharpen focus, built with
                refined detail to follow every flow.
                <br />
                <br />
                Each product invites you to experience balance with intensity
                and grace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default YogaHighlight;
