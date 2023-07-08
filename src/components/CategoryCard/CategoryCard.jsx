/* eslint-disable react/prop-types */
import './CategoryCard.css'
const CategoryCard = (props) => {
  return (
    <div className='card'>
        <div className='card-img'>
            <img src={props.url}></img>
        </div>
        <div className='card-text'>
            {props.text}
        </div>
    </div>
  )
}

export default CategoryCard;