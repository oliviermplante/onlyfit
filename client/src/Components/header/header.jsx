import Banner5 from '../../images/Banner5.jpg'
import './header.css'

const Header = () => {
  return (
    <>
        <div className="header">
          <div className="i">
            <div>
              <img src={Banner5} alt="" />
            </div>
            <div className="Overlay"></div>
          </div>
            <div className="Content">
                <h6>
                  <span>Personalized</span> Trainers <br /> Customized <span>Bodies</span> 
                </h6>

                <button className="btn">Read More</button>
            </div>
        </div>
        
        <div className="social_media">
          <div className="row">
            
              <div className="col-sm-4">
                <i className="fa-brands fa-instagram"></i>
                 <span>Instagram</span>
              </div>

              <div className="col-sm-4">
                <i className="fa-brands fa-facebook"></i>
                 <span>Facebook</span>
              </div>

              <div className="col-sm-4">
                <i className="fa-brands fa-twitter"></i>
                 <span>Twitter</span>
              </div>
            </div>
          </div>
        
    </>
  );
};

export default Header;