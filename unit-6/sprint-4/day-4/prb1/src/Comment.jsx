import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";

const Comment = () =>{  
return(
  <div className="ratingcard">
  <h1></h1>
  {/* The above h1 tag should have the title of the rating */}
  <StarRating />
  <FaTrash  data-icon="trash"/>
  </div>
)
}
export default Comment