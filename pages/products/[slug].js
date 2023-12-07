import axios from "axios";
import { handleError, numberFormat } from "lib/helper";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";



const ProductPage = ({singleProduct , error}) => {

    const [quantity , setQuantity]= useState(1)

    useEffect(()=>{
        error && toast.error(error)
    },[error])

    

    return (
            <>
            {singleProduct && 
            <section className="single_page_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="row gy-5">
                            <div className="col-sm-12 col-lg-6">
                                <h3 className="fw-bold mb-4">{singleProduct.name}</h3>
                                <h5>
                            {singleProduct.is_sale ? (
                                <>
                                    <span>{numberFormat(singleProduct.sale_price)}</span>
                                    <del className="me-1">{numberFormat(singleProduct.price)}</del>
                                </>
                            ) : (
                                <span>
                                    {numberFormat(singleProduct.price)}
                                </span>
                            )}
                            <span>تومان</span>
                        </h5>
                                <p>{singleProduct.description}</p>

                                <div className="mt-5 d-flex">
                                    <button className="btn-add">افزودن به سبد خرید</button>
                                    <div className="input-counter ms-4">
                                        <span onClick={()=> quantity< singleProduct.quantity && setQuantity((prevqty)=>(prevqty+1))} className="plus-btn">
                                            +
                                        </span>
                                        <div className="input-number">{quantity}</div>
                                        <span onClick={()=> quantity> 1 && setQuantity((prevqty)=>(prevqty-1) )} className="minus-btn">
                                            -
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-6">
                            <Image className="image-fluid" src={singleProduct.primary_image} layout="responsive" placeholder="blur" blurDataURL={singleProduct.primary_image_blurDataURL} width={366} height={244} />
                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            }
            </>
            )
}

            export default ProductPage;

            export async function getServerSideProps ({query}){
                    
                
                try{
                    const res = await axios.get(`https://api.mahlamaleki.ir/api/products/${encodeURI(query.slug)}`) 
                    return{
                        props: {
                            singleProduct: res.data.data
                        }
                        }
                }

                catch(err){

                    return{
                        props: {
                        error: handleError(err)
                        }
                    }
                }
            }