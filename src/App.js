
import Login from './pages/Login';
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout className={"min-h-screen"}>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </Layout>


  );
}

export default App;
