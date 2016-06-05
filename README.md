# open-beds

## About

A desktop and mobile web app with logins for homeless shelter staff to update total and available bed counts dynamically as they are filled and vacated permanently or temporarily on a given night, and to make referrals when they are full, with contact info, wet/dry restrictions and shelter descriptions, and map/locator integration for unsheltered persons to identify nearby potential vacancies. May be supplemented or enhanced with locators for food, clothing, medical and other resources, emergency numbers, etc. e.g. using the Handbook of the Streets distributed by St. Stephen's Human Services as a starting point.  Would require commitments by participating agencies and their personnel to enter updates in a timely fashion for near-realtime accuracy.  A Spanish translation would be a big help too.

## Code branches

- TBD

## slack

# Instructions to setup this application on local machine.

## Prerequisites

1. Install node.js  
2. Install python  
3. Install git command line 
4. Install some global node modules
 
```bash
$ sudo npm install -g bower gulp protractor
```

Note to check if you already have these installed run the following:

```bash
$ npm list --depth=0 -g
```

## Setting up the project locally

1. Clone the git repo.

2. Open Terminal and navigate to the root directory of the project

7. Run the command:

- Install Node modules
```bash
$ npm install
``` 

- Install Bower dependencies
```bash
$ bower install
```

## Building and running in Chrome browser

1. Run gulp to start server.

To start BrowserSync server on your source files with live reload debug
```bash
$ gulp serve
```

' to start server on distribution site
```bash
$ gulp serve:dist
```

To cancel hit control+c

By running just `gulp serve`, we start our development build process, consisting of:

- compiling, concatenating, auto-prefixing of all `.scss` files.
- Uses webpack to create modules for loading the js.
- Run eslint on typescript to insure compliance.
- Compile typescript into JavaScript and include source maps.
- Copy Fonts to .tmp folder.
- automatically inject sources into `index.html` so we don't have to add / remove sources manually
- Automaticly inject bower components.
- compile angular templates into javascript.
- build everything into `.tmp` folder (also gitignored)
- start local development server and serve from `.tmp`
- start watchers to automatically lint typescript source files, compile scss and reload browser on changes

## Running unit tests

1. To run your unit tests with Karma

```bash
$ gulp test
```

2. To run your unit tests with Karma in watch mode

```bash
$ gulp test:auto
```

3. To launch your e2e tests with Protractor

```bash
$ gulp protractor
```

4. To launch your e2e tests with Protractor on the dist files

```bash
$ gulp protractor:dist
```

## Build mode

By running just `gulp`, we start gulp in build mode

- everything in the serve with these extra steps.
- concat all `.js` sources into single `app.js` file
- concat all vendor `.js` sources into single `vendor.js` file
- version `.css` and `.js`
- build everything into `www`

To have javascript be optimized run `gulp --release`.
