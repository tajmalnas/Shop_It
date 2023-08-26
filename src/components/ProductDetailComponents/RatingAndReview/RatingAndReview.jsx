/* eslint-disable react/prop-types */
import './RatingAndReview.css'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { useRef, useState } from 'react';
import ReviewCard from '../../ReviewCard/ReviewCard';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../FirebaseConfig/FirebaseConfig';
const RatingAndReview = (props) => {

    const reviewInfoRef = useRef('');
    const onChangeHandler = (e) => {
      reviewInfoRef.current = e.target.value;
    }

    var id = props.id;
    id = id.toString();
    console.log(id)
    const [value, setValue] = useState(1);

    const clickHandler = async (e) => {
      e.preventDefault();
      console.log(reviewInfoRef.current);
      console.log(value);
      try {
        const productDocRef = doc(db, 'products', id);
        const docSnapshot = await getDoc(productDocRef);
        if (docSnapshot.exists()) {
          const productData = docSnapshot.data();
          const updatedRating = productData.rating || [];
          updatedRating.push({ star: value, review: reviewInfoRef.current });
          await updateDoc(productDocRef, { rating: updatedRating });
          console.log('Review data added successfully.');
        } else {
          console.log('Product document does not exist.');
        }
      } catch (error) {
        console.error('Error adding review data:', error);
      }
    }

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
                  <textarea ref={reviewInfoRef} onChange={(e)=>onChangeHandler(e)}  placeholder='Write your review here...'></textarea>
                  <button onClick={clickHandler}>Submit</button>
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