import { NavLink } from "react-router-dom";

import Layout from "../../layout/Layout"
import './index.css'

const NotFound = () => {
  return (
    <Layout>
        <h1>Oppps</h1>
<p className="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p>
<section className="error-container">
  <span><span>4</span></span>
  <span>0</span>
  <span><span>4</span></span>
</section>
<div className="link-container">

  <NavLink className='navlink' to={'/'}> Back </NavLink>
</div>
    </Layout>
  )
}

export default NotFound 