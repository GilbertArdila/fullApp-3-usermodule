import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import Card from "../../subComponents/card/Card";
import "./index.css";

const Section = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isDesktop = windowWidth > 1024;
  return (
    <section className="section">
      <div className="section__title">
        <h3>Star Wars</h3>
        <NavLink className="section__title--link">Ver todo &rarr; </NavLink>
      </div>
      <div className="section__card">
        {!isDesktop ? (
          <>
            <Card show={false} />
            <Card show={false} />
            <Card  show={false}/>
            <Card show={false}/>
          </>
        ) : (
          <>
            <Card show={false}/>
            <Card show={false}/>
            <Card show={false}/>
            <Card show={false}/>
            <Card show={false}/>
            <Card show={false}/>
          </>
        )}
      </div>
    </section>
  );
};

export default Section;
