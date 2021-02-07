import React, { useEffect, useState } from "react";
import "../../assets/css/custom.css";
import "../custom.css";
import firebase from "../../components/firebase/firebase.js";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import Typical from "react-typical";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel,
} from "reactstrap";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import GitHubIcon from "@material-ui/icons/GitHub";
import { SiFirebase } from "react-icons/si";
let ps = null;

export default function ProfilePage() {
  const [tabs, setTabs] = React.useState(1);
  const [projects, setProjects] = React.useState([]);

  useEffect(() => {
    const projectref = firebase.database().ref("projects");
    projectref.on("value", (snapshot) => {
      const projectlist = snapshot.val();
      setProjects(projectlist);
    });

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

  const gotodemo = (e) => {
    console.log(e);
  };

  const gotorepo = (e) => {
    console.log(e);
  };

  return (
    <>
      <div className="sectionstyle">
        <Container>
          <Row>
            <Col lg="3" md="4" sm="12" xs="12">
              <h1 className="profile-title text-left">
                {" "}
                <Typical
                  steps={["My Open-source Projects"]}
                  loop="no"
                  wrapper="p"
                />
              </h1>
              <h5 className="text-on-back">03</h5>
            </Col>
            <Col lg="9" md="8" sm="12" xs="12">
              <Row>
                {projects.map((res, index) => {
                  if (
                    index === 0 ||
                    index === 2 ||
                    index === 4 ||
                    index === 6 ||
                    index === 8 ||
                    index === 10
                  )
                    return (
                      <>
                        <Card className="projectcardleft">
                          <CardBody>
                            <Row>
                              <Col lg="6" md="6" sm="12" xs="12" key="index">
                                <Button className="selectpointer">
                                  <img src={res.images}></img>
                                </Button>
                              </Col>
                              <Col lg="6" md="6" sm="12" xs="12">
                                <h3>
                                  {res.name} | {res.Year}
                                </h3>
                                {res.Description}
                                <br />
                                <>
                                  Technologies:&nbsp;&nbsp;
                                  {res.tech.map((techs, index) => {
                                    if (techs === "ReactJS")
                                      return (
                                        <i className="fab fa-react">
                                          &nbsp;&nbsp;
                                        </i>
                                      );
                                    else if (techs === "Firebase")
                                      return (
                                        <>
                                          <SiFirebase />
                                          &nbsp;&nbsp;
                                        </>
                                      );
                                    else if (techs === "Angular")
                                      return (
                                        <i className="fab fa-angular">
                                          &nbsp;&nbsp;
                                        </i>
                                      );
                                    else if (techs === "AWS")
                                      return (
                                        <i className="fab fa-aws">
                                          &nbsp;&nbsp;
                                        </i>
                                      );
                                    else if (techs === "Github")
                                      return (
                                        <i className="fab fa-github">
                                          &nbsp;&nbsp;
                                        </i>
                                      );
                                    else if (techs === "Postman")
                                      return (
                                        <i className="fab fa-postman">
                                          &nbsp;&nbsp;
                                        </i>
                                      );
                                    else return <>{techs}&nbsp;&nbsp;</>;
                                  })}
                                </>
                                <br />
                                Compatability:&nbsp;&nbsp;
                                {res.compatability.map((comp, index) => {
                                  if (comp === "Phone")
                                    return (
                                      <i className="fas fa-mobile-alt">
                                        &nbsp;&nbsp;
                                      </i>
                                    );
                                  else if (comp === "Web")
                                    return (
                                      <i className="fas fa-desktop">
                                        &nbsp;&nbsp;
                                      </i>
                                    );
                                  else return <>{comp}&nbsp;&nbsp;</>;
                                })}
                                <br />
                                <Button
                                  className="btn-link"
                                  color="default"
                                  id="getrepo"
                                >
                                  <GitHubIcon
                                    onClick={() => gotorepo(res.repo_link)}
                                  />
                                </Button>
                                <UncontrolledTooltip
                                  delay={0}
                                  placement="left"
                                  target="getrepo"
                                >
                                  Github Repo
                                </UncontrolledTooltip>
                                <Button
                                  className="btn-link"
                                  color="default"
                                  id="getlive"
                                >
                                  <LiveTvIcon
                                    onClick={() => gotodemo(res.demo_link)}
                                  />
                                </Button>
                                <UncontrolledTooltip
                                  delay={0}
                                  placement="right"
                                  target="getlive"
                                >
                                  Live Demo
                                </UncontrolledTooltip>
                                <br />
                                <br />
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </>
                    );
                  else
                    return (
                      <>
                        <Card className="projectcardleft">
                          <CardBody>
                            <Row>
                              <Col lg="6" md="6" sm="12" xs="12">
                                <h3>
                                  {res.name} | {res.Year}
                                </h3>
                                {res.Description}
                                <br />
                                <>
                                  Technologies:&nbsp;&nbsp;
                                  {res.tech.map((techs, index) => {
                                    if (techs === "ReactJS")
                                      return (
                                        <i className="fab fa-react">
                                          &nbsp;&nbsp;
                                        </i>
                                      );
                                    else if (techs === "Firebase")
                                      return (
                                        <>
                                          <SiFirebase />
                                          &nbsp;&nbsp;
                                        </>
                                      );
                                    else if (techs === "Angular")
                                      return (
                                        <i className="fab fa-angular">
                                          &nbsp;&nbsp;
                                        </i>
                                      );
                                    else if (techs === "AWS")
                                      return (
                                        <i className="fab fa-aws">
                                          &nbsp;&nbsp;
                                        </i>
                                      );
                                    else if (techs === "Github")
                                      return (
                                        <i className="fab fa-github">
                                          &nbsp;&nbsp;
                                        </i>
                                      );
                                    else if (techs === "Postman")
                                      return (
                                        <i className="fab fa-postman">
                                          &nbsp;&nbsp;
                                        </i>
                                      );
                                    else return <>{techs}&nbsp;&nbsp;</>;
                                  })}
                                </>
                                <br />
                                Compatability:&nbsp;&nbsp;
                                {res.compatability.map((comp, index) => {
                                  if (comp === "Phone")
                                    return (
                                      <i className="fas fa-mobile-alt">
                                        &nbsp;&nbsp;
                                      </i>
                                    );
                                  else if (comp === "Web")
                                    return (
                                      <i className="fas fa-desktop">
                                        &nbsp;&nbsp;
                                      </i>
                                    );
                                  else return <>{comp}&nbsp;&nbsp;</>;
                                })}
                                <br />
                                <Button
                                  className="btn-link"
                                  color="default"
                                  id="getrepo"
                                >
                                  <GitHubIcon
                                    onClick={() => gotorepo(res.repo_link)}
                                  />
                                </Button>
                                <UncontrolledTooltip
                                  delay={0}
                                  placement="left"
                                  target="getrepo"
                                >
                                  Github Repo
                                </UncontrolledTooltip>
                                <Button
                                  className="btn-link"
                                  color="default"
                                  id="getlive"
                                >
                                  <LiveTvIcon
                                    onClick={() => gotodemo(res.demo_link)}
                                  />
                                </Button>
                                <UncontrolledTooltip
                                  delay={0}
                                  placement="right"
                                  target="getlive"
                                >
                                  Live Demo
                                </UncontrolledTooltip>
                                <br />
                                <br />
                              </Col>
                              <Col lg="6" md="6" sm="12" xs="12" key="index">
                                <Button className="selectpointer">
                                  <img src={res.images}></img>
                                </Button>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </>
                    );
                })}
              </Row>
              <br />
              <br />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
