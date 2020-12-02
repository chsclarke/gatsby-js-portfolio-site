import React from 'react';
import config from '../../../config';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
            I love runnning, camping, hiking–anything outdoors. Big fan of videogames when I'm indoors. I think good relationships are more important than anything else.
            To describe my work style in three sentences: I am passionate about my work. I am a great communicator. I love to learn new things. 
          </p>
          <p className="lead mb-5">
          Keep reading to learn a little more about me.
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
          </div>
          </Slide>
        </div>
      </section>
      </div>
    );
}