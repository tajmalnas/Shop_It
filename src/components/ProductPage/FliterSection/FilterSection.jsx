/* eslint-disable no-undef */
import './FilterSection.css'
import Categories from '../../../data/database'
const FilterSection = () => {
  return (
    <div className='filter-section'>
        <div className='filter-container'>
            <div className='filter-shower'>
                <div className='filter-shower-text'>Filters</div>
                <div className='filter-shower-clear'>Clear All</div>
            </div>
            <div className='category'>
                <h4>Category</h4>
                {Categories.map((category) => (
                    <div className='category-item' key={category.id}>
                        <input type='checkbox' id={category.id} name={category.name} value={category.name}></input>
                        <label htmlFor={category.name}>{category.name}</label>
                    </div>
                ))}
            </div>
            <div className='price'>
                <h4>Price</h4>
                <input type='checkbox' id='price1' name='price1' value='price1'></input>
                <label htmlFor='price1'>0-100</label>
                <br/>
                <input type='checkbox' id='price2' name='price2' value='price2'></input>
                <label htmlFor='price2'>100-200</label>
                <br/>
                <input type='checkbox' id='price3' name='price3' value='price3'></input>
                <label htmlFor='price3'>200-300</label>
                <br/>
                <input type='checkbox' id='price4' name='price4' value='price4'></input>
                <label htmlFor='price4'>300-400</label>
                <br/>
                <input type='checkbox' id='price5' name='price5' value='price5'></input>
                <label htmlFor='price5'> {' > '}500</label>
            </div>
            <div className='rating'>
                <h4>Rating</h4>
                <input type='checkbox' id='rating1' name='rating1' value='rating1'></input>
                <label htmlFor='rating1'>Less Rated</label>
                <br/>
                <input type='checkbox' id='rating2' name='rating2' value='rating2'></input>
                <label htmlFor='rating2'>Average rated</label>
                <br/>
                <input type='checkbox' id='rating3' name='rating3' value='rating3'></input>
                <label htmlFor='rating3'>Highly Rated</label>
            </div>
        </div>
    </div>
  )
}

export default FilterSection