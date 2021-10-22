import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolIcon from '@mui/icons-material/School';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
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