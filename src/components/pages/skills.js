import React from 'react';

export default function Skills() {
    return (
      <div>
        <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
        >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-linux"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-docker"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-aws"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-git"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-octopus-deploy"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <p className="lead mb-9">Golang, Bash, Nginx, HTTPS, SAML2, Computer Networking,<br /> Kubernetes, Knative, Azure, Visual Studio,  C Sharp</p>
          </ul>


          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Test Driven Development
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Scrum &amp; Kanban Planning
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
        
      </section>
    </div>
    );
}