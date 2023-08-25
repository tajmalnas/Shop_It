/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductDetail } from '../../redux/productDetail';

const ProductCard = (props) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const productDetail = useSelector((state)=>(state.productDetail.value));
    const clickHandler = (id,name,price,img,description,rating) => {
      console.log(productDetail);
      dispatch(setProductDetail({id,name,price,img,description,rating}));
      navigate(`/product-detail/${id}${encodeURIComponent(name)}`);
    }

    useEffect(() => {
        const cards = document.querySelectorAll(".card-product");
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting);
            });
        }, {
            threshold: 0.5
        }
        );

        cards.forEach(card => {
            observer.observe(card);
        });
        } 
    );
  return (
    <div className='card-product' onClick={()=>clickHandler(props.id,props.name,props.price,props.img,props.description,props.rating)}>
        <div className='card-product-img'>
            <img src={props.img}></img>
            <div className='like'><i className='pi pi-heart'></i></div>
        </div>
        <div className='card-product-detail'>
            <div className='details'>
                <div className='name'>{props.name}</div>
                <div className='description'>{props.description}</div>
                <div className='rating'>
                    {/* <div className='star'>""</div> */}
                    <div className='rating-number'>Rating:-({props.rating})</div>
                </div>
                <button className='add-to-cart'>Add to Cart</button>
            </div>
            <div className='price'>${props.price}</div>
        </div>
    </div>
  )
}

export default ProductCard