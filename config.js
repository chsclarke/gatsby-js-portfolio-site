module.exports = {
  // ========================================
  // ====== General site configuration ======
  // ========================================
  siteTitle: 'Chase Clarke',            // <title>
  manifestName: 'Resume',
  manifestShortName: 'Landing',               // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/apple-touch-icon.png',
  avatar: "/chase-clarke.jpeg",               // put your photo in /static and rename here
  resumeFormat: "ChaseClarkeResume", //.pdf, .txt, .docx | put your resumes in /static and rename here

  // ========================================
  // ========== About Me Section ============
  // ========================================
  firstName: 'Chase',
  lastName: 'Clarke',
  
  address: 'San Franciso, CA',
  email: 'cfclarke@bu.edu', 

  // newlines are ignored here as this is translated to HTML
  biography: `I love runnning, camping, hiking–anything outdoors. 
        Big fan of videogames when I'm indoors. I think good relationships 
        are more important than anything else. To describe my work style 
        in three sentences: I am passionate about my work. I am a great 
        communicator. I love to learn new things.`,

  // Don't like icons? see alternatives here:
  // https://fontawesome.com/icons?d=gallery
  socialLinks: [
    {
      icon: 'fa-github', //Font Awesome icon
      name: 'Github',
      url: 'https://github.com/chsclarke',
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/chase-clarke/',
    },
    {
      icon: 'fas fa-envelope',
      name: 'Mail',
      url: 'mailto: cfclarke@bu.edu',
    },
  ],

  // ========================================
  // ========= Experience Section ===========
  // ========================================
  experience: [
    {
      title: 'SOFTWARE ENGINEER',
      icon: 'work',                           // Options: work or education
      dateRange: 'September 2021 – Present',
      bioShort: 'VMware – Engineering Operations',
      bioLong: [
        {
          paragraph: `• Currently Working to build a service that tests newly submitted p4 changesets on ESXi’s (VMware Hypervisor) main branch. Upon completion, a dashboard will be presented that details statistics about the build and test successes and failures.`
        },
        {
          paragraph: `• The primary goal of this service is to test for and identify build time regressions in order to find and back out problematic p4 changesets. Builds on main are incremental–meaning that components from previous builds are recycled in future builds. Problematic components on main need to be manually identified before changesets can be backed out, hence the motivation for this project.`
        },
      ],
    },
    {
      title: 'SOFTWARE ENGINEER',
      icon: 'work',                           // Options: work or education
      dateRange: 'August 2020 to September 2021',
      bioShort: 'VMware – Partner Engineering',
      bioLong: [
        {
          paragraph: `• Assisted in developing features for a secure Intel-VMware remote build pipeline that enabled Intel to edit, build, and test redacted ESXi code (VMware Hypervisor) across corporate networks.`
        },
        {
          paragraph: `• Within six months I became the primary maintainer of the build pipeline and spearheaded a redesign from non-containerized code to micro-service based architecture. Held primary responsibility for submission of new architecture to the VMware security team for review. Finally, held primary responsibility for the roll-out of new architecture to Intel. Service no longer has a full time maintainer.`
        },
        {
          paragraph: `• Technology used to complete the redesign includes: Kubernetes/Docker/GitLab, Golang Client/Server CLI on front-end. LXD/Ubuntu/Python compiler for ESXi on back-end.`
        },
      ],
    },
    {
      title: 'BOSTON UNIVERSITY GRADUATE',
      icon: 'education',                     // Options: work or education
      dateRange: 'September 2016 - May 2020',
      bioShort: 'BS, Computer Engineering',
      bioLong: [],
    },
    {
      title: 'SOFTWARE ENGINEERING INTERN',
      icon: 'work',                           // Options: work or education
      dateRange: 'May 2019 - August 2019',
      bioShort: 'Charles River Development (Acquired by State Street Corp.)',
      bioLong: [
        {
          paragraph: `• Worked in Agile Development with the Scenario Analysis team. Assisting in developing an ”analytics” microservice, a cloud microservice intended to dynamically scale scenario calculations to the cloud when on prem infrastructure becomes insufficient. (used: Docker, Kubernetes, Knative, Azure).`
        },
        {
          paragraph: `• Main project consisted of developing an automated program that collects and measures performance data from the Scenario Analysis teams code across software releases.`
        },
        {
          paragraph: `• Technology used to complete the project includes ELK stack on Red Hat Enterprise Linux, Metricbeat on Windows machine to log host system performance, Java code to enable software logging.`
        },
      ],
    },
    {
      title: 'SOFTWARE DEVOLPMENT INTERN',
      icon: 'work',                           // Options: work or education
      dateRange: 'May 2018 - August 2018',
      bioShort: 'Coyote Logistics (Acquired by UPS)',
      bioLong: [
        {
          paragraph: `• Worked with a development team upgrading portions of unique enterprise application BAZOOKA (used: Visual Studio, C Sharp, XAML and DevExpress, VSTS, Git).`
        },
        {
          paragraph: `• Main project consisted of creating a dynamic, final-four bracket web application using ASP.NET and deployed it as a company portal for intramural sports (used: Visual Studio, C Sharp, HTML, CSS, VSTS, Git, Octopus).`
        },
      ],
    },
    {
      title: 'BUSINESS ANALYTICS INTERN',
      icon: 'work',                           // Options: work or education
      dateRange: 'May 2017 - August 2017',
      bioShort: 'Coyote Logistics (Acquired by UPS)',
      bioLong: [
        {
          paragraph: `• Worked in the Business Intelligence department assisting the team in creating reports that populate live data for managers and executives within the company.`
        },
        {
          paragraph: `• Created reports using complex SQL queries and visualized the data with Tableau and SSRS Report Manager.`
        },
        {
          paragraph: `• Main project consisted of migrating files from the SSRS to the TFS server while archiving dormant files. This process involved communicating and meeting within the executive level of all major branches of the company. Migrating the files allowed the BI department could begin using version control within the TFS server.`
        },
      ],
    },
    {
      title: 'LAKE FOREST ACADEMY GRADUATE',
      icon: 'education',                           // Options: work or education
      dateRange: 'September 2012 - May 2016',
      bioShort: 'Liberal Arts Focus',
      bioLong: [
        {
          paragraph: `• Deans List, Four-year varsity hockey and co-captain senior year.`
        },
      ],
    },
  ],

  // ========================================
  // ========== Skills Section ==============
  // ========================================

  // Add the icons you can find in the material ui icon library
  // https://fontawesome.com/icons?d=gallery
  skillsIcons: [
    {
      icon: 'fab fa-python'
    },
    {
      icon: 'fab fa-linux'
    },
    {
      icon: 'fab fa-docker'
    },
    {
      icon: 'fab fa-aws'
    },
    {
      icon: 'fab fa-html5'
    },
    {
      icon: 'fab fa-css3-alt'
    },
    {
      icon: 'fab fa-git'
    },
    {
      icon: 'fab fa-octopus-deploy'
    },
  ],

  skillsNoIcon: `Golang, Bash, Nginx, HTTPS, SAML2, Computer Networking, Kubernetes, Knative, Azure, Visual Studio, C Sharp`,

  workflow: [
    {
      paragraph: 'Scrum & Kanban Planning'
    },
    {
      paragraph: 'Agile Development'
    },
  ],
};
