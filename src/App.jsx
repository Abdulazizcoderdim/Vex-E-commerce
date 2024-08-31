import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutUs1 from './components/aboutUs/AboutUs1';
import AboutUsPage from './components/aboutUs/AboutUsPage';
import AddressPage from './components/address/AddressPage';
import Address1 from './components/address/Adress1';
import Blog from './components/blog/Blog';
import BlogColumnPage from './components/blog/BlogColumnPage';
import BlogPage from './components/blog/BlogPage';
import BlogRightPage1 from './components/blog/BlogRightPage';
import Cart from './components/cart/Cart';
import CartPage from './components/cart/CartPage';
import CheckOut from './components/checkout/CheckOut';
import CheckOutPage from './components/checkout/CheckOutPage';
import Confirmation from './components/confirmation/ConfirmationPage';
import ContactUs1 from './components/contactUs/ContactUs';
import ContactUsPage from './components/contactUs/ContactUsPage';
import Dashboard1 from './components/dashboard/Dashboard';
import DashboardPage from './components/dashboard/DashboardPage';
import Faq1 from './components/faq/Faq1';
import FaqPage from './components/faq/FaqPage';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import Order from './components/order/Order';
import OrderPage from './components/order/OrderPage';
import PageError from './components/page404/PageError';
import Pricing1 from './components/pricing/Pricing1';
import PricingPage from './components/pricing/PricingPage';
import Product from './components/productCategory/Product';
import TrendProduct from './components/productCategory/TrendProduct';
import ProfileDetail1 from './components/profileDetail/ProfileDetail';
import ProfileDetailPage from './components/profileDetail/ProfileDetailPage';
import Shop from './components/shop/Shop';
import ShopPage from './components/shop/ShopPage';
import Sidebar from './components/sidebar/Sidebar';
import Slider1 from './components/slider/Slider';
import ComingSoon from './page/ComingSoon';
import Login from './page/Login';
import Signin from './page/Signin';

function App() {
  return (
    <div>
      <Sidebar />
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

function Content() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Slider1 />
              <Product />
              <TrendProduct />
            </div>
          }
        ></Route>
        <Route
          path="/shop"
          element={
            <div>
              <Shop />
              <ShopPage />
            </div>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <div>
              <CheckOut />
              <CheckOutPage />
            </div>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <div>
              <Cart />
              <CartPage />
            </div>
          }
        ></Route>
        <Route
          path="/pricing"
          element={
            <div>
              <Pricing1 />
              <PricingPage />
            </div>
          }
        ></Route>
        <Route
          path="/confirmation"
          element={
            <div>
              <Confirmation />
            </div>
          }
        ></Route>
        <Route
          path="/contactUs"
          element={
            <div>
              <ContactUs1 />
              <ContactUsPage />
            </div>
          }
        ></Route>
        <Route
          path="/aboutUs"
          element={
            <div>
              <AboutUs1 />
              <AboutUsPage />
            </div>
          }
        ></Route>
        <Route
          path="/page404"
          element={
            <div>
              <PageError />
            </div>
          }
        ></Route>
        <Route
          path="/comingSoon"
          element={
            <div>
              <ComingSoon />
            </div>
          }
        ></Route>
        <Route
          path="/faq"
          element={
            <div>
              <Faq1 />
              <FaqPage />
            </div>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <div>
              <Dashboard1 />
              <DashboardPage />
            </div>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <div>
              <Order />
              <OrderPage />
            </div>
          }
        ></Route>
        <Route
          path="/address"
          element={
            <div>
              <Address1 />
              <AddressPage />
            </div>
          }
        ></Route>
        <Route
          path="/profileDetail"
          element={
            <div>
              <ProfileDetail1 />
              <ProfileDetailPage />
            </div>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <div>
              <Login />
            </div>
          }
        ></Route>
        <Route
          path="/sigin"
          element={
            <div>
              <Signin />
            </div>
          }
        ></Route>
        <Route
          path="/blogleftpage"
          element={
            <div>
              <Blog />
              <BlogPage />
            </div>
          }
        ></Route>
        <Route
          path="/blogrightpage"
          element={
            <div>
              <Blog />
              <BlogRightPage1 />
            </div>
          }
        ></Route>
        <Route
          path="/blogColumn"
          element={
            <div>
              <Blog />
              <BlogColumnPage />
            </div>
          }
        ></Route>
        <Route
          path="/sigin"
          element={
            <div>
              <Signin />
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
