import PaymentDetailForm from '../../Forms/PaymentDetailForm/PaymentDetailForm';
import CartCard from '../../components/CartCard/CartCard';
import './CartPage.css';
import Navbar from '../../components/LandingPageComponents/Navbar';
const CartPage = () => {
  return (
    <>
    <Navbar/>
    <hr/>
    <div className='cartpage-section'>
        <div className='cart-card-container'>
            <CartCard/>
            <hr/>
        </div>
        <div className='cart-page-pay'>
            <PaymentDetailForm/>
        </div>
    </div>
    </>
  )
}

export default CartPage