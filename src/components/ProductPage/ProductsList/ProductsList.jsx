import Categories from '../../../data/database';
import ProductCard from '../../../components/ProductCard/ProductCard'
import { useEffect } from 'react';


const ProductListing = () => {
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
    <>
        <div>ProductListing</div>
        <div>
           {Categories.map((category) => (
            category.products.map((product) => (
              <ProductCard key={product.id} name={product.name} price={product.price} rating = {product.rating} />
            ))
           ))}
        </div>
    </>
  )
}

export default ProductListing
