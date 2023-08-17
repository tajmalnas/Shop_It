import './PaymentDetailForm.css'
import SelectCountry from '../../UI/SelectCountry'
const PaymentDetailForm = () => {
  return (
    <form className="payment-detail-form">
        <div className="subtotal-section">
            <div className="subtotal-text">Subtotal</div>
            <div className="subtotal-price">$100</div>
        </div>
        <hr/>
        <div className="shipping-section">
            <div className="shipping-text">Shipping</div>
            <div className="shipping-country">
                <div className="shipping-country-text">Country</div>
                <div className="shipping-country-dropdown"><SelectCountry/></div>
            </div>
            <div className="shipping-state">
                <div className="shipping-state-text">State</div>
                <div className="shipping-state-input">
                    <input type="text" placeholder="State"/>
                </div>
            </div>
            <div className="shipping-city">
                <div className="shipping-city-text">City</div>
                <div className="shipping-city-input">
                    <input type="text" placeholder="city"></input>
                </div>
            </div>
            <div className="shipping-postal">
                <div className="shipping-postal-text">Postal Code</div>
                <div className="shipping-postal-input">
                    <input type="number" placeholder='postal code'></input>
                </div>
            </div>
        </div>
        <hr/>
        <div className='coupon-code-section'>                <div className='coupon-code-text'>Coupon Code</div>
            <div className='coupon-code-input'>
                <input type="text" placeholder='coupon code'></input>
                <button>Apply</button>
            </div>
        </div>
        <hr/>
        <div className="total-section">
            <div className="total-text">Grand Total</div>
            <div className="total-price">$100</div>
        </div>
        <div className="payment-button">
            <button>Proceed to Payment</button>
        </div>
    </form>
  )
}
export default PaymentDetailForm