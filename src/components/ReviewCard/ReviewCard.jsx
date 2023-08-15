import './ReviewCard.css'
const ReviewCard = () => {
  return (
    <div className="review-card">
        <div className="review-card-img">
            <img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1391498.jpg&fm=jpg"></img>
        </div>
        <div className="review-card-info">
            <div className='review-info'>
                <h4>person Name</h4>
                <p>⭐⭐⭐⭐</p>
            </div>
            <div className='actual-review'>Review Review Review Review Review Review Review Review Review Review Review  </div>
        </div>
    </div>
  )
}

export default ReviewCard