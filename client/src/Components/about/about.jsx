import './about.css'
import Banner2 from '../../images/Banner2.jpg'
import { Link } from "react-router-dom"


const About = () => {
  return (
    <>
      <div className="about container">
        <div className="row">
          <div className="col-sm-5">
            <img src={Banner2} className="img-fluid" alt="" />
          </div>

          <div className="offset-sm-1 col-sm-6">
            <h6>When Life Gives You <span>Dumbbells</span>, Make <span>Fitenade</span></h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis eos rem similique culpa est, sunt itaque! Ad laborum maxime temporibus eligendi quaerat error recusandae veritatis nesciunt excepturi voluptate. Quibusdam tempora quaerat porro alias libero ipsam accusamus voluptas <br /><br />necessitatibus deserunt, temporibus ut quasi incidunt? Officia sit vel doloribus ratione delectus tenetur animi temporibus. Laboriosam, cumque non quam magnam architecto corporis earum reiciendis delectus impedit? Molestiae delectus corporis maxime aliquid repudiandae totam asperiores! Voluptatem voluptatum officiis consectetur ut illo.</p>
            <Link to="/aboutus" className="btn">Read More</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default About