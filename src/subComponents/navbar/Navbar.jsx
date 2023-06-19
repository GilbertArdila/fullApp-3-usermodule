import { Outlet, NavLink } from "react-router-dom";

import "./index.css";
import Footer from "../footer/Footer";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__content">
          <NavLink to={"/"}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/the-geek-store-9bbe6.appspot.com/o/Logo.webp?alt=media&token=a957818f-a06e-4a98-b78b-93d314c23a48"
              alt="Logo"
            />
          </NavLink>
          <input type="search" placeholder="Buscar" />
        </div>
      </div>
      <section>
        <Outlet></Outlet>
        <Footer></Footer>
      </section>
    </>
  );
};

export default Navbar;
