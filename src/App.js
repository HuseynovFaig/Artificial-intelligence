import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
// {} obyektin parcalanmasi
import { Fragment } from 'react';

//router
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';

import Navbar from './components/Navbar';




function App() {
  return (
<Fragment>
<div className='loader'>
  <div className='bar bar1'></div>
  <div className='bar bar2'></div>
  <div className='bar bar3'></div>
  <div className='bar bar4'></div>
  <div className ='bar bar5'></div>
</div>

  <BrowserRouter>
<Navbar/>
  <Routes>
<Route path='/' element={<Home/>}/>



</Routes>

</BrowserRouter>
</Fragment>
  );
}

export default App;