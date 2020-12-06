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
import TripOriginIcon from '@material-ui/icons/TripOrigin';
import config from '../../config';

export default function Experience() {
  return (
    <section
    className="resume-section p-3 p-lg-5 d-flex justify-content-center"
    id="experience"
    >
    <div className="w-100">
      <h2 className="mb-5">Experience</h2>
    <Timeline>
    {config.experience.map(experience => {
      const { title, icon, dateRange, bioShort, bioLong} = experience;
      return (
        <TimelineItem>
          <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                {dateRange}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                {(icon === "work") ? <WorkOutlineIcon /> : <SchoolIcon />}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>  
              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{title}</h3>
                  <div className="mb-3">{bioShort}</div>
                        {bioLong.map(social => {
                          const { paragraph } = social;
                          return (
                            <p>
                              {paragraph}
                            </p>
                          );
                        })}
                </div>
              </div>
            </TimelineContent>
        </TimelineItem>
      );
    })}
    <TimelineItem>
      <TimelineSeparator>
        <TripOriginIcon/>
      </TimelineSeparator>
      <TimelineContent>  
      </TimelineContent>
    </TimelineItem>
    </Timeline>
    </div>
</section>
  );
}