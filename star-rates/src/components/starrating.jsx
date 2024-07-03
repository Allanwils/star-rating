
import {FaStar} from 'react-icons/fa';


// eslint-disable-next-line react/prop-types
function StarRating ({noOfStars = 5}){

    return <div className="star-rating">
        {
            [...Array(noOfStars)].map((_, index) => {
                return <FaStar key={index} />
            })
        }
    </div>
}



export default StarRating;