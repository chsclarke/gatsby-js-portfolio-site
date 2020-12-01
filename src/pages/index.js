import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Experience from '../components/pages/experience'
import About from  '../components/pages/about'
// import Education from  '../components/pages/education'
import Skills from '../components/pages/skills'

const IndexPage = () => (
  <Layout>
    <Sidebar />
      <div className="container-fluid p-0">
        <About/>
        <hr className="m-0" />
        <Experience/>
        <hr className="m-0" />
        {/* <Education/>
        <hr className="m-0" /> */}
        <Skills/>
      </div>
  </Layout>
);

export default IndexPage;
