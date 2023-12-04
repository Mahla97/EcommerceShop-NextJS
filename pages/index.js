import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Features from "@/components/Features";
import ProductsTab from "@/components/products/ProductsTab";
import Slider from "@/components/Slider";
import axios from "axios";
import { handleError } from "lib/heper";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Home = ({ productsTab, error }) => {
  useEffect(() => {
    error && toast.error(error)
  }, [error])

  return (
    <>
    <Slider/>
    <Features />
    {productsTab && <ProductsTab  tabs={productsTab}/>}
    <About/>
    <ContactForm/>
    </>
  )
}

export default Home;

export async function getServerSideProps() {
  try {
    const res = await axios.get("https://api.mahlamaleki.ir/api/products/products-tabs")
    // console.log(res.data.data);
    return {
      props: {
        productsTab: res.data.data
      }
    }
  } catch (err) {
    return {
      props: {
        error: handleError(err)
      }
    }
  }
}
