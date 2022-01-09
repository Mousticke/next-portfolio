const StarRating = ({ rating, setFormData, hoverRating, setHoverRating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hoverRating || rating) ? "on" : "off"}
            onClick={() =>
              setFormData((prevState) => ({
                ...prevState,
                rate: index,
              }))
            }
            value={rating}
            onMouseEnter={() => setHoverRating(index)}
            onMouseLeave={() => setHoverRating(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
