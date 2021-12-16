import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import { Route,Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Routes>
      <Route path='/login' exact element={<Login/>} />
      
      <Route path='/' exact element={<Layout/>}>
        <Route path='home' exact element={<Home/>}/>
        <Route path='about' exact element={<About/>}/>
        <Route path='category' exact element={<Category/>}/>
        <Route path='productdetail' exact element={<ProductDetail/>}/>
      </Route>
      
    </Routes>
      
   
  );
}

export default App;
