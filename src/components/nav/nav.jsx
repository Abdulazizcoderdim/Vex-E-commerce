import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
     <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SHOP
          </a>
          <ul className="dropdown-menu">
            <li className='li__page'>

              <li className="nav-item">
               <a className="nav-link disabled" aria-disabled="true">Pages</a>
               <li><hr className="dropdown-divider"/></li>
               <li><Link className="dropdown-item" to="/shop">SHOP</Link></li>
               <li><Link className="dropdown-item" to="/checkout">CHECKOUT</Link></li>
               <li><Link className="dropdown-item" to="/cart">CART</Link></li>
               <li><Link className="dropdown-item" to="/pricing">PRICING</Link></li>
               <li><Link className="dropdown-item" to="/confirmation">CONFIRMATION</Link></li>
              </li>

              

              <li className="nav-item">
               <a className="nav-link disabled" aria-disabled="true">Layout</a>
               <li><hr className="dropdown-divider"/></li>

               <li><a className="dropdown-item" href="#">PRODUCT <br />DETAILS</a></li>
               <li><a className="dropdown-item" href="#">SHOP WITH <br />SIDEBAR</a></li>
              </li>

              
            </li>
          </ul>
        </li>

      

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PAGES
          </a>
          <ul className="dropdown-menu">
            <li className='li__page'>

              <li className="nav-item">
               <a className="nav-link disabled" aria-disabled="true">Introduction</a>
               <li><hr className="dropdown-divider"/></li>
               <li><Link className="dropdown-item" to="/contactUS">CONTACT US</Link></li>
               <li><Link className="dropdown-item" to="/aboutUs">ABOUT US</Link></li>
               <li><Link className="dropdown-item" to="/page404">404 PAGE</Link></li>
               <li><Link className="dropdown-item" to="/comingSoon">COMING SOON</Link></li>
               <li><Link className="dropdown-item" to="/faq">FAQ</Link></li>
              </li>

              

              <li className="nav-item">
               <a className="nav-link disabled" aria-disabled="true">Dashboard</a>
               <li><hr className="dropdown-divider"/></li>
               <li><Link className="dropdown-item" to="/dashboard">USER INTERFACE</Link></li>
               <li><Link className="dropdown-item" to="/orders">ORDERS</Link></li>
               <li><Link className="dropdown-item" to="/address">ADDRESS</Link></li>
               <li><Link className="dropdown-item" to="/profileDetail">PROFILE DETAILS</Link></li>
              </li>


              <li className="nav-item">
               <a className="nav-link disabled" aria-disabled="true">Utility</a>
               <li><hr className="dropdown-divider"/></li>
               <li><Link className="dropdown-item" to="/login">LOGIN PAGE</Link></li>
               <li><Link className="dropdown-item" to="/sigin">SIGNIN PAGE</Link></li>
               <li><Link className="dropdown-item" to="#">PORGET PASSWORD</Link></li>
              </li>

              <li className='nav-item'>
                  <img width={"250px"}height={"200px"} src="../../../public/shop/header-img.jpg" alt="" />
              </li> 

              
            </li>
          </ul>
        </li>


        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            BLOG
          </a>
          <ul className="dropdown-menu">
            <li className='li__page'>

              <li className="nav-item">
               
               <li><Link className="dropdown-item" to="/blogleftpage">BLOG LEFT SIDEBAR</Link></li>
               <li><Link className="dropdown-item" to="/blogrightpage">BLOG RIGHT SIDEBAR</Link></li>
               <li><Link className="dropdown-item" to="#">BLOG FULL WIDTH</Link></li>
               <li><Link className="dropdown-item" to="/blogColumn">BLOG 2 COLUMNS</Link></li>
               <li><Link className="dropdown-item" to="#">BLOG SINGLE</Link></li>
              </li>
              
            </li>
          </ul>
        </li>

      

        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ELEMENTS
          </Link>
          <ul className="dropdown-menu">
            <li className='li__page'>

              <li className="nav-item">
               <li><Link className="dropdown-item" to="#">TYPOGRAPHY</Link></li>
               <li><Link className="dropdown-item" to="#">BUTTONS</Link></li>
               <li><Link className="dropdown-item" to="#">ALERTS</Link></li>
              </li>
            </li>
          </ul>
        </li>

      </ul>
    </div>
  </div>
</nav>
    );
};

export default Nav;