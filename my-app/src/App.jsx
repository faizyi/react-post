import logo from './logo.svg';
import './App.css';
import Post from './products/components/Post/post'
import Button from './../src/products/components/button/button'
// import { Button } from '@mui/material';
// import cars from './../src/cars/960x0.webp'

function App() {

  return (
    <div className='post'>

      <Post carsImg={require('./../src/cars/960x0.webp')} />
      <Post carsImg={require('./../src/cars/2024-rolls-royce-phantom-102-64bad70ba7661.jpg')} />
      <Post carsImg={require('./../src/cars/106109083-156752053507004_chiron_dynamic_front_print.jpg')} />
    </div>

    // <div className='button'>
    //   <Button color='white' bgcolor='black' value='submit'/>
    //   <Button color='white' bgcolor='black' value='signup'/>
    //   <Button color='white' bgcolor='black' value='login'/>
    // </div>
  )
 

  // // return (
  
  //   // <div className="App">
  //   //   {
  //   //     products.map((data)=>{
  //   //       return <img src={watch} alt="" /> ;
  //   //     })
  //   //   }
  //     {/* <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
       
  //       </a>

  //       <ul>
  //         {
  //           arr.map((v,i)=>{
  //             return <li key={i}>{v}</li>
  //           })
  //         }
  //       </ul>
  //     </header> */}
  //   // </div>
  // // );
}

export default App;
