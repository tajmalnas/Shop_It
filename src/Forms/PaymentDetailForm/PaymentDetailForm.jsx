/* eslint-disable react/prop-types */
import './PaymentDetailForm.css'
import SelectCountry from '../../UI/SelectCountry'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const PaymentDetailForm = (props) => {
    var price = 0;
    if (props.check === true){
        price = props.buy;
    }
    const totalPrice =useSelector((state)=>(state.totalPrice.value));
    useEffect(()=>{
        console.log(totalPrice);
    },[totalPrice])
    if (props.check === false){
        price = totalPrice;
    }
  return (
    <form className="payment-detail-form">
        <div className="subtotal-section">
            <div className="subtotal-text">Subtotal</div>
            <div className="subtotal-price">${price}</div>
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
                <input type="text" placeholder='currently no coupon code is applicable'></input>
                <button disabled={true}>Apply</button>
            </div>
        </div>
        <hr/>
        <div className="total-section">
            <div className="total-text">Grand Total</div>
            <div className="total-price">${price}</div>
        </div>
        <div className="payment-button">
            <button>Proceed to Payment</button>
        </div>
    </form>
  )
}
export default PaymentDetailForm