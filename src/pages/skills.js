import React from 'react';
import config from '../../config';

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
            {config.skillsIcons.map(skills => {
                const { icon } = skills;
                return (
                  <li className="list-inline-item">
                    <i className={icon}></i>
                  </li>
                );
            })}
            <p style={{width:"60%"}} className="lead mb-9">{config.skillsNoIcon}</p>
          </ul>
          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
              {config.workflow.map(workflow => {
                const { paragraph } = workflow;
                return (
                  <li>
                    <i className="fa-li fa fa-check"></i>
                    {paragraph}
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    </div>
    );
}