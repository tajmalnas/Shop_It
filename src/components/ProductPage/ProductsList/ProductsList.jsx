import { useSelector } from 'react-redux'
import ProductCard from '../../../components/ProductCard/ProductCard'
import './ProductsList.css'

const ProductListing = () => {
    const Categories = useSelector((state)=>state.productlist.value)
  return (
    <>
    <div className='product-listing-section'>
        <div className='heading'>ProductListing</div>
        <div className='cards-grid'>
           {Categories.map((category) => (
            category.products.map((product) => (
              <ProductCard key={product.id} name={product.name} price={product.price} rating = {product.rating} img = {product.img} />
            ))
           ))}
        </div>
    </div>
    </>
  )
}

export default ProductListing
