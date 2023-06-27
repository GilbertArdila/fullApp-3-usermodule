import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { SearcherContext } from "../../context/index";
import { getCategories, getByCategory } from "../../api/APIServices";
import Layout from "../../components/layout/Layout";
import Card from "../../subComponents/card/Card";
import Loading from "../../components/loading/Loading";
import "./index.css";


const Products = () => {
  const context = useContext(SearcherContext);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const { category } = useParams();
  let categoryId = 0;

  const getCategoriesData = async () => {
    const response = await getCategories();
    setCategories(response);
  };

  const getProductsByCategory = async () => {
    const response = await getByCategory(categoryId);
    setProducts(response);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getCategoriesData();
  }, []);

  useEffect(() => {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].name === category) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        categoryId = categories[i].id;
      }
    }
    getProductsByCategory(categoryId);
  }, [categories]);

  const render = () => {
    if (context.searcher === "") {
      return (
        <div className="products__content">
          {products.map((product) => (
            <Card key={product.id} producto={product} />
          ))}
        </div>
      ) 
    } else {
      if (context.filteredData?.length > 0) {
        return (
          <div className="products__content">
            {context.filteredData?.map((product) => (
              <Card key={product.id} producto={product} />
            ))}
          </div>
        )
      } else {
        return (
          <div className="products__content">
            {products.map((product) => (
              <Card key={product.id} producto={product} />
            ))}
          </div>
        ) 
      }
    }
  };


  return (
    <Layout>
      <h3 className="products__title">Categoría {category}</h3>
      {products.length === 0 ? <Loading />:

      render()}
     
    </Layout>
  );
};

export default Products;
