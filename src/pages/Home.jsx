
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PiBowlFoodFill } from "react-icons/pi";

import "./Home.css";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 600px)");

    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        {isMobile && (
          <video
            className="hero-mobile-video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source
              src="/videos/hero-food.mp4"
              type="video/mp4"
            />
          </video>
        )}

        <div className="hero-content">
          <p className="hero-tag">
            🔥 FRESH • HOT • DELICIOUS
          </p>

          <h1 className="brand-title">
            AK
            <span>CHINESE CORNER</span>
          </h1>

          <p className="hero-description">
            Cravings ka asli adda! Enjoy your favourite noodles,
            fried rice, Manchurian and more.
          </p>

          <div className="hero-buttons">
            <Link to="/menu" className="btn-primary">
            <span>  Explore Menu <PiBowlFoodFill />  </span>
            </Link>
           
          </div>

          <p className="hero-bottom-text">
            MADE FRESH. SERVED HOT. LOVED ALWAYS.
          </p>
        </div>
      </section>

      <section className="features" id="about">
        <div className="feature-card">
          <span>🍳</span>
          <h3>Freshly Prepared</h3>
          <p>Made fresh when you order.</p>
        </div>

        <div className="feature-card">
          <span>🌶️</span>
          <h3>Full of Flavour</h3>
          <p>Delicious flavours in every bite.</p>
        </div>

        <div className="feature-card">
          <span>💰</span>
          <h3>Pocket Friendly</h3>
          <p>Tasty food at affordable prices.</p>
        </div>
      </section>
    </div>
  );
}
