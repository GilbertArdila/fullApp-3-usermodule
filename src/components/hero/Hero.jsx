import "./index.css";
import Button from "../../subComponents/button/Button";

import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <NavLink to={`/products/Consoles`}>
        <Button title={"Ver consolas"}/>
      </NavLink>
      
    </div>
  );
};

export default Hero;
