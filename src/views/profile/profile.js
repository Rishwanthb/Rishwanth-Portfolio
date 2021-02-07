import React from "react";
import Header from "../../components/header/header.js";
import Footer from "../../components/footer/footer.js";
import "../../assets/css/custom.css";
import "../custom.css";
import PerfectScrollbar from "perfect-scrollbar";
import Typical from "react-typical";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import classnames from "classnames";
import StarRateIcon from "@material-ui/icons/StarRate";
import dots from "../../assets/img/dots.png";
import path4 from "../../assets/img/path4.png";
import rish from "../../assets/img/rish.jpeg";

// Modules
import Skill from "../skill/skill.js";
import Projects from "../projects/projects.js";
import Contact from "../contact/contact.js";
let ps = null;

export default function ProfilePage() {
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
  }, []);

  return (
    <>
      <Header />
      <div className="header-space">
        <img alt="..." className="dots" src={dots} />
        <img alt="..." className="path" src={path4} />
        <Container className="align-items-center">
          <Row>
            <Col className="profiletag" lg="8" md="6" xs="12" sm="12">
              <h1 className="profile-title text-left">
                <Typical
                  steps={["Full Stack Developer!"]}
                  loop="no"
                  wrapper="p"
                />
              </h1>
              <h5 className="text-on-back">01</h5>
              <p className="profile-description-style">
                Performance-driven and results-oriented Software Engineer with 3
                years of experience in:
                <br />
                <li>DevOps</li>
                <li>Serverless</li>
                <li>Conversational AI</li>
                <li>Cloud Native Web Applications</li>
                <br />
                Looking for opportunities where I can apply my expertise, produce excellent results, learn and evolve!!
              </p>
              {/* <iframe
                allow="microphone;"
                width="350"
                height="430"
                src="https://console.dialogflow.com/api-client/demo/embedded/dcb940b6-a4ee-447c-a0ce-d063b9e4dfed"
              ></iframe> */}
              <div className="btn-wrapper profile pt-3">
                <Button
                  className="btn-icon btn-round"
                  color="linkedin"
                  href="https://www.linkedin.com/in/rishwanth-b-56220bb1/"
                  id="tooltip982846143"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip982846143">
                  Professional Visit
                </UncontrolledTooltip>

                <Button
                  className="btn-icon btn-round"
                  color="github"
                  href="https://github.com/Rishwanth29"
                  id="tooltip639225725"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip639225725">
                  Checkout my code
                </UncontrolledTooltip>

                <Button
                  className="btn-icon btn-round"
                  color="twitter"
                  href="https://twitter.com/imbunny48"
                  id="twittertooltip"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </Button>
                <UncontrolledTooltip delay={0} target="twittertooltip">
                  Follow me
                </UncontrolledTooltip>

                <Button
                  className="btn-icon btn-round"
                  color="primary"
                  href="https://www.instagram.com/b__rish/"
                  id="tooltip951161185"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip951161185">
                  Casual visit
                </UncontrolledTooltip>

                <Button
                  className="btn-icon btn-round"
                  color="facebook"
                  href="https://www.facebook.com/rishurcutebaby"
                  id="facebooktooltip"
                  target="_blank"
                >
                  <i className="fab fa-facebook" />
                </Button>
                <UncontrolledTooltip delay={0} target="facebooktooltip">
                  Casual visit
                </UncontrolledTooltip>
              </div>
            </Col>
            <Col className="profiletagimage" lg="4" md="6" sm="12" xs="12">
              <Card className="card-coin card-plain">
                <CardHeader>
                  <img
                    alt="..."
                    className="img-center img-fluid rounded-circle"
                    src={rish}
                  />
                  <h2 className="title">Rishwanth B</h2>
                  Associate Professional Software Engineer
                  <br />
                  <p className="text-info text-center">
                    <StarRateIcon className="starcolor" />
                    AWS Certified Developer - Associate
                    <StarRateIcon className="starcolor" />
                  </p>
                </CardHeader>
                <CardBody>
                  <Nav className="nav-tabs-primary justify-content-center" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: tabs === 1,
                        })}
                        onClick={(e) => {
                          e.preventDefault();
                          setTabs(1);
                        }}
                        href="#pablo"
                      >
                        About me
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: tabs === 2,
                        })}
                        onClick={(e) => {
                          e.preventDefault();
                          setTabs(2);
                        }}
                        href="#pablo"
                      >
                        Professional Info
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent
                    className="tab-subcategories"
                    activeTab={"tab" + tabs}
                  >
                    <TabPane tabId="tab1">
                      <i className="fas fa-home"></i>&nbsp;&nbsp; Bangalore,
                      India
                      <br />
                      <i className="fas fa-phone"></i>&nbsp;&nbsp;+91 9620004029{" "}
                      <br />
                      <i className="fas fa-envelope"></i>&nbsp;&nbsp;
                      brishwanth09@gmail.com
                    </TabPane>
                    <TabPane tabId="tab2">
                      <i className="fas fa-briefcase"></i>&nbsp;&nbsp; 3 Years
                      <br />
                      <i className="fas fa-building"></i>&nbsp;&nbsp; DXC
                      Technolgy <br />
                      <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;
                      Bangalore, India <br />
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
