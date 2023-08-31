/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './CartCard.css'
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../FirebaseConfig/FirebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { updateDoc } from 'firebase/firestore';
import { useDispatch, useSelector} from 'react-redux';
import { setCart } from '../../redux/cart';
// import { toast } from 'react-hot-toast';
import { setTotalPrice } from '../../redux/totalPrice';
const CartCard = (props) => {

  const [quantity,setQuantity] = useState( props.quantity);
  
  const counter = (type) => {
    if(type === 'inc'){
      setQuantity(quantity+1);
    }
    else{
      if(quantity > 1){
        setQuantity(quantity-1);
      }
    }
  }

  const [user,setUser] = useState(null);
  const [authUser] = useAuthState(auth);

  const reduxOrder = useSelector((state)=>(state.orders.value));

  const dispatch = useDispatch();
  
  // const deleteItem = async () => {
  //   console.log('Attempting to delete:', props.name);
  //   toast.success('Item deleted successfully.');
  //   if (user && user.email) {
  //     console.log('User email:', user.email);
  //     const productDocRef = doc(db, 'users', user.email);
  //     const product = await getDoc(productDocRef);
  //     console.log('Product:', product);
  //     const newCart = product.data().cart;
  //     var updatedCart =[];
  //     for(var i=0;i<newCart.length;i++){
  //       if(newCart[i].productName !== props.name){
  //         updatedCart.push(newCart[i]);
  //       }
  //     }   
  //     console.log('Updated Cart:', updatedCart);
  //     try {
  //       await updateDoc(productDocRef, {
  //         cart:updatedCart
  //       });
  //       const updatedCartNew = (await getDoc(productDocRef)).data().cart;
  //       console.log('Updated Cart New:', updatedCartNew);
  //       dispatch(setCart(updatedCartNew));
  //       console.log('Item deleted successfully.');
  //       const productDocSnapshot = await getDoc(productDocRef);
  //       dispatch(setCart(productDocSnapshot.data().cart));
  //       console.log('Updated Cart Data:', productDocSnapshot.data().cart);
  //       console.log('Updated redux Data:', updatedCart);
  //     } catch (error) {
  //       console.error('Error deleting item:', error);
  //     }
  //     finally{
  //       let totalPrice = 0;
  //       for(var j=0;j<updatedCart.length;j++){
  //         totalPrice = totalPrice + updatedCart[j].productPrice*updatedCart[j].productQuantity;
  //       }
  //       dispatch(setTotalPrice(totalPrice));
  //     }
  //   }
  // }

  useEffect(() => {
    if (user && user.email) {
      const productDocRef = doc(db, 'users', user.email);
      const fetchCart = async () => {
        const productDocSnapshot = await getDoc(productDocRef);
        const userData = productDocSnapshot.data();
        if (userData && userData.cart) {
          dispatch(setCart(userData.cart));
        }
      };
      fetchCart();
    }
  }, [user,dispatch,reduxOrder]);

  useEffect(() => {
    if(authUser){
      setUser(authUser);
    }
  },[authUser]);

  useEffect(() => {
    if (user && user.email) {
      const productDocRef = doc(db, 'users', user.email);
  
      const updateCart = async () => {
        const productDocSnapshot = await getDoc(productDocRef);
        const userData = productDocSnapshot.data();
  
        if (userData && userData.cart) {
          const updatedCart = [...userData.cart]; 
  
          const productIndex = updatedCart.findIndex(product => product.productName === props.name);
  
          if (productIndex !== -1) {
            updatedCart[productIndex] = {
              ...updatedCart[productIndex],
              productPrice: props.price,
              productQuantity: quantity,
              productImage: props.image,
            };
  
            await updateDoc(productDocRef, {
              cart: updatedCart,
            });
          }
          let totalPrice = 0;
          for(var i=0;i<updatedCart.length;i++){
            totalPrice = totalPrice + updatedCart[i].productPrice*updatedCart[i].productQuantity;
          }
          dispatch(setTotalPrice(totalPrice));
        }
      };
      updateCart();
    }
  }, [quantity, user, props.name, props.price, props.image,dispatch]);
  
  
  return (
    <div className='cart-card-container'>
    <div className='cart-card'>
        
        <div className='cart-card-image-and-name'>
            <div className='cart-card-image'><img src={props.image}></img></div>
            <div className='cart-card-name'>{props.name}</div>
        </div>
        <div className='cart-card-price-and-delete-and-quantity'>
            <div className='cart-card-price'>${props.price}</div>
            <div className='cart-card-delete'><i className='pi pi-trash' style={{cursor:'pointer',color:'red'}} onClick={()=>props.chooseItem(props.name)}></i></div>
            <div className='cart-card-quantity'>
                <div><i className='pi pi-minus' style={{cursor:'pointer'}} onClick={()=>counter('dec')} ></i></div>
                <div className='cart-card-quantity-number'>{quantity}</div>
                <div><i className='pi pi-plus' onClick={()=>counter('inc')} style={{cursor:'pointer'}} ></i></div>
            </div>
        </div>
        <div className='cart-card-total-price'>{props.price * quantity}</div>
    </div>
    </div>
  )
}

export default CartCard
