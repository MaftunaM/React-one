import Car from './Car/Car'

function App() {
  
  return (
    <div className="App">
      
      <h1 style={{ color: 'rgb(246, 122, 143)', fontSize:"47px"}}>heloow</h1>
     <Car name="audi" year="2022" price= "15000" />
     <Car name="Ford" year="2021" price= "6000" />
     <Car name="Mazda" year="2020" price= "5000" />
    </div>
  );
}

export default App;
