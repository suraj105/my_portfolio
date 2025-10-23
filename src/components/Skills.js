import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import javaLogo from "../assets/img/java.svg";
import reactLogo from "../assets/img/react.svg";
import tsLogo from "../assets/img/typescript.svg";
import phpLogo from "../assets/img/php.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>JavaScript, TypeScript, React, Node.js, PHP, MySQL, Git, Docker, REST APIs, Responsive Design.</p>
              
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={javaLogo} alt="Java" />
                  <h5>Java</h5>
                  <p>1.5 years</p>
                </div>

                <div className="item">
                  <img src={reactLogo} alt="React" />
                  <h5>React</h5>
                  <p>1 year</p>
                </div>

                <div className="item">
                  <img src={tsLogo} alt="TypeScript" />
                  <h5>TypeScript</h5>
                  <p>1 year</p>
                </div>

                <div className="item">
                  <img src={phpLogo} alt="PHP" />
                  <h5>PHP</h5>
                  <p>3 months</p>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background Decoration" />
    </section>
  );
};
