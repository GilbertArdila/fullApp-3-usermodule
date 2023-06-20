import { NavLink,useLocation,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { URL } from "../../api/Url";
import "./index.css";

const Card = ({ id }) => {
  Card.PropTypes = {
    id: PropTypes.node.isRequired,
    
  };

  const [data, setData] = useState([]);
  const location = useLocation();

  const getData = async () => {
    try {
      const response = await axios.get(`${URL}/geeks/${id}`);
      setData(response.data);
     
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  

  return (
    <div className="card">
      <img src={data.url} alt={data.name} />

      <p className="card__title">{data.name}</p>
      <p className="card__price">${data.price}</p>
     <NavLink to={`/product/${id}`} className="card__link" >
        Ver producto
      </NavLink>
      
    </div>
  );
};

export default Card;
