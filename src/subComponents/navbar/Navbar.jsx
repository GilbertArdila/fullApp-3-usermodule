import { Outlet } from "react-router-dom"

import "./index.css"
import Footer from "../footer/Footer"

const Navbar = () => {
  return (
    <>
    <div className="navbar">Navbar</div>
    <section>
       <Outlet ></Outlet>
       <Footer></Footer>
    </section>
    </>
  )
}

export default Navbar