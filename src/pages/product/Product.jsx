import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import axios from "axios";

import {URL} from "../../api/Url";
import "./index.css";
import Card from "../../subComponents/card/Card";

const Product = () => {
  const[product,setProduct] = useState([{}])
  const[similarProduct,setSimilarProduct] = useState([{}])
  const { id } = useParams();
 
  
  const getProduct = async () => {
    try {
      const response = await axios.get(`${URL}/geeks/${id}`)
      setProduct(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  const getByCategory = async () => {
    try {
      const response = await axios.get(`${URL}/geeks/category/${product.categoryId}`)
      setSimilarProduct(response.data);
    } catch (error) {
      console.log(error)
    }
  }



 

  useEffect(() => {
    getProduct();
    
  },[])
  useEffect(() => {
    getByCategory();

  },[product])

  

  return (
    <Layout>
        <div className="product__content">
          <div className="product__card">
            <img src={product.url} alt={product.name}/>
            <div className="product__card--text">
            <p className="product__card--title"> {product.name}</p>
            <p className="product__card--price">${product.price}</p>
            <p className="product__card--description">{product.description}</p>
           
            </div>
           </div>  
           <h3 className="product__similar--title">Productos similares</h3>
           <div className="product__similar">
             {similarProduct.map((product) => {
                return <Card key={product.id} id={product.id} />;
              })
              
             }
              
           </div>
        </div>
    </Layout>
    
  )
}

export default Product