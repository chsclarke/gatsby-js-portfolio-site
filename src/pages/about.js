import React from 'react';
import config from '../../config';
import Slide from '@mui/material/Slide';
import Modal from '../components/Modal'
import Box from '@mui/material/Box';
import { Link } from "gatsby"

export default function About() {
    return (
      <div>
        <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
        >
        <div className="w-100">
          <Slide in={true} timeout={700} direction="right">
            <div>
            <h1 className="mb-0">
              {config.firstName}
              <span className="text-primary"> {config.lastName}</span>
            </h1>
            <div className="subheading mb-5">
              {config.address} · {/* {config.phone} · */}
              <a href={`mailto:${config.email}`}>{config.email}</a>
            </div>
            <div>
          <p className="lead mb-5">
          {config.biography}
          </p>
          <p className="lead mb-5">
          I build this resume site as a service. Source <Link to="https://github.com/chsclarke/gatsby-js-portfolio-site">here</Link>.
          </p>
          </div>
          </div>
          </Slide>
          <Slide in={true} timeout={900} direction="right">
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          <Box mt="2rem">
            <br/>
           <Modal/>
          </Box>   
          </div>       
          </Slide>
          <Box mt="3rem">
          <Slide in={true} timeout={900} direction="right">
          <div>
        </div>
        </Slide>
        </Box>
        </div>
      </section>
      </div>
    );
}