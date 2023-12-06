
import Product from "@/components/products/Product";
import axios from "axios";
import { handleError } from "lib/helper";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MenuPage = ({ products, categories, error }) => {

    const [search , setSearch]= useState('')
    const [productList , setProductList]= useState(products)
    const router = useRouter()

    useEffect(() => {
        error && toast.error(error)
    }, [error])

    const handleFilter=async (currentUrl)=>{
        
        // console.log(currentUrl)
        // console.log (new URLSearchParams(currentUrl).toString()) 
        let query={...router.query, ...currentUrl}

        try{
            const res= await axios.get(`https://api.mahlamaleki.ir/api/menu?${new URLSearchParams(query).toString()}`)
            // console.log(res.data.data)
            setProductList(res.data.data)
            router.push(`http://localhost:3000/menu?${new URLSearchParams(query).toString()}` , undefined , {shallow: true})
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
                                <input type="text" onChange={(e)=>{setSearch(e.target.value)}} className="form-control" placeholder="نام محصول ..."
                                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <button onClick={()=> search!=="" && handleFilter( {search : search})} className="input-group-text" id="basic-addon2">
                                    <i className="bi bi-search"></i>
                                </button>
                            </div>
                        </div>
                        <hr />
                        <div className="filter-list">
                            <div className="form-label">
                                دسته بندی
                            </div>
                            <ul>
                                {categories && categories.map((category, index) => (
                                    <li key={index} onClick={()=>handleFilter({category : category.id})} className={router.query.hasOwnProperty('category') && router.query.category==category.id ? "my-2 cursor-pointer filter-list-active" : "my-2 cursor-pointer"}>{category.name}</li>
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

export async function getServerSideProps({ resolvedUrl }) {
    try {
        const res1=`https://api.mahlamaleki.ir/api${resolvedUrl}`
        // console.log(res1)
        const res= await axios.get(res1)
        const resCate = await axios.get("https://api.mahlamaleki.ir/api/categories")

        return {
            props: {
                products: res.data.data,
                categories: resCate.data.data
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
