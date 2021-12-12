
import Login from './pages/Login';
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';

function App() {
  return ( 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
  );
}

export default App;
