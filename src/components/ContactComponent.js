import React from 'react';
import { ExternalLink } from 'react-external-link';


export const Contacts = () => {
  
  return (
    <div>
       
<div className="corner">
      <img className="cornimg" src={"https://raw.githubusercontent.com/Hossik/MyPlanet/master/public/assets/corr.png"} alt={"corner"}/>
    </div>


    <div >
       <ExternalLink   href="https://www.facebook.com/Hossikz"> <div title="facebook" className="fbut" href="https://www.facebook.com/Hossikz"></div>
    </ExternalLink>
    <ExternalLink  href="https://www.instagram.com/hossikz/"><div title="instagram" className="ibut"></div>
    </ExternalLink>
    <ExternalLink   href="https://www.linkedin.com/in/hossik">
  <div title="linkedin" className="lbut"></div>
  </ExternalLink>
  <ExternalLink   href="https://www.reddit.com/user/HossikZ">
    <div className="rbut"></div>
    </ExternalLink>
  <ExternalLink   href="https://github.com/Hossik">
<div  title="github" className="gbut"></div>
</ExternalLink>
        </div>

      <img className="cornimgcont" src={"https://raw.githubusercontent.com/Hossik/MyPlanet/master/public/assets/cornercont.png"} alt={"contacts"}/>
  <div className="contact allcon" >
     
    
    <div className="row justify-content-center">
      <div className=" col-12">
        <h3 className="headcontact">Contact Me</h3>
        <hr />
      </div>
    </div>
  
    <div className="row row-content">
      
      <div className=" col-12  offset-lg-2 col-lg-8">
        <h5>My Address:</h5>
        <address className= "adress">
        Vita Poshtova<br />
        Kyiv<br />
        Ukraine<br />
        <div className="nom"><i className="fa fa-phone nom"></i>: +380 995215245</div>
        
        <a style={{color:"#0fafff", fontWeight:"bold",textDecoration:'none'}} href="mailto:hossik1983@gmail.com"><div className="nom"><i className="fa fa-envelope "></i>: hossik1983@gmail.com</div></a>
        </address>
      </div>
      
      <div className="col-12 infobtn">
        <div className="btn-group" role="group">
        <ExternalLink href='https://wa.me/380995215245?text= Hello, create a website for me' ><button className="btn-con btn-success" title="whatsapp"><i className="iconcon fab fa-whatsapp"></i> </button></ExternalLink>
        <ExternalLink href='viber://chat?number=380995215245' ><button  type="button" className="btn-con viber"title="viber"><i className="iconcon fab fa-viber"></i> </button></ExternalLink>
        <ExternalLink href='https://telegram.im/@Hoss2Zedd' ><button className="btn-con btn-primary"title="telegram" ><i className="iconcon fab fa-telegram-plane"></i> </button></ExternalLink>
        </div>
      </div>
    </div>
    
    </div>
    </div>
    )
  
}
export default Contacts;