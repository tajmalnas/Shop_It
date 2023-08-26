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


const ProductDesignPage = () => {

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                        <button className="add-to-cart">Add to Cart</button>
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