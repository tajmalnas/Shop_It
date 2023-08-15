import DiscussCard from '../../DiscussCard/DiscussCard'
import './ProductDisscussion.css'
const ProductDisscussion = () => {
  return (
    <div className='discussion'>
        <div className="discussion-upper">
            <form>
                <div className='review-2'>
                  <textarea placeholder='Write your point of view here...'></textarea>
                  <button>Submit</button>
                </div>
            </form>
        </div>
        <div className="discussion-lower">
            {Array.from({ length: 5 }).map((_, index) => (
            <DiscussCard key={index} />
            ))}
        </div>
    </div>
  )
}

export default ProductDisscussion