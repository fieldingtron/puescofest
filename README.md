 
 # Atlas Start Bootstrap Freelancer 

This theme is based on [Start Bootstrap Theme](https://startbootstrap.com/template-overviews/freelancer/} and the atlas starter
boilerplate for the [Hugo](https://gohugo.io/) . BootStrap 4 Hugo BoilerPlate code to get started quickly based on Atlas GitHub Project

Tech details below .. This is to support and protect free flowing rivers in Chile




## Features

Atlas provides the following features out of the box:

* A set of [Gulp](/gulpfile.babel.js) tasks for SASS, Linting, ES2015, Image compression
* Environment driven `robots.txt` file (disallows robots on everything other than production)
* Base HTML templates with easy customisation/extension
* [Configuration](/netlify.toml) for Netlify deployments
* [Better defaults](#security-headers) for configuring HTTPS
* [Better redirects](#redirects) with Netlify instead of `<meta http-equiv="refresh">`

## Prerequisite

Atlas does not include a copy of the `hugo` binary. You will need to [install Hugo](https://gohugo.io/getting-started/installing/) first you can run any of the [commands](#available-commands) mentioned below.

## Getting Started

To get started, you can either clone the repository, or deploy straight to [Netlify](#deploy-to-netlify). Then run the following from the project root:

```
npm install
npm run server
```

### Available Commands

There are 3 commands available:

* `npm run build` - Builds assets (sass, js, fonts, images) and runs `hugo`
* `npm run build:preview` - The same as `build`, but runs `hugo --buildDrafts --buildFuture`
* `npm run server` - Runs BrowserSync and watches for changes, running `build` when changes are detected
 