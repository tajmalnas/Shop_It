/* eslint-disable react/prop-types */
import './ProductCard.css'

const ProductCard = (props) => {
  return (
    <div className='card-product'>
        <div className='card-product-img'>
            <img src={props.img}></img>
            <div className='like'><i className='pi pi-heart'></i></div>
        </div>
        <div className='card-product-detail'>
            <div className='details'>
                <div className='name'>{props.name}</div>
                <div className='description'>{props.description}</div>
                <div className='rating'>
                    {/* <div className='star'>""</div> */}
                    <div className='rating-number'>Rating:-({props.rating})</div>
                </div>
                <button className='add-to-cart'>Add to Cart</button>
            </div>
            <div className='price'>${props.price}</div>
        </div>
    </div>
  )
}

export default ProductCard