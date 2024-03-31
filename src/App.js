import "./App.css";
import { Navbar } from "./component/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Shop } from "./page/shop";
import { Cart } from "./page/cart";
import { ShopCategory } from "./page/shopCategory";
import { LoginSignup } from "./page/loginSignup";
import { Product } from "./page/product";
import { Footer } from "./component/Footer/Footer";
import men_banner from "./component/Assets/banner_mens.png";
import woman_banner from "./component/Assets/banner_women.png";
import kid_banner from "./component/Assets/banner_kids.png";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Shop/>} />
          <Route path="/cart" element = {<Cart/>} />
          <Route path="/product" element = {<Product/>} >
            <Route path= ':productId' element = {<Product/>}/>
          </Route>
    
          <Route path="/login" element = {<LoginSignup/>} />
          <Route path="/mens" element = {<ShopCategory banner = {men_banner}  category = "men"/>} />
          <Route path="/womens" element = {<ShopCategory banner = {woman_banner} category = "women"/>} />
          <Route path="/kids" element = {<ShopCategory banner = {kid_banner} category = "kid"/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
