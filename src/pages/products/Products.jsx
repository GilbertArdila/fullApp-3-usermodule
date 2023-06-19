import { useEffect, useState } from "react";


import Layout from "../../layout/Layout";
import Card from "../../subComponents/card/Card";
import "./index.css";

const Products = () => {
 

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isDesktop = windowWidth >= 1024;
  const isTablet = windowWidth >= 768;
  const isMobile = windowWidth >= 320;
  let cardNumber = 0;

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isDesktop) {
    cardNumber = 12;
  } else if (isTablet) {
    cardNumber = 8;
  } else if (isMobile) {
    cardNumber = 4;
  }

  return (
    <Layout>
      <h3 className="products__title">Categoría Consolas</h3>
      <div className="products__content">
      {Array.from({ length: cardNumber }).map((_, index) => (
        <Card key={index} show={true} />
      ))}
      </div>
    </Layout>
  );
};

export default Products;
