import { useContext } from "react";


import { SearcherContext } from "../../context/index";
import Layout from "../../components/layout/Layout";
import Hero from "../../components/hero/Hero";
import Section from "../../components/section/Section";
import Loading from "../../components/loading/Loading";
import Card from "../../subComponents/card/Card";

const Home = () => {
  const context = useContext(SearcherContext);

  const render = () => {
    if (context.searcher === "") {
      return context.categories?.map((item) => {
        return <Section key={item.id} category={item.name} id={item.id} />;
      });
    } else {
      if (context.filteredData?.length > 0) {
        return ( <div className="products__content">
          {context.filteredData?.map((product) => (
            <Card key={product.id} producto={product} />
          ))}
        </div>)
      } else {
        return context.categories?.map((item) => {
          return <Section key={item.id} category={item.name} id={item.id} />;
        });
      }
    }
  };

  return (
    <Layout>
      <Hero />
      {context.categories.length === 0 ? (
        <div style={{ marginLeft: "30px", marginTop: "30px", width: "100vw" }}>
          <Loading />
        </div>
      ) : (
        render()
      )}
    </Layout>
  );
};

export default Home;
