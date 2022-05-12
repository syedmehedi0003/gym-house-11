import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '.././src/Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Blog from './Pages/Blog/Blog';
import Services from './Pages/Home/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import AddProduct from '../src/Pages/AddProduct/AddProduct';
import ManageProduct from './Pages/ManageProduct/ManageProduct';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import DeliveredItem from './Pages/DeliveredItem/DeliveredItem';
import MyItems from './Pages/MyItems/MyItems';



function App() {
  return (
    <div className="App">
      <Header></Header>


      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        {/* <Route path="/service/:serviceId" element={<ServiceDetail>
        </ServiceDetail>}></Route> */}

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="/addproduct" element={
          <RequireAuth>
            <AddProduct></AddProduct>
          </RequireAuth>
        }></Route>
        <Route path="/manageproduct" element={
          <RequireAuth>
            <ManageProduct></ManageProduct>
          </RequireAuth>
        }></Route>
        <Route path="/updateproduct/:id" element={
          <RequireAuth>
            <UpdateProduct></UpdateProduct>
          </RequireAuth>
        }></Route>
        <Route path="/delivered/:id" element={
          <RequireAuth>
            <DeliveredItem></DeliveredItem>
          </RequireAuth>
        }></Route>
        <Route path="/myitems" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>


      <div className='mt-5'>
        <Footer></Footer></div>
    </div>
  );
}

export default App;
