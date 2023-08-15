import './RatingAndReview.css'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import ReviewCard from '../../ReviewCard/ReviewCard';
const RatingAndReview = () => {
    const [value, setValue] = useState(1);
  return (
    <div className='rate-and-review'>
        <div className="rate-and-review-upper">
            <form>
                <div className='rate'>
                    <label>Rate this product</label>
                    <Box sx={{'& > legend': { mt: 2 },}}>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </Box> 
                </div>
                <div className='review'>
                  <textarea placeholder='Write your review here...'></textarea>
                  <button>Submit</button>
                </div>
            </form>
        </div>
        <div className="rate-and-review-lower">
            {Array.from({ length: 5 }).map((_, index) => (
            <ReviewCard key={index} />
            ))}
        </div>
    </div>
  )
}

export default RatingAndReview