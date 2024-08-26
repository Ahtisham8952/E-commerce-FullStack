import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Products from "./components/Products";
import Cart from "./components/Cart";
import MainHeader from "./components/Header/MainHeader";
import SignupForm from "./components/signup/SignupForm";
import NavBar from "./components/Navbar";
import { useState } from "react";
import { UserContextProvider } from "./context/UserContextProvider";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";
import { SigninForm } from "./components/Login/Login";
import ProductDetails from "./components/ProductDetail/ProductDetails";


import Footer from "./components/Footer/Footer";
import { Image } from "@chakra-ui/react";
import HomePage from "./components/MianPage/HomePage";
import TopHeaderBar from "./components/Header/TopHeaderBar";
import Checkout from "./components/Checkout/CheckOut";
import CheckOut from "./components/Checkout/CheckOut";
import OrderConfirmation from "./components/Checkout/OrderConfirmation";


function App() {
  const [user, setUser] = useState("");

  return (
    <UserContextProvider value={{ user, setUser }}>
      <Router>
        
        <MainHeader />
        <Cart />
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<SigninForm />} />
          <Route path="/products" element={<Products />} />

          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route
            path="/profile"
            element={<ProtectedRoute element={<Profile />} />}
          />
          
          
          <Route path="/Checkout" element={<ProtectedRoute element={<CheckOut />} />} />
          <Route path="/OrderConfirmation" element={<ProtectedRoute element={<OrderConfirmation />} />} />
        </Routes>
        
        <Footer />
      </Router>
    </UserContextProvider>
  );
}

export default App;
