import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import SchoolIcon from '@material-ui/icons/School';

export default function Experience() {
  return (
    <section
    className="resume-section p-3 p-lg-5 d-flex justify-content-center"
    id="experience"
    >
    <div className="w-100">
      <h2 className="mb-5">Experience</h2>
    <Timeline>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
              August 2020 - Present
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          <WorkOutlineIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>  
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineer</h3>
              <div className="mb-3">VMware</div>
              <p>
              • Working on the Partner Products team to enable a command-line based CI/CD pipeline for key partners to edit and build redacted versions of VMware's ESX code.
              </p>
              <p>
              • Notable work includes authentication and authorization of users with SSO, build queuing system, various feature upgrades.
              </p>
              <p>
              • Technology used to complete the project includes Golang, Python, Bash, Docker, Nginx, HTTPS, SAML2, Linux.
              </p>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
              September 2016 - May 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          <SchoolIcon />
        </TimelineDot>
        <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Boston University Graduate</h3>
              <div className="mb-3">BS, Computer Engineering</div>          
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
              May 2019 - August 2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          <WorkOutlineIcon />
        </TimelineDot>
        <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">Software Engineering Intern</h3>
                <div className="mb-3">Charles River Development (Acquired by State Street Corp.)</div>
                <p>
                • Worked in Agile Development with the Scenario Analysis team. Assisting in developing an ”analytics” microservice, a cloud microservice intended to dynamically scale scenario calculations to the cloud when on prem infrastructure becomes insufficient. (used: Docker, Kubernetes, Knative, Azure).
                </p>
                <p>
                • Main project consisted of developing an automated program that collects and measures performance data from the Scenario Analysis teams code across software releases.
                </p>
                <p>
                • Technology used to complete the project includes ELK stack on Red Hat Enterprise Linux, Metricbeat on Windows machine to log host system performance, Java code to enable software logging.
                </p>
              </div>
            </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          May 2018 - August 2018
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          <WorkOutlineIcon />
        </TimelineDot>
        <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Devolpment Intern</h3>
              <div className="mb-3">Coyote Logistics (Acquired by UPS)</div>
              <p>
              • Worked with a development team upgrading portions of unique enterprise application BAZOOKA (used: Visual Studio, C Sharp, XAML and DevExpress, VSTS, Git).
              </p>
              <p>
              • Main project consisted of creating a dynamic, final-four bracket web application using ASP.NET and deployed it as a company portal for intramural sports (used: Visual Studio, C Sharp, HTML, CSS, VSTS, Git, Octopus).
              </p>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
          May 2017 - August 2017
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          <WorkOutlineIcon />
        </TimelineDot>
        <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Business Analytics Intern</h3>
              <div className="mb-3">Coyote Logistics (Acquired by UPS)</div>
              <p>
              • Worked in the Business Intelligence department assisting the team in creating reports that populate live data for managers and executives within the company.
              </p>
              <p>
              • Created reports using complex SQL queries and visualized the data with Tableau and SSRS Report Manager.
              </p>
              <p>
              • Main project consisted of migrating files from the SSRS to the TFS server while archiving dormant files. This process involved communicating and meeting within the executive level of all major branches of the company. Migrating the files allowed the BI department could begin using version control within the TFS server.
              </p>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            September 2012 - May 2016
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          <WorkOutlineIcon />
        </TimelineDot>
        {/* <TimelineConnector /> */}
        </TimelineSeparator>
        <TimelineContent>
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Lake Forest Academy Graduate</h3>
              <div className="mb-3">Liberal Arts Focus</div>
              <p>
              • Deans List, Four-year varsity hockey and co-captain senior year.
              </p>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
</section>
  );
}