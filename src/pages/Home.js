import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Row className="pt-5">
        <Col>
          <img
            alt="Site author similing"
            src="./jake010823.jpg"
            style={{ width: "10rem", height: "10rem" }}
            className="rounded-circle d-block mx-auto border border-primary border-5"
          />
        </Col>
      </Row>
      <Row className="pt-4">
        <Col
          sm={{ span: 6, offset: 3 }}
          md={{ span: 4, offset: 4 }}
          lg={{ span: 4, offset: 4 }}
        >
          <div className="d-flex justify-content-evenly">
            <a title="send an email" href="mailto:jacob+canbereached@gmail.com">
              <i
                style={{ fontSize: "1.8rem" }}
                className="bi bi-envelope-paper-heart-fill px-2"
              ></i>
              <span className="visually-hidden">Email Address</span>
            </a>
            <a href="tel:19166719273">
              <i
                style={{ fontSize: "1.8rem" }}
                title="call"
                className="bi bi-phone px-2"
              ></i>
              <span className="visually-hidden">Phone Number</span>
            </a>

            <a
              title="check out my linked in"
              href="https://www.linkedin.com/in/jake-nesom-73bb8778/"
            >
              <i
                style={{ fontSize: "1.8rem" }}
                className="bi bi-linkedin px-2"
              ></i>
              <span className="visually-hidden">LinkedIn</span>
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={{ span: 8, offset: 2 }}>
          <div className="py-5 px-4">
            <h1>About</h1>
            <p>
              Hi i'm Jacob Nesom, a full stack software developer based in
              Northern California. My main body of work thus far is mainly
              written in SQL Server on the back end, C# on the server & Angular
              Javascript UIs, but I'm a renaissance man at heart and enjoy
              learning new things!
            </p>
            <div className="d-block">
              <Link role="button" to="/resume" className="btn btn-primary">
                Resume
              </Link>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6}></Col>
      </Row>
    </>
  );
}

export default Home;
