const Rating = () => {

  const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  const clicked = (index) => {console.log("clicked", index)};
  const hovered = (direction, index) => console.log("hovered", direction, index);
  return (
  <div className="rating-container">
    <h2>Rate your experience</h2>
    <div className="stars">
        {stars.map((star, index) => (
            //<span> {star} </span> // 1,2,3,4,5
            // need the () => clicked(index) so that it is not called immediately
            <span 
                onClick={() => clicked(index)} 
                onMouseEnter={() => hovered("enter", index)}
                onMouseLeave={() => hovered("leave", index)}
                key={star} 
                className="star"> 
            {'\u2605'} 
            </span> // ★
        ))}
    </div>
  </div>

  );
}

// export default makes the component available for import in other files without using curly braces
export default Rating;