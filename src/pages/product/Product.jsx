import { useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";



import { SearcherContext } from "../../context/index";
import "./index.css";
import Layout from "../../components/layout/Layout";
import { getProduct, getByCategory } from "../../api/APIServices";
import Card from "../../subComponents/card/Card";
import Loading from "../../components/loading/Loading"

const Product = () => {
  const context = useContext(SearcherContext);
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

  const render = () => {
    if(context.searcher === ""){
      return similarProduct?.map((item) => {
        return <Card producto={item} key={item.id} />;
      });
    }else{
      if(context.filteredData?.length > 0){
        return context.filteredData?.map((item) => {
          return <Card producto={item} key={item.id} />;
        });
      }else{
        return similarProduct?.map((item) => {
          return <Card producto={item} key={item.id} />;
        });
      }
    }
}


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
        <div className="products__content">
          {product.categoryId === undefined ? <Loading/> : render()}
        </div>
      </div>
    </Layout>
  );
};

export default Product;
