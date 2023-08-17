import './CartCard.css'

const CartCard = () => {
  return (
    <div className='cart-card'>
        
        <div className='cart-card-image-and-name'>
            <div className='cart-card-image'><img src='https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg'></img></div>
            <div className='cart-card-name'>Product Name</div>
        </div>
        <div className='cart-card-price-and-delete-and-quantity'>
            <div className='cart-card-price'>Price</div>
            <div className='cart-card-delete'><i className='pi pi-trash'></i></div>
            <div className='cart-card-quantity'>
                <div><i className='pi pi-minus'></i></div>
                <div className='cart-card-quantity-number'>1</div>
                <div><i className='pi pi-plus'></i></div>
            </div>
        </div>
        <div className='cart-card-total-price'>Total Price</div>
    </div>
  )
}

export default CartCard
