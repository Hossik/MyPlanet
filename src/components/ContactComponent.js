import React from 'react';
import { ExternalLink } from 'react-external-link';


export const Contacts = () => {
  
  return (

  <div className="contact" >
    <div className="row justify-content-center">
      <div className=" col-12">
        <h3>Contact Me</h3>
        <hr />
      </div>
    </div>
  
    <div className="row row-content">
      
      <div className="col-12  ">
        <h5>My Address:</h5>
        <address className= "adress">
        Vita Poshtova<br />
        Kyiv<br />
        Ukraine<br />
        <i className="fa fa-phone"></i>: +380 995215245<br />
        
        <i className="fa fa-envelope"></i>: <a href="mailto:hossik1983@gmail.com">hossik1983@gmail.com</a>
        </address>
      </div>
      
      <div className="col-12 infobtn">
        <div className="btn-group" role="group">
        <ExternalLink href='https://wa.me/380995215245?text=urlencodedtext' ><button className="btn-con btn-success" title="whatsapp"><i class="iconcon fab fa-whatsapp"></i> </button></ExternalLink>
        <ExternalLink href='viber://chat?number=380995215245' ><button  type="button" className="btn-con viber"title="viber"><i class="iconcon fab fa-viber"></i> </button></ExternalLink>
        <ExternalLink href='https://telegram.im/@Hoss2Zedd' ><button className="btn-con btn-primary"title="telegram" ><i class="iconcon fab fa-telegram-plane"></i> </button></ExternalLink>
        </div>
      </div>
    </div>
   
    </div>
    )
  
}
export default Contacts;