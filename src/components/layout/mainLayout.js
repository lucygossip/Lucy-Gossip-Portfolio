import React from "react";
import '../../styles/layout.css'
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar'

const MainLayout = () => {
    return (
        <div className="layout">
          <header>
            <Navbar />
          </header>
          <main>
            <Outlet /> {/* Content specific to the route will be rendered here */}
          </main>
          <footer>My App Footer</footer>
        </div>
      );
}

export default MainLayout;