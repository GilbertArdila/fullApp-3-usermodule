import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { SearcherContext } from "../../context/index";
import "./index.css";
import Footer from "../footer/Footer";

const Navbar = () => {
  const context = useContext(SearcherContext);
  const location = useLocation();

  //cleaning searcher when page changing
  useEffect(() => {
    context.setSearcher("");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

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
          <input
            type="search"
            placeholder="Buscar"
            value={context.searcher}
            onChange={(e) => {
              context.setSearcher(e.target.value);
            }}
          />
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
