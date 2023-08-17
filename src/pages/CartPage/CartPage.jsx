import PaymentDetailForm from '../../Forms/PaymentDetailForm/PaymentDetailForm';
import CartCard from '../../components/CartCard/CartCard';
import './CartPage.css';
const CartPage = () => {
  return (
    <div className='cartpage-section'>
        <div className='cart-card-container'>
            <CartCard/>
        </div>
        <hr/>
        <div className='cart-page-pay'>
            <PaymentDetailForm/>
        </div>
    </div>
  )
}

export default CartPage