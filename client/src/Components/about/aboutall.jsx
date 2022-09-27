import './about.css'
import Banner2 from '../../images/Banner2.jpg'
import Team1 from '../../images/Team1.jpg'
import Team2 from '../../images/Team2.jpg'
import Team3 from '../../images/Team3.jpg'
import styled from "styled-components";


const Top = styled.div`
  margin-top: 350px;
  `;

const AboutAll = () => {
  return (
    <>
    <Top />
      <div className="about container">
        <div className="row">
          <div className="col-sm-5">
            <img src={Banner2} className="img-fluid" alt="" />
          </div>

          <div className="offset-sm-1 col-sm-6">
            <h6>When Life Gives You <span>Dumbbells</span>, Make <span>Fitenade</span></h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste debitis eos rem similique culpa est, sunt itaque! Ad laborum maxime temporibus eligendi quaerat error recusandae veritatis nesciunt excepturi voluptate. Quibusdam tempora quaerat porro alias libero ipsam accusamus voluptas <br /><br />necessitatibus deserunt, temporibus ut quasi incidunt? Officia sit vel doloribus ratione delectus tenetur animi temporibus. Laboriosam, cumque non quam magnam architecto corporis earum reiciendis delectus impedit? Molestiae delectus corporis maxime aliquid repudiandae totam asperiores! Voluptatem voluptatum officiis consectetur ut illo.</p>
          </div>

          <div className="content">
                <h6>
                  <span>M</span>eet The Team
                </h6>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="box">
                 <img src={Team1} className="img-fluid" alt="" />
                 <h5>Carlos</h5>

                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi, dolor ab sapiente voluptate labore provident harum fugit in est?</p>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="box">
                 <img src={Team2} className="img-fluid" alt="" />
                 <h5>Chloe</h5>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi, dolor ab sapiente voluptate labore provident harum fugit in est?</p>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="box">
                 <img src={Team3} className="img-fluid" alt="" />
                 <h5>Admiral Ackbar</h5>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nisi, dolor ab sapiente voluptate labore provident harum fugit in est?</p>
                </div>
              </div>
              <div className="margin-top"></div>
              
            </div>
          </div>
        </div>
      
    </>
  )
}

export default AboutAll