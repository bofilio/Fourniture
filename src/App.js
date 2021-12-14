import Login from './pages/Login';
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/login' exact element={<Login/>} />
      <Route path='/' exact element={<Home/>}/>
      </Routes>
      
   
  );
}

export default App;
