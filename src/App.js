
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
// import Footer from './Pages/SharedPage/Footer/Footer';
import Header from './Pages/SharedPage/Header/Header';
import Notfound from './Pages/SharedPage/Notfound/Notfound';

function App() {
  return (
    <div>

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        
        <Route path='/service/:serviceId' element={<Checkout></Checkout>} ></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*'element={<Notfound></Notfound>} ></Route>
      </Routes>

      

    </div>
  );
}

export default App;
