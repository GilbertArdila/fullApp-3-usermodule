import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import propTypes from "prop-types";


import { getByCategory } from "../../api/APIServices";
import Card from "../../subComponents/card/Card";
import "./index.css";

// eslint-disable-next-line react/prop-types
const Section = ({ category, id }) => {

  Section.propTypes = {
    category: propTypes.node.isRequired,
    id: propTypes.node.isRequired,
  };
  const [product, setProduct] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  
  const isTablet = windowWidth >= 768;
  const isDesktop = windowWidth >= 1024;
  let cardNumber = isDesktop ? 6 : isTablet ? 4 : 4;

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  
  const getProducts = async () => {
    const products = await getByCategory(id);
    setProduct(products);
    
  };

  useEffect(() => {
    getProducts();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        {product.slice(0, cardNumber).map((product) => {
          return <Card key={product.id} producto={product} />;
        })}
      </div>
    </section>
  );
};

export default Section;
