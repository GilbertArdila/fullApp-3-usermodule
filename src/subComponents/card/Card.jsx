import { NavLink } from "react-router-dom";
import propTypes from "prop-types";

import "./index.css";

// eslint-disable-next-line react/prop-types
const Card = ({ producto }) => {
  Card.propTypes = {
    producto: propTypes.node.isRequired,
  };
  // eslint-disable-next-line react/prop-types
  const { id, name, price, url } = producto;

  return (
    <div className="card">
      <img src={url} alt={name} />

      <p className="card__title">{name}</p>
      <p className="card__price">${price}</p>
      <NavLink to={`/product/${id}`} className="card__link">
        Ver producto
      </NavLink>
    </div>
  );
};

export default Card;
