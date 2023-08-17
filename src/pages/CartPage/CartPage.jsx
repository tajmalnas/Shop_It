import CartCard from '../../components/CartCard/CartCard';
import './CartPage.css';
const CartPage = () => {
  return (
    <div className='cartpage-section'>
        <div className='cart-card-container'>
            <CartCard/>
        </div>
        <div className='cart-page-pay'>payment</div>
    </div>
  )
}

export default CartPage