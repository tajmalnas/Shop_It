import PaymentDetailForm from '../../Forms/PaymentDetailForm/PaymentDetailForm';
import CartCard from '../../components/CartCard/CartCard';
import './CartPage.css';
import Navbar from '../../components/LandingPageComponents/Navbar';
import { useEffect, useState } from 'react';
import { auth, db } from '../../FirebaseConfig/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from '../../redux/cart';
import { setTotalPrice } from '../../redux/totalPrice';
const CartPage = () => {
  
  const [user,setUser] = useState(null);
  const [authUser] = useAuthState(auth);

  useEffect(() => {
    if(authUser){
      setUser(authUser);
    }
  },[authUser])

  const [cartItems,setCartItems] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user && user.email) {
      const productDocRef = doc(db, 'users', user.email);
      const productDocSnap = getDoc(productDocRef);
      productDocSnap.then((doc) => {
        if (doc.exists()) {
          console.log(doc.data());
          setCartItems(doc.data().cart);
          dispatch(setCart(doc.data().cart));
          let total = 0;
          for(var i=0;i<doc.data().cart.length;i++){
            total = total + doc.data().cart[i].productPrice*doc.data().cart[i].productQuantity;
          }
          dispatch(setTotalPrice(total));
        }
      });
    }
  }, [dispatch, user]);
  const reduxCart = useSelector((state)=>(state.cart.value));
  console.log(cartItems);
  
  return (
    <>
    <Navbar/>
    <hr/>
    <div className='cartpage-section'>
        <div className='cart-card-container'>
            {reduxCart.map((item)=>{
                return <div key={item.id}> <CartCard key={item.id} id={item.id} name={item.productName} price = {item.productPrice} quantity = {item.productQuantity} image={item.productImage} /><hr/></div>
            })}
            <hr key={1}/>
        </div>
        <div className='cart-page-pay'>
            <PaymentDetailForm check={false} buy={100} />
        </div>
    </div>
    </>
  )
}

export default CartPage