import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import MenuDetails from "./pages/MenuDetails";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/admin/Products";
import AdminLayout from "./pages/admin/AdminLayout";
import AddProduct from "./pages/admin/AddProduct";
import { useContext } from "react";
import { AuthContextProvider } from "./context/AuthContextProvider";

const App = () => {

  const {isAuth, isAdmin} = useContext(AuthContextProvider)
  console.log(isAuth)

  const location = useLocation()

  const isAdminPage = location.pathname.startsWith('/admin')

  return (
    <div className="h-screen text-white relative">
      {
        isAuth && !isAdminPage &&<Navbar/>

      }
      <Routes>
        <Route path="/login" element={isAuth?<Home/>:<Login/>} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={isAuth?<Home/>:<Navigate to='/login'/>} />
        <Route path="/food/:id" element={isAuth?<MenuDetails />:<Navigate to='/login'/>} />
        <Route path="/cart" element={isAuth?<Cart />:<Navigate to='/login'/>} />
        <Route path="/checkout" element={<CheckOut />} />

        <Route path="/admin" element={isAuth && isAdmin?<AdminLayout />: isAuth? <Home/>:<Login/>} >
            <Route index element={<Products/>}/>
            <Route path="all-products" element={<Products/>}/>
            <Route path="add" element={<AddProduct/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
