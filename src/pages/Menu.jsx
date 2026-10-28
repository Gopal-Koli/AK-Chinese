
import { useState } from "react";
import menuItems from "../data/menu";
import FoodCard from "../components/FoodCard";

const categories = ["All", "Noodles", "Rice", "Starters"];
export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );

  function handleAdd(item) {
    alert(`${item.name} — cart functionality agle step mein connect karenge!`);
  }

  return (
    <section className="menu-page">
      <div className="menu-heading">
        <span className="eyebrow">MADE FRESH, SERVED HOT</span>
        <h1>Explore Our <span>Menu.</span></h1>
        <p>Choose your favourites and satisfy those cravings.</p>
      </div>

      <div className="category-filters">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={
              activeCategory === category
                ? "category-btn selected"
                : "category-btn"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="food-grid">
        {filteredItems.map((item) => (
          <FoodCard
            key={item.id}
            item={item}
            onAdd={handleAdd}
          />
        ))}
      </div>
    </section>
  );
}
