import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./index.css";
import Layout from "../../layout/Layout";
import { getProduct, getByCategory } from "../../api/APIServices";
import Card from "../../subComponents/card/Card";

const Product = () => {
  const [product, setProduct] = useState([{}]);
  const [similarProduct, setSimilarProduct] = useState([{}]);
  const { id } = useParams();

  useEffect(() => {
    getOneProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getOneProduct = async () => {
    try {
      const response = await getProduct(id);
      setProduct(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductsByCategory = async () => {
    try {
      const response = await getByCategory(product.categoryId);
      setSimilarProduct(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsByCategory();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  return (
    <Layout>
      <div className="product__content">
        <div className="product__card">
          <img src={product.url} alt={product.name} />
          <div className="product__card--text">
            <p className="product__card--title"> {product.name}</p>
            <p className="product__card--price">${product.price}</p>
            <p className="product__card--description">{product.description}</p>
          </div>
        </div>
        <h3 className="product__similar--title">Productos similares</h3>
        <div className="product__similar">
          {product.categoryId === undefined ? (
            <p>...cargando</p>
          ) : (
            similarProduct.map((product) => {
              return <Card key={product.id} producto={product} />;
            })
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Product;
