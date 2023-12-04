import Image from "next/image";
import { numberFormat } from "lib/heper";

const Product = ({ product }) => {

    return (
        <div className="box">
            <div>
                <div className="img-box">
                    <Image className="image-fluid" src={product.primary_image} layout="responsive" placeholder="blur" blurDataURL={product.primary_image_blurDataURL} width={366} height={244} />
                    {/* <img className="img-fluid" src="./images/b1.jpg" alt=""> */}
                </div>
                <div className="detail-box">
                    <h5>
                        {product.name}
                    </h5>
                    <p>
                        {product.description}
                    </p>
                    <div className="options">
                        <h6>
                            {product.is_sale ? (
                                <>
                                    <span>{numberFormat(product.sale_price)}</span>
                                    <del className="me-1">{numberFormat(product.price)}</del>
                                </>
                            ) : (
                                <span>
                                    {numberFormat(product.price)}
                                </span>
                            )}
                            <span>تومان</span>
                        </h6>
                        {/* <h6>
                            <del>45,000</del>
                            34,000
                            <span>تومان</span>
                        </h6> */}
                        <a href="">
                            <i className="bi bi-cart-fill text-white fs-5"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;