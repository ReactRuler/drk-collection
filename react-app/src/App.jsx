import { useState } from "react";
import Header from "./components/Header";
import TopVideo from "./components/TopVideo";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import "./App.css";

function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="app">
      <Header onSearchClick={() => setSearchOpen(true)} />
      <TopVideo />
      <Hero />
      <FeaturedProducts />

      {searchOpen && (
        <div className="search-popup" onClick={() => setSearchOpen(false)}>
          <div
            className="search-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="search-close"
              onClick={() => setSearchOpen(false)}
            >
              ×
            </button>
            <form className="search-form">
              <input
                type="search"
                placeholder="Search products, articles, pages..."
                autoFocus
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

