import './ProductListing.css'
import Navbar from '../../components/LandingPageComponents/Navbar'
import FilterSection from '../../components/ProductPage/FliterSection/FilterSection'
import ProductList from '../../components/ProductPage/ProductsList/ProductsList'

const ProductListing = () => {
  return (
    <>
        <Navbar/>
        <hr/>
        <div className="product-listing-page-containe">
          <FilterSection/>
          <ProductList/>
        </div>
    </>
  )
}

export default ProductListing
