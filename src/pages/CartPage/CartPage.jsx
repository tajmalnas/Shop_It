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
const CartPage = () => {
  
  const [user,setUser] = useState(null);
  const [authUser] = useAuthState(auth);
  const reduxCart = useSelector((state)=>(state.cart.value));

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
        }
      });
    }
  }, [dispatch, user]);

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