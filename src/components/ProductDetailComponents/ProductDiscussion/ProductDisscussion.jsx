/* eslint-disable react/prop-types */
import { useRef } from 'react';
import DiscussCard from '../../DiscussCard/DiscussCard'
import './ProductDisscussion.css'
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../FirebaseConfig/FirebaseConfig';
const ProductDisscussion = (props) => {
  var id = props.id;
  id = id.toString();
  console.log(id)

  const discussRef = useRef('');

  const changekHandler = (e) => {
    e.preventDefault();
    discussRef.current = e.target.value;
    console.log(discussRef.current);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(discussRef.current);
    try {
      const productDocRef = doc(db, 'products', id);
      const docSnapshot = await getDoc(productDocRef);
      if (docSnapshot.exists()) {
        const productData = docSnapshot.data();
        const updatedDiscuss = productData.discuss || [];
        updatedDiscuss.push({ discuss: discussRef.current });
        await updateDoc(productDocRef, { discuss: updatedDiscuss });
        console.log('Discuss data added successfully.');
      } else {
        console.log('Product document does not exist.');
      }
    } catch (error) {
      console.error('Error adding discuss data:', error);
    }
  }

  return (
    <div className='discussion'>
        <div className="discussion-upper">
            <form onSubmit={(e)=>submitHandler(e)}>
                <div className='review-2'>
                  <textarea ref={discussRef} onChange={(e)=>changekHandler(e)} placeholder='discuss here...'></textarea>
                  <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
        <div className="discussion-lower">
            {Array.from({ length: 5 }).map((_, index) => (
            <DiscussCard key={index} />
            ))}
        </div>
    </div>
  )
}

export default ProductDisscussion