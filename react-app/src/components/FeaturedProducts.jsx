import "./FeaturedProducts.css";

function FeaturedProducts() {
  const products = Array(9).fill(null);

  return (
    <section className="featured-products">
      <div className="page-width">
        <h2>FEATURED PRODUCTS</h2>
        <div className="products-grid">
          {products.map((_, i) => (
            <div key={i} className="product-card">
              <div className="product-image"></div>
              <h3>PRODUCT NAME</h3>
              <div className="product-price">$200</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;

