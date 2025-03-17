# Drop down menu

This project is a practice project that was built in accordance with the ODIN Project Drop Down Menu assignment to practice creating drop down menu functionality with vanilla Javascript.

Project consists of a simple nav bar with a drop down menu inside.

**Check out the Assignment guidelines for this project:**
https://www.theodinproject.com/lessons/node-path-javascript-dynamic-user-interface-interactions#assignment



## How to use this dropdown

You can utilize this drop down menu as a module into your own codebases if you would like to use it.

The entire nav bar can be used as is, or if you only want the dropdown menu the start and end of the dropdown menu is marked with comments so that you can easily remove it from the content above and below it.

### Option 1
You do not want/need to change the class names on the dropdown menu:

Do nothing and the JS will work as is!

### Option 2
If you want to change the class names in accordance with your project:

* Make sure to assign a unique class name to the dropdown button, the div that contains the dropdown content.
* Assign the SAME class for all the dropdown links.
* In index.js update the const dropdownBtn, dropdownContent, and dropdownLinks to target the respective classes you created.


## Getting Started

Before getting started make sure you have the latest version of npm installed.

I recommend downloading Node Version Manager (NVM) first and then downloading Node.

**For quick and easy instructions on how to download nvm and set up node:** https://www.theodinproject.com/lessons/foundations-installing-node-js

Next fork a copy of this repository to your github account and clone a local copy using the command
```
git clone git@github.com:@your-github-username/@your-forked-copy.git
```

and download the following dependencies:


### Webpack

Download Webpack locally with
```
npm install --save-dev webpack webpack-cli
```

and download the following:

**Webpack Local Server**
```
npm install --save-dev webpack-dev-server
```


**HTML Plugin**
```
npm install --save-dev html-webpack-plugin
```


**HTML Loader**
```
npm install --save-dev html-loader
```


**CSS-Loader**
```
npm install --save-dev style-loader css-loader

```
For a more detailed guide on installing and working with Webpack see : https://webpack.js.org/guides/installation/

### Local Server

After sucessfully cloning the repository, in order to launch the program locally you will need to run the webpack server using the command

```
npm run serve
```
and then the program will load at http://localhost:8080/ 