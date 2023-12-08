import heroImage from "../public/images/hero-bg.jpg"
import Image from "next/image";

const Slider = () => {


    return (
        <div>
        <div className="hero_area">
            <div className="bg-box">
                <Image src={heroImage} placeholder="blur" layout="fill" alt="hero-image" />
            </div>
            <section className="slider_section">
                <div id="customCarousel1" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7 col-lg-6">
                                        <div className="detail-box">
                                            <h2 className="mb-3 fw-bold">
                                               به پیتزا ملی خوش آمدید
                                            </h2>
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                                از
                                                طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                سطرآنچنان که
                                                لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                                بهبود
                                                ابزارهای کاربردی می باشد.
                                            </p>
                                            <div className="btn-box">
                                                <a href="" className="btn1">
                                                    سفارش
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7 col-lg-6">
                                        <div className="detail-box">
                                            <h2 className="mb-3 fw-bold">
                                                باز هم بگم که خوش آمدید
                                            </h2>
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                                از
                                                طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                سطرآنچنان که
                                                لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                                بهبود
                                                ابزارهای کاربردی می باشد.
                                            </p>
                                            <div className="btn-box">
                                                <a href="" className="btn1">
                                                    سفارش
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7 col-lg-6">
                                        <div className="detail-box">
                                            <h2 className="mb-3 fw-bold">
                                               هنوزم خوش آمدید
                                            </h2>
                                            <p>
                                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
                                                از
                                                طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                سطرآنچنان که
                                                لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                                بهبود
                                                ابزارهای کاربردی می باشد.
                                            </p>
                                            <div className="btn-box">
                                                <a href="" className="btn1">
                                                    سفارش
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#customCarousel1" data-bs-slide-to="0" className="active"></li>
                            <li data-bs-target="#customCarousel1" data-bs-slide-to="1"></li>
                            <li data-bs-target="#customCarousel1" data-bs-slide-to="2"></li>
                        </ol>
                    </div>
                </div>

            </section>

        </div>
    </div>
    )
}

export default Slider;