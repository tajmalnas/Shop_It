/* eslint-disable no-undef */
import Navbar from "../../components/LandingPageComponents/Navbar"
import './ProductDesignPage.css'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from "react";
import ProductDetailsDetail from "../../components/ProductDetailComponents/ProductDetailsDetail/ProductDetailsDetail";
import RatingAndReview from "../../components/ProductDetailComponents/RatingAndReview/RatingAndReview";
import ProductDisscussion from "../../components/ProductDetailComponents/ProductDiscussion/ProductDisscussion";
import { useSelector } from "react-redux";
import {getIsAuthenticatedFromLocalStorage} from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db} from "../../FirebaseConfig/FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";

const ProductDesignPage = () => {

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [user, setUser] = useState(null);
    const [authUser] = useAuthState(auth);

    useEffect(() => {
        if (authUser) {
            setUser(authUser);
        }
    }, [authUser]);

    const productDetail = useSelector((state)=>(state.productDetail.value));
    console.log(productDetail);

    const tabOptions = [
        { label: "Details", component: <ProductDetailsDetail description = {productDetail.description} /> },
        { label: "Rating and Reviews", component: <RatingAndReview id = {productDetail.id} /> },
        { label: "Discussion", component: <ProductDisscussion id = {productDetail.id} /> },
    ];
    var [productDetail1, setProductDetail1] = useState({...productDetail,quantity:1});

    const counter = (type) => {
        if(type === "inc"){
            setProductDetail1({...productDetail1,quantity:productDetail1.quantity+1});
        }
        else{
            if(productDetail1.quantity > 1){
                setProductDetail1({...productDetail1,quantity:productDetail1.quantity-1});
            }
        }
    }

    const navigate = useNavigate();

    const addToCartHandler = async () => {
        if(!getIsAuthenticatedFromLocalStorage()){
            navigate("/account");
            toast.error("Please login to add to cart.");
        }
        else{
            console.log(productDetail1);
            toast.success('Successfully Added Product To Cart!')
            const productDocRef = doc(db, 'users', user.email);
            const docSnapshot = await getDoc(productDocRef);
            if (docSnapshot.exists()) {
                const userData = docSnapshot.data();
                const updatedCart = userData.cart || [];
                updatedCart.unshift({ productName: productDetail.name, productPrice: productDetail.price, productQuantity: productDetail1.quantity ,productImage:productDetail.img});
                await updateDoc(productDocRef, { cart: updatedCart });
                console.log('Cart data added successfully.');
            } else {
                console.log('User document does not exist.');
            }
        }
    }

    useEffect(()=>{
        setProductDetail1({...productDetail,quantity:1});
    },[productDetail]);

  return (
    <div>
        <Navbar/>
        <hr/>
        <div className="product-design-page">
            <div className="product-design-upper">
                <section className="product-design-upper-left">
                    <img src={productDetail.img}></img>
                </section>
                <section className="product-design-upper-right">
                    <h2 className="hh">{productDetail.name}</h2>
                    <p className="pp">⭐⭐⭐⭐</p>
                    <h3>${productDetail.price}</h3>
                    <hr/>
                    <h4>Description</h4>
                    <div className="sizes">
                        {productDetail.description}
                    </div>
                    <hr/>
                    <h4>Quantity</h4>
                    <div className="quantity">
                        <div className="button-div">
                            <button onClick={()=>counter("inc")}>+</button>
                            <p>{productDetail1.quantity}</p>
                            <button onClick={()=>counter("dec")}>-</button>
                        </div>
                        <button className="add-to-cart" onClick={addToCartHandler}>Add to Cart</button>
                        <button className="buy-now">Buy Now</button>
                    </div>
                </section>
            </div>
            <div className="product-design-lower">
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        {tabOptions.map((tab, index) => (
                            <Tab key={index} label={tab.label} />
                        ))}
                    </Tabs>
                </Box>
            </div>
            <div className="lower-tab-info">
                {tabOptions[value].component}
            </div>
        </div>
    </div>
  )
}

export default ProductDesignPage