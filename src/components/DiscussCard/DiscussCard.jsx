import './DiscussCard.css'
const DiscussCard = () => {
  return (
    <div className="discuss-card">
        <div className="discuss-card-img">
            <img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1391498.jpg&fm=jpg"></img>
        </div>
        <div className="discuss-card-info">
            <div className='discuss-info'>
                <h4>person Name</h4>
            </div>
            <div className='actual-discuss'>Discuss Discuss Discuss Discuss Discuss Discuss Discuss Discuss Discuss </div>
            <div className='discuss-like'>
            <i className='pi pi-heart'></i>
            </div>
        </div>
    </div>
  )
}

export default DiscussCard