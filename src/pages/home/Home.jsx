import { useState, useEffect } from "react";

import Layout from "../../layout/Layout";
import Hero from "../../components/hero/Hero";
import Section from "../../components/section/Section";
import { getCategories } from "../../api/APIServices";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const categories = await getCategories();
    setData(categories);
  };

  return (
    <Layout>
      <Hero />
      {data.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        data.map((item) => {
          return <Section key={item.id} category={item.name} id={item.id} />;
        })
      )}
    </Layout>
  );
};

export default Home;
