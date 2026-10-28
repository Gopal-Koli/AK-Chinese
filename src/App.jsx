
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Menu from "./pages/Menu";
import Home from "./pages/Home";



function Cart() {
  return (
    <section className="simple-page">
      <h1>Your Cart 🛒</h1>
      <p>Your selected dishes will appear here.</p>
      <Link to="/menu" className="btn-primary">Explore Menu</Link>
    </section>
  );
}

function NotFound() {
  return (
    <section className="simple-page">

      <Link to="/" className="btn-primary">Go Home</Link>
    </section>
  );
}

export default function App() {
  return (
    <>
      <header className="navbar">
        <Link to="/" className="brand">
          <span className="brand-icon">🍜</span>
          <span>AK Chinese Corner</span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/cart">🛒 Cart</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
     <Route path="/" element={<Home />} />
<Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>

      <footer className="footer">
        <h3>🍜 Akshay Chinese Corner</h3>
        <p>Fresh, tasty Chinese food made with love.</p>
        <p>© {new Date().getFullYear()} Akshay Chinese Corner</p>
      </footer>
    </>
  );
}
