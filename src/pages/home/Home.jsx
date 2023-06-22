import { useState, useEffect } from "react";

import Layout from "../../layout/Layout";
import Hero from "../../components/hero/Hero";
import Section from "../../components/section/Section";
import Loading from "../../components/loading/Loading";
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
        <div style={{width:'100vw',height:'100vh', margin:'30px 0 0 20px'}}>
          <Loading />
        </div>
       
      ) : (
        data.map((item) => {
          return <Section key={item.id} category={item.name} id={item.id} />;
        })
      )}
    </Layout>
  );
};

export default Home;
