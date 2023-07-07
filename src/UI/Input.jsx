import './Input.css'

const Input = (props) => {
  const name = props.name;

  const class1 = "search-bar-"+name.toString();
    return (
    <input className={class1} value="search product"></input>  )
}

export default Input