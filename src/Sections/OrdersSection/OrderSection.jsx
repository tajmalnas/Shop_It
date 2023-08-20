import OrderCart from '../../components/OrderCard/OrderCard'
import './OrderSection.css'
const OrderSection = () => {
  return (
    <div className='order-section'>
        <div className='heading'>
            Order Section
        </div>
        <div className='order-section-container'>
            <OrderCart/>
            <hr/>
        </div>
    </div>
  )
}

export default OrderSection