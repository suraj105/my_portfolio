import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import microservicesPlaceHolder from "../assets/img/img_placeholder_microservices.png";
import javaPlaceholder from "../assets/img/img_placeholder_java.png"
import dashPlaceholder from "../assets/img/img_placeholder_dash.png"
import apexPlaceholder from "../assets/img/img_placeholder_apexshopper.png"
import phpPlaceholder from "../assets/img/img_placeholder_php.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const webProjects = [
    {
      title: " Apex Shoppers ",
      description: "E-Commerce website made using React, next.js, tailwind css, Stripe , next auth , firestore , firebase and redux.",
      imgUrl: apexPlaceholder,
      githubUrl: "https://github.com/suraj105/apex-shoppers",
    },
    {
     title: " E-Commerce",
      description: "Microservice E-commerce website made using React and springboot running in a docker container , and Rabbitmq for messaging",
      imgUrl: microservicesPlaceHolder,
      githubUrl: "https://github.com/orgs/KBE-2023/repositories",
    },
    {
     title: " Publication Cost",
      description: "A comprehensive analysis of publication cost with help of dash and python webscrapping",
      imgUrl: dashPlaceholder,
      githubUrl: "https://github.com/suraj105/publication_cost_dash",

    },
  ];

    const javaProjects = [
    {
      title: " Warehouse management system ",
      description: "Java gui based warehouse management system to keep track of items, including io , net , simulations , TCP/UDP communications",
      imgUrl: javaPlaceholder,
      githubUrl: "https://github.com/suraj105/prg3new",
    },
  ];

  const phpProjects = [
    {
      title: " Plugin development",
      description: "Export-orders plugin development for shopware 6 with php",
      imgUrl: phpPlaceholder,
      githubUrl: "https://github.com/suraj105/SW6-Export-Orders-Filter",
    },
  ];
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A collection of projects demonstrating creativity, clean design, and practical web development/programming skills using modern technologies.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Java</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Php</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          webProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                       <Row>
                        {
                          javaProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          phpProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
