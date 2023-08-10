import Star from "./Star";


const StarRating = () => { 
  return (
    <>
      {new Array().fill(0).map((n, i) => (
        <Star  />
      ))}
      <p>
        
      </p>
      {/* the p tag should have text content in this way {selectedStars} of {totalStars} */}
    </>
  );
};
export default StarRating;
