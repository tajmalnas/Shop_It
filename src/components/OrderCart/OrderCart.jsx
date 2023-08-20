import './OrderCart.css'
const OrderCart = () => {
  return (
    <div className='cart-card-container'>
    <div className='cart-card'>
        
        <div className='cart-card-image-and-name'>
            <div className='cart-card-image'><img src='https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg'></img></div>
            <div className='cart-card-name'>Product Name</div>
        </div>
        <div className='cart-card-price-and-delete-and-quantity'>
            <div className='cart-card-price'>Price</div>
            <div className='cart-card-quantity'>
                <div className='cart-card-quantity-number'>1</div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Quantity</div>
            </div>
        </div>
        <div className='cart-card-total-price'>Total Price</div>
    </div>
    </div>
  )
}

export default OrderCart