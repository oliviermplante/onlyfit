import './testimonial.css'
import Review1 from '../../images/Review1.jpg'
import Review2 from '../../images/Review2.jpg'
import Review3 from '../../images/Review3.jpg'

const Testimonial = () => {
  return (
    <>
       
          <div className="content">
            <h6>
                <span>W</span>hat They Say
            </h6>
          </div>
          <div className="testimonial container">
          <div className="row">
            <div className="col-sm-4">
              <div className="box">
                  <p>Moms can be fit too! Thanks to OnlyFit, our milkshakes now bring all the boys to the yard!</p>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <h6>Michelle & Tanisha</h6>
                <img src={Review1} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box">
                  <p>We stopped being physically attracted to each other a long time ago. But thanks to OnlyFit, now everyday is thrust day!</p>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <h6>Danielle & Daniel</h6>
                <img src={Review2} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box">
                  <p>I used to be shy. But since I started OnlyFit, men want to be me and women want to be with me!</p>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <h6>Orlando</h6>
                <img src={Review3} className="img-fluid" alt="" />
              </div>
            </div>
          </div>

        </div>
    </>
  )
}

export default Testimonial