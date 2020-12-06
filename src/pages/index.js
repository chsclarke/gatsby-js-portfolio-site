import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Experience from './experience'
import About from  './about'
import Skills from './skills'

const IndexPage = () => (
  <Layout>
    <Sidebar />
      <div className="container-fluid p-0">
        <About/>
        <hr className="m-0" />
        <Experience/>
        <hr className="m-0" />
        <Skills/>
      </div>
  </Layout>
);

export default IndexPage;
