
import Login from './pages/Login';
import Home from './pages/Home'
<<<<<<< HEAD
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/login' exact element={<Login/>} />
      <Route path='/' exact element={<Home/>}/>

    </Routes>
      
   
=======
import { Route, Routes } from 'react-router-dom';

function App() {
  return ( 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
>>>>>>> 2e7a46a94b2c7e6ef70736794e916c3343c21fed
  );
}

export default App;
