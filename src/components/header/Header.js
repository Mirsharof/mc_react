import "./header.css";
import Img1 from "../../images/img/img1.jpg";
import Img2 from "../../images/img/img2.jpg";
import Img3 from "../../images/img/img_q1.jpg";
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <h1 className="header-left-h1"> Mening ismim <span > Mirsharof</span></h1>
        <p className="header-left-p">Meni o'zimni ozgina tanishtirsam</p>
        <h2 className="header-left-h2">
          Men
          <div className="header-items">
            <div className="header-items-wrapper">
            <div className="header-items-slide">kitobchi</div>
            <div className="header-items-slide">dasturchi</div>
            <div className="header-items-slide">psixolog</div>
            <div className="header-items-slide">motivator</div>
            </div>
          </div>
          kabi sohalarda faoliyat olib boraman
        </h2>
        <button name="submit">Ko'proq</button>
      </div>
      <div className="header-right">
        <div className="right-img">
         <div className="right_img_block"> 
         <img src={Img1} name="img" className="header-right-img img1" />
          <img src={Img2} name="img" className="header-right-img img2" />
          <img src={Img3} name="img" className="header-right-img img3" />
          </div>         
          <div className="header-right-img-title">
            <h2 className="header-right-img-title-h2"> Hamisha oldinga harakatlan...!</h2>
            <h1 className="header-right-img-title-h1">Maqsadingga yetishasan</h1>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Header;
