import { Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";

function Resume() {
  return (
    <div className="py-5">
      <Row>
        <div className="col-sm-12 col-md-10 offset-md-1 col-lg-7">
          <h1 className="mb-3">Resume</h1>
          <div className="d-flex d-xl-none d-lg-none justify-content-between mb-4">
            <div>
              <i className="bi bi-envelope-paper-heart-fill px-2"></i>
              <span className="visually-hidden">Email Address</span>
              <a href="mailto:jacob+canbereached@gmail.com">
                jacobcanbereached@gmail.com
              </a>
            </div>
            <div>
              <i className="bi bi-phone px-2"></i>

              <a href="tel:19166719273">
                <span className="visually-hidden">Phone Number</span>
                916-671-9273
              </a>
            </div>
            <div>
              <i className="bi bi-linkedin px-2"></i>

              <a href="https://www.linkedin.com/in/jake-nesom-73bb8778/">
                <span className="">LinkedIn</span>
              </a>
            </div>
          </div>{" "}
          {/* end of contact info div */}
        </div>
      </Row>
      <Row>
        <div className="col-sm-12 col-md-10 offset-md-1 col-lg-7">
          <div>
            <h2>Statement</h2>
            <p className="mb-4">
              Full stack web development is my background. I enjoy the mix of
              back-end problem solving with a sprinkling of UI challenges. I'm
              looking for a position where I can contribute great work with an
              awesome group.
            </p>
            <h2>Technologies</h2>
            <p>
              C#, .NET Core, Angular, Typescript, Javascript, SQL Server, html,
              css, scss, bootstrap, Git, Azure, TFS, NPM
            </p>
            <p className="mb-4">
              Dabbled with: Node JS, Express, MongoDB, React
            </p>
            <h2 className="mb-3">Positions</h2>
            <h3 className="h4">
              Full Stack Software Developer{" "}
              <small className="text-muted">2018 - 2023</small>
            </h3>
            <dl>
              <dt className="visually-hidden">Business Name</dt>
              <dd className="text-muted">California Dept. Social Services</dd>
              <dt>Duties</dt>
              <dd>
                Develop and maintain web applications written in a variety of
                technologies. Gather requirements, unit test, develop and
                release features and bug fixes across the full stack including
                SQL, web server & user interface. Troubleshoot and resolve bugs
                affecting any part of the stack.
              </dd>
            </dl>
            <h3 className="h4 mt-4">
              Student Assistant - Web Development{" "}
              <small className="text-muted">2015 - 2017</small>
            </h3>
            <dl>
              <dt className="visually-hidden">Business Name</dt>
              <dd className="text-muted">California Dept of Social Services</dd>
              <dt>Duties</dt>
              <dd>
                Worked on an Angular 4 Javascript project to create a log
                displaying UI module that could be dropped into an existing
                AngularJS application, utilize the existing application's router
                and receive information passed from parent Angular JS
                components.
              </dd>
            </dl>
            <h2 className="mt-4">Education</h2>
            <h3 className="h4">
              B.A. Mass Communications{" "}
              <small className="text-muted">2011</small>
            </h3>
            <dl>
              <dt className="visually-hidden">School Name</dt>
              <dd>California State University Sacramento</dd>
            </dl>
            <h3 className="h4">
              A.S. Computer Science{" "}
              <small className="text-muted">June 2023</small>
            </h3>
            <dl>
              <dt className="visually-hidden">School Name</dt>
              <dd>City College of San Francisco</dd>
              <dt>Studies</dt>
              <dd>
                Studied Calculus through Calc II, Discrete Math, Data
                Structures, Algorithms, Web Development, SQL Querying & 2
                semesters of Java Programming. Finishing the degree with an
                Assembly class.
              </dd>
            </dl>
          </div>
        </div>
        <div className="d-none d-lg-block col-lg-4">
          <h2>Contact</h2>
          <p>
            <i className="bi bi-envelope-paper-heart-fill px-2"></i>
            <span className="visually-hidden">Email Address</span>
            <a href="mailto:jacob+canbereached@gmail.com">
              jacobcanbereached@gmail.com
            </a>
          </p>
          <p>
            <i className="bi bi-phone px-2"></i>

            <a href="tel:19166719273">
              <span className="visually-hidden">Phone Number</span>
              916-671-9273
            </a>
          </p>
          <p>
            <i className="bi bi-linkedin px-2"></i>

            <a href="https://www.linkedin.com/in/jake-nesom-73bb8778/">
              <span className="">LinkedIn</span>
            </a>
          </p>
        </div>
      </Row>
    </div>
  );
}

export default Resume;
