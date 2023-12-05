
import Product from "@/components/products/Product";
import axios from "axios";
import { handleError } from "lib/heper";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MenuPage = ({ products, categories, error }) => {
    useEffect(() => {
        error && toast.error(error)
    }, [error])

    const [productList , setProductList]= useState(products)
    const handleFilter=async (pageNumber)=>{
        //  console.log(pageNumber)
        // console.log (new URLSearchParams(pageNumber).toString())

        try{
            const res= await axios.get(`https://api.mahlamaleki.ir/api/menu?${new URLSearchParams(pageNumber).toString()}`)
            // console.log(res.data.data)
            setProductList(res.data.data)
        }

        catch(err){
            toast.error(handleError(err))
        }
    }

    return (
        <section className="food_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-3">
                        <div>
                            <label className="form-label">جستجو</label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="نام محصول ..."
                                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <a href="#" className="input-group-text" id="basic-addon2">
                                    <i className="bi bi-search"></i>
                                </a>
                            </div>
                        </div>
                        <hr />
                        <div className="filter-list">
                            <div className="form-label">
                                دسته بندی
                            </div>
                            <ul>
                                {categories && categories.map((category, index) => (
                                    <li key={index} className="my-2 cursor-pointer">{category.name}</li>
                                ))}
                                {/* <li className="my-2 cursor-pointer filter-list-active">پیتزا</li> */}
                            </ul>
                        </div>
                        <hr />
                        <div>
                            <label className="form-label">مرتب سازی</label>
                            <div className="form-check my-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label cursor-pointer" htmlFor="flexRadioDefault1" >
                                    بیشترین قیمت
                                </label>
                            </div>
                            <div className="form-check my-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                     />
                                <label className="form-check-label cursor-pointer" htmlFor="flexRadioDefault2">
                                    کمترین قیمت
                                </label>
                            </div>
                            <div className="form-check my-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                                     />
                                <label className="form-check-label cursor-pointer" htmlFor="flexRadioDefault3">
                                    پرفروش ترین
                                </label>
                            </div>
                            <div className="form-check my-2">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"
                                     />
                                <label className="form-check-label cursor-pointer" htmlFor="flexRadioDefault4">
                                    با تخفیف
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-9">
                        <div className="row gx-3">
                            {productList && productList.products.map((product , index) =>(
                                <div key={index} className="col-sm-6 col-lg-4">
                                    <Product product={product} />
                            </div>
                            )
                             )}
                        </div>
                        <nav className="d-flex justify-content-center mt-5">
                            <ul className="pagination">
                                {productList && productList.meta.links.slice(1, -1).map((link , index)=>(
                                    <li key={index} className={link.active ? "page-item active" : "page-item"}>
                                        <button className="page-link" onClick={()=> handleFilter({page : link.label})}>{link.label}</button></li>
                                ))}
                                {/* <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li> */}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MenuPage;


export async function getServerSideProps() {
console.log("hi2")
    try {
        
        const res= await axios.get("https://api.mahlamaleki.ir/api/menu")
        const resCat = await axios.get("https://api.mahlamaleki.ir/api/categories")
        
        return {
            props: {
                products: res.data.data,
                categories: resCat.data.data
            }
        }
    }

    catch (err) {
        return {
            props: {
                error: handleError(err)
            }
        }
    }
}
