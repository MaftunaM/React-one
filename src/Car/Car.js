import './Car.css'

function Car(props) {
    const id = Math.random()
   const randomColor = Math.floor(Math.random() * 10000);
    return(
        <div className='car'   style={{ backgroundColor: "#" + `${randomColor}` }}>
        <h2>Name:  {props.name}</h2>
        <p>Year:  {props.year}</p>
        <p>Price:  {props.price}</p>
        <small>ID: {id}</small>
        </div>
        
    )
}
 export default Car