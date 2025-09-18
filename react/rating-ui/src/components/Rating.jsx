import {useState} from 'react';
import Star from './Star';

const Rating = ({
  heading = "Rate your experience", 
  color="gold", 
  feedbackMessages = ["Terrible", "Poor",
    "Fair", "Good", "Excellent"],
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  
  return (
  <div className="rating-container">
    <h2> {heading} </h2>
    <div className="stars">
        {stars.map((star) => (
            //<span> {star} </span> // 1,2,3,4,5
            // need the () => clicked(index) so that it is not called immediately
            //<span 
            //    onClick={() => setRating(star)}
            //    onMouseEnter={() => setHover(star)}
            //    onMouseLeave={() => setHover(0)}
            //    key={star} 
            //    className="star"
            //    style={{
            //      color: star <= (hover || rating) ? color : "grey",
            //    }}
            //>
            //{'\u2605'} 
            //</span> // ★
            <Star 
              key={star} 
              star={star} 
              rating={rating}
              hover={hover}
              color={color}
              ratingClick={setRating}
              hoverEnter={setHover}
              hoverLeave={setHover}
            />
        ))}
    </div>
    {rating > 0 && <p className="feedback">{feedbackMessages[rating -1]}</p>}
  </div>
  );
}

// export default makes the component available for import in other files without using curly braces
export default Rating;