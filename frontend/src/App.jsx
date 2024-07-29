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

import HeroSection from "./components/MianPage/HeroSection";
import Footer from "./components/Footer/Footer";
import { Image } from "@chakra-ui/react";
import HomePage from "./components/MianPage/HeroSection";

function App() {
  const [user, setUser] = useState("");

  return (
    <UserContextProvider value={{ user, setUser }}>
      <Router>
        <MainHeader />

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
          <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
        </Routes>
        
        <Footer />
      </Router>
    </UserContextProvider>
  );
}

export default App;
