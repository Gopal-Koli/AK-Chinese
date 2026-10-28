
export default function FoodCard({ item, onAdd }) {
  return (
    <article className="food-card">
      {item.popular && (
        <span className="food-badge">BESTSELLER</span>
      )}

     <div className="food-image">
  <img
    src={item.image}
    alt={item.name}
    className="food-photo"
  />
</div>

      <div className="food-info">
        <span className="food-category">{item.category}</span>
        <h3>{item.name}</h3>
        <p>{item.description}</p>

        <div className="food-card-bottom">
          <strong>₹{item.price}</strong>
          <button
            className="add-btn"
            onClick={() => onAdd(item)}
            type="button"
          >
            + Add
          </button>
        </div>
      </div>
    </article>
  );
}
