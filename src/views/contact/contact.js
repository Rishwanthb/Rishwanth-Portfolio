import React from "react";
import "../../assets/css/custom.css";
import "../custom.css";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import Typical from "react-typical";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  // Form,
  Input,
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
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition,
} from "react-toasts";

const axios = require("axios");
let ps = null;

const ContactForm = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(5, "Too Short!")
    .max(15, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string().min(5, "Too Short!").required("Required"),
  message: Yup.string().min(5, "Too Short!").required("Required"),
});

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

  const sendtext = (contactinfo) => {
    emailjs
      .send(
        "service_96kn4hi",
        "template_4xm0tel",
        contactinfo,
        "user_LTSTPb89iYbQw0qMcCtZL"
      )
      .then(
        (result) => {
          ToastsStore.success("That's Great! I'll get to you back ASAP :)");
        },
        (error) => {
          ToastsStore.warning("OOPS! Try again later or set up a meeting.");
        }
      );
  };

  return (
    <>
      <ToastsContainer
        position={ToastsContainerPosition.TOP_RIGHT}
        store={ToastsStore}
      />
      <div className="sectionstyle">
        <Container>
          <Row>
            <Col lg="4" md="4" sm="6">
              <h1 className="profile-title text-left">
                <Typical steps={["Lets connect?"]} loop="no" wrapper="p" />
              </h1>
              <h5 className="text-on-back">04</h5>
            </Col>
            <Col>
              <Card className="card-coin card-plain">
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
                      Any Query?
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
                      Set up a meeting?
                    </NavLink>
                  </NavItem>
                </Nav>

                <TabContent
                  className="tab-subcategories"
                  activeTab={"tab" + tabs}
                >
                  <TabPane tabId="tab1">
                    <Card className="card-plain">
                      <CardBody>
                        <Formik
                          initialValues={{
                            name: "",
                            phone: "",
                            email: "",
                            subject: "",
                            message: "",
                          }}
                          validationSchema={ContactForm}
                          onSubmit={async (values, { resetForm }) => {
                            await sendtext(values);
                            resetForm();
                          }}

                          // onSubmit={(values) => {
                          //   sendtext(values);
                          //   resetForm()
                          // }}
                        >
                          {({ errors, touched }) => (
                            <Form>
                              <Row>
                                <Col md="6">
                                  <FormGroup>
                                    <label>Name</label>
                                    <Field
                                      className="inputstyle"
                                      id="name"
                                      name="name"
                                      placeholder="Name"
                                    />
                                    {errors.name && touched.name ? (
                                      <div className="validationerror">
                                        {errors.name}
                                      </div>
                                    ) : null}
                                  </FormGroup>
                                </Col>
                                <Col md="6">
                                  <FormGroup>
                                    <label htmlFor="lastName">Phone</label>
                                    <Field
                                      className="inputstyle"
                                      id="phone"
                                      name="phone"
                                      placeholder="123456789"
                                    />
                                    {errors.phone && touched.phone ? (
                                      <div className="validationerror">
                                        {errors.phone}
                                      </div>
                                    ) : null}
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col md="6">
                                  <FormGroup>
                                    <label htmlFor="email">Email</label>
                                    <Field
                                      className="inputstyle"
                                      id="email"
                                      name="email"
                                      placeholder="name@email.com"
                                      type="email"
                                    />
                                    {errors.email && touched.email ? (
                                      <div className="validationerror">
                                        {errors.email}
                                      </div>
                                    ) : null}
                                  </FormGroup>
                                </Col>
                                <Col md="6">
                                  <FormGroup>
                                    <label htmlFor="email">Subject</label>
                                    <Field
                                      className="inputstyle"
                                      id="subject"
                                      name="subject"
                                      placeholder="Subject"
                                      type="text"
                                    />
                                    {errors.subject && touched.subject ? (
                                      <div className="validationerror">
                                        {errors.subject}
                                      </div>
                                    ) : null}
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col md="12" lg="12">
                                  <FormGroup>
                                    <label htmlFor="email">Message</label>
                                    <Field
                                      className="messagebox"
                                      id="message"
                                      name="message"
                                      placeholder="Your Message"
                                      type="text"
                                    />
                                    {errors.message && touched.message ? (
                                      <div className="validationerror">
                                        {errors.message}
                                      </div>
                                    ) : null}
                                  </FormGroup>
                                </Col>
                              </Row>

                              <Button
                                color="danger"
                                className="float-right"
                                type="reset"
                              >
                                Reset
                              </Button>
                              <Button
                                color="success"
                                className="float-right"
                                type="submit"
                              >
                                Submit
                              </Button>
                            </Form>
                          )}
                        </Formik>
                      </CardBody>
                    </Card>
                  </TabPane>
                  <TabPane tabId="tab2">
                    <div className="centericon">
                      <iframe
                        src="https://koalendar.com/events/meet-with-rishwanth-b?embed=true"
                        name="koalendar-iframe"
                        scrolling="no"
                        marginheight="0px"
                        marginwidth="0px"
                        width="100%"
                        allowfullscreen=""
                        height="550px"
                      ></iframe>
                    </div>
                    <br />
                  </TabPane>
                </TabContent>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
