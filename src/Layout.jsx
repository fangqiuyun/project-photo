import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from './components/Footer';

const Layout = () => {
  return (
   <div>
     <nav>
        <ul>
            <li>
                <Link to="/">首页</Link>
            </li>
            <li>
                <Link to="/about">关于这个网站</Link>
            </li>
        </ul>
    </nav>
    <Outlet />
    <Footer />
   </div>
  )
}

export default Layout