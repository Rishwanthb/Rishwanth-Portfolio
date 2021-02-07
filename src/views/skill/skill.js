import React from "react";
import "../../assets/css/custom.css";
import "../custom.css";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import Typical from "react-typical";
// reactstrap components
import { Card, CardBody, Container, Row, Col } from "reactstrap";
//material
import PersonalVideoIcon from "@material-ui/icons/PersonalVideo";
import StorageIcon from "@material-ui/icons/Storage";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import BuildIcon from "@material-ui/icons/Build";
import CachedIcon from "@material-ui/icons/Cached";
import path4 from "../../assets/img/patrat.png";

import { FaBootstrap } from "react-icons/fa";
import { SiMaterialUi } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { SiServerless } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiVisualstudio } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { MdDashboard } from "react-icons/md";

let ps = null;

export default function ProfilePage() {
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }

    document.body.classList.toggle("profile");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile");
    };
  }, []);

  return (
    <>
      <div className="sectionstyle">
        {/* <img alt="..." className="path" src={path4} /> */}
        <Container>
          <Row className="justify-content-between">
            <Col lg="3" md="4" sm="6">
              <h1 className="profile-title text-left">
                <Typical steps={["My Skills"]} loop="no" wrapper="p" />
              </h1>
              <h5 className="text-on-back">02</h5>
            </Col>
            <Col lg="9" md="8" sm="6">
              <Row className="fullheight">
                {/* <UncontrolledCarousel items={carouselItems} /> */}
                <Col className="fullheight" lg="4" md="4" sm="6" xs="6">
                  <div className="centericon">
                    <PersonalVideoIcon
                      className="centericon"
                      style={{ color: "primary", fontSize: 60 }}
                    />
                    <h4>Front-end</h4>
                  </div>
                  <Card className=" fullheight card-coins">
                    <CardBody className="cardbodystyle">
                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <i className="fab fa-react"></i>
                        </Col>
                        <Col>ReactJS</Col>
                      </Row>
                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <i className="fab fa-angular"></i>
                        </Col>
                        <Col>AngularJs</Col>
                      </Row>
                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <i className="fab fa-html5"></i>
                        </Col>
                        <Col>HTML5</Col>
                      </Row>
                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <i className="fab fa-css3-alt"></i>
                        </Col>
                        <Col>CSS</Col>
                      </Row>
                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <SiMaterialUi />
                        </Col>
                        <Col>Material UI</Col>
                      </Row>
                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <FaBootstrap />
                        </Col>
                        <Col>Bootstrap</Col>
                      </Row>
                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <i className="fab fa-js"></i>
                        </Col>
                        <Col>Javascript</Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="fullheight" lg="4" md="4" sm="6" xs="6">
                  <div className="centericon">
                    <StorageIcon style={{ color: "primary", fontSize: 60 }} />
                    <h4>Back-end</h4>
                  </div>
                  <Card className="fullheight card-coins ">
                    <CardBody className="cardbodystyle">
                    <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <SiFirebase />
                        </Col>
                        <Col>Firebase</Col>
                      </Row>
                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <i className="fab fa-node"></i>
                        </Col>
                        <Col>NodeJs</Col>
                      </Row>
                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <SiMongodb />
                        </Col>
                        <Col>MongoDB</Col>
                      </Row>
                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <AiFillApi />
                        </Col>
                        <Col>Rest API</Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="fullheight" lg="4" md="4" sm="6" xs="6">
                  <div className="centericon">
                    <CachedIcon style={{ color: "primary", fontSize: 60 }} />
                    <h4>DevOps</h4>
                  </div>
                  <Card className="fullheight card-coins ">
                    <CardBody className="cardbodystyle">
                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <i className="fab fa-jenkins"></i>
                        </Col>
                        <Col>Jenkins</Col>
                      </Row>

                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <i className="fab fa-docker"></i>
                        </Col>
                        <Col>Docker</Col>
                      </Row>

                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <SiServerless />
                        </Col>
                        <Col>Serverless</Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>

                <Col className="fullheight" lg="4" md="4" sm="6" xs="6">
                  <div className="centericon">
                    <CloudQueueIcon
                      style={{ color: "primary", fontSize: 60 }}
                    />
                    <h4>Cloud</h4>
                  </div>
                  <Card className="fullheight card-coins ">
                    <CardBody className="cardbodystyle">
                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <i className="fab fa-aws"></i>
                        </Col>
                        <Col>AWS</Col>
                      </Row>

                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <SiMicrosoftazure />
                        </Col>
                        <Col>Microsoft Azure</Col>
                      </Row>

                    </CardBody>
                  </Card>
                </Col>
                <Col className="fullheight" lg="4" md="4" sm="6" xs="6">
                  <div className="centericon">
                    <VerifiedUserIcon
                      style={{ color: "primary", fontSize: 60 }}
                    />
                    <h4>Certifications</h4>
                  </div>
                  <Card className="fullheight card-coins ">
                    <CardBody className="cardbodystyle">
                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1" xs="6">
                          <i className="fab fa-aws"></i>
                        </Col>
                        <Col>AWS Certified Developer - Associate</Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="fullheight" lg="4" md="4" sm="6" xs="6">
                  <div className="centericon">
                    <BuildIcon style={{ color: "primary", fontSize: 60 }} />
                    <h4>Tools</h4>
                  </div>
                  <Card className="fullheight card-coins ">
                    <CardBody className="cardbodystyle">
                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <SiVisualstudio />
                        </Col>
                        <Col>VSCode</Col>
                      </Row>
                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <i className="fab fa-github"></i>
                        </Col>
                        <Col>Github</Col>
                      </Row>
                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <SiPostman />
                        </Col>
                        <Col>Postman</Col>
                      </Row>
                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <MdDashboard />
                        </Col>
                        <Col>Thingsboard</Col>
                      </Row>
                      <Row>
                        <Col md="1" lg="1" sm="1" xs="1">
                          <SiPowerbi />
                        </Col>
                        <Col>Power BI</Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
