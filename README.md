# gatsby-js-portfolio-site

This repo is meant to be a quick, **free** (you might have to buy a domain–mine cost $12 per year), and easy to deploy resume website builder. The webiste is fully built, configred, and ready to be deployed. All **you** have to do is edit the config.js file to see this site become your own.

See a live demo of this code [here](https://www.chaseclarke.com)

## Installation

Install Node/npm [here](https://www.npmjs.com/get-npm) if you do not have it on your machine.

The Gatsby CLI is available via npm and should be installed globally by running:

`$ npm install -g gatsby-cli`

Create a new site from my starter:

`$ gatsby new my-resume-site https://github.com/chsclarke/gatsby-js-portfolio-site`

`$ cd my-resume-site`

Install dependencies:

`$ npm install`

Start the development mode for Gatsby:

`$ gatsby develop`

Open up a new tab in your browser and navigate to http://localhost:8000/

Congrats! This is the beginning of your very first Gatsby resume site! 🎉

## Customization

All of the content on this website is controlled by [config.js](https://github.com/chsclarke/gatsby-js-portfolio-site/blob/master/config.js). You can edit anything and everything there.

Please add your own resumes and avatar photo to `/static`. Update the filenames in `config.js`.

A great resource to build your resume in all theses filetypes is www.resume.io. You can do a $2 free trial.

## Deployment

You will want to purchase a domain for this step. I reccomend the format firstname + lastname + .com OR firstname + middle inital + lastname + .com OR some variant.

I used [netlify](https://www.netlify.com/) to host my site. Its incredibly fast and easy, and the hosting free tier is more than sufficient for a personal site.

Just follow the link, sign in with your github account, and give Netlify permission to access your repo. Netlify will take care of the rest. With every following push to your main branch, netlify will update your live site in minuets. Its a great CI/CD tool!