import { useState,useEffect } from "react";
import axios from "axios";
import {URL} from "../../api/Url";
import Layout from "../../layout/Layout";
import Hero from "../../components/hero/Hero";
import Section from "../../components/section/Section";

const Home = () => {
  const [data, setData] = useState([])
  
  const getData = async () => {
    try {
      const response = await axios.get(`${URL}/categories`)
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData();
    
  }, [])




  return (
    <Layout>
        <Hero />
        {data.map((item) => {
          return <Section key={item.id} category={item.name} id={item.id} />
        }
        )}
    </Layout>
  
  )
}

export default Home 