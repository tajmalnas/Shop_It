/* eslint-disable react/prop-types */
import './CategoryCard.css'
const CategoryCard = (props) => {
  const placeholderImage = 'https://images.unsplash.com/photo-1511285605577-4d62fb50d2f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'
      
  const onImageError = (e) => {
    e.target.src = placeholderImage
  }


  return (
    <div className='card'>
        <div className='card-img'>
            <img src={props.url ? props.url : placeholderImage} onError={onImageError} ></img>
        </div>
        <div className='card-text'>
            {props.text}
        </div>
    </div>
  )
}

export default CategoryCard;