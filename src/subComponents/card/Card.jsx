import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import "./index.css";

const Card = ({ show }) => {
  Card.PropTypes = {
    show: PropTypes.bool.isRequired,
  };
  return (
    <div className="card">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/the-geek-store-9bbe6.appspot.com/o/afiche.webp?alt=media&token=428db821-8fcb-43cc-a45c-7e5332851294"
        alt="imagen"
      />
      <p className="card__title">Producto xyz</p>
      <p className="card__price">$ 60.00</p>
      {!show ?<NavLink className="card__link">Ver producto </NavLink>
      : <NavLink className="card__link">Ver más</NavLink>}
      
    </div>
  );
};

export default Card;
