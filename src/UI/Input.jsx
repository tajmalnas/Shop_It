/* eslint-disable react/prop-types */
import './Input.css'
import 'primeicons/primeicons.css';
        

const Input = (props) => {
  const name = props.name;

   const but="but-"+name; 
  const class1 = "search-bar-"+name.toString();
    return (
    <div className='input-field'>
        <input className={class1} value="search product"></input>  
        <button className={but}><span className="pi pi-search"></span></button>
    </div>
    )
}

export default Input