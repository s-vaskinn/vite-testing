const Star = ( {star, rating, hover, color, ratingClick, hoverEnter, hoverLeave} ) => {
    return <span 
        onClick={() => ratingClick(star)}
        className="star"
        style={{color: star <= (hover || rating) ? color : "grey"}}
        onMouseEnter={() => hoverEnter(star)}
        onMouseLeave={() => hoverLeave(null)}
    > {'\u2605'} </span>;
};

export default Star;