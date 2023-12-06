import axios from "axios";
import { handleError } from "lib/helper";
import { useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import contactImage from "public/images/contact-image.jpg"



const ContactForm=()=>{

    const [name , setName]= useState ('');
    const [email , setEmail]= useState ('');
    const [subject , setSubject]= useState ('');
    const [text , setText]= useState ('');
    const [loading , setLoading]= useState(false)

    const handleSubmit= async(e)=>{
        e.preventDefault();

        if(name==="" , email==="" , subject==="", text==="" ){
            toast.error("همه فیلد ها پر شود")
            return
        }

        else (email)
        try{
            setLoading(true)
            const res= await axios.post("/contact-us" , {
                name,
                email,
                subject,
                text
            })
            setLoading(false)
            toast.success("فرم با موفقیت ثبت شد")
        }
        catch(err){
            toast.error(handleError(err))
            
        }
        finally{
            setLoading(false)
        }
    }

    return(
        <section className="book_section layout_padding">
        <div className="container">
            <div className="heading_container">
                <h2>
                    تماس با ما
                </h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form_container">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="نام و نام خانوادگی" />
                            </div>
                            <div>
                                <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="ایمیل" />
                            </div>
                            <div>
                                <input type="text" className="form-control" value={subject} onChange={(e)=>setSubject(e.target.value)} placeholder="موضوع پیام" />
                            </div>
                            <div>
                                <textarea rows="10" style={{height: '100px'}} value={text} onChange={(e)=>setText(e.target.value)} className="form-control"
                                    placeholder="متن پیام"></textarea>
                            </div>
                            <div className="btn_box">
                                <button type="submit" disabled={loading}>
                                    ارسال پیام
                                    {loading && <div className="spinner-border spinner-border-sm ms-2"></div>}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-6">
                    {/* <div className="map_container ">
                        <div id="map" style="height: 345px;"></div>
                    </div> */}
                    <div className="img-box">
                        <Image src={contactImage} className="rounded img-fluid" alt="contact-image" layout="responsive"  placeholder="blur"/>
                        {/* <img src="images/about-img.png" alt=""> */}
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ContactForm;