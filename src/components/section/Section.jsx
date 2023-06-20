import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { URL } from "../../api/Url";
import Card from "../../subComponents/card/Card";
import "./index.css";

const Section = ({ category, id }) => {
  Section.PropTypes = {
    category: PropTypes.node.isRequired,
    id: PropTypes.node.isRequired,
  };
  const [data, setData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isMobile = windowWidth >= 320;
  const isTablet = windowWidth >= 768;
  const isDesktop = windowWidth >= 1024;
  let cardNumber = isDesktop ? 6 : isTablet ? 4 : 4;

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  //getting  products by category
  const getData = async () => {
    try {
      const response = await axios.get(`${URL}/geeks/category/${id}`);
      setData(response.data);
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="section">
      <div className="section__title">
        <h3>{category}</h3>
        <NavLink to={`/products/${category}`} className="section__title--link">
          Ver todo &rarr;{" "}
        </NavLink>
      </div>
      <div className="section__card">
        {data.slice(0, cardNumber).map((product) => {
          return <Card key={product.id} id={product.id}  />;
        })}
      </div>
    </section>
  );
};

export default Section;