import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import './Custom.css'
import Signup from './Pages/SignupSignin/Signup';
import Signin from './Pages/SignupSignin/Signin';
import Order from './Pages/Order/Order';
import RequireAuth from './Component/RequireAuth'


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/order/:productId' element={<RequireAuth>
          <Order></Order>
        </RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
