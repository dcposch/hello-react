# hello react

**we're going to create a minimalist react app.**

the goal isn't just to get something working. it's to make something you can understand in its entirety. to that end, we're going to keep things much simpler than, say, create-react-app.

## prerequisites

this quick start assumes you already know javascript and are familiar with web basics, including HTML and CSS.

beyond that, all we need is:

1. git

   if you haven't already, clone this repo.

2. node, including npm: https://nodejs.org/en/download/

   the following version should be greater than 8.0.0

   ```
   npm --version
   ```

3. optionally, an IDE. i recommend VS Code, which has excellent support for web development without much configuration.

## quick start

clone this repo. create an empty NPM package:

```
npm init
```

this creates a `package.json` file. this will be our ONLY build configuration file. it specifies all of our dependencies, how to build, and how to test.

next, install, dependencies:

```
npm install esbuild react react-dom @types/react @types/react-dom
```

esbuild is an exceptionally fast javascript bundler. it serves a similar function as parcel or webpack, but is both faster and simpler. it turns a source tree plus npm dependencies into a single `bundle.js` that can run in a browser.

react is a super popular library for coding single-page webapps.

finally, `@types/xyz`, by convention, contains Typescript types for package `xyz`.

## reference

intro to react: https://reactjs.org/tutorial/tutorial.html

intro to typescript: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html


## step 1: hello world

run `ls -lha node_modules`. you should see our dependencies plus a folder called `.bin`.

run `./node_modules/.bin/esbuild`. this prints esbuild's help options. as a shortcut, you can achieve the same thing by running `npx esbuild`.

create a file, `app.tsx`, as follows:

```tsx
import * as React from 'react'
import ReactDOM from 'react-dom'

function App() {
    return <h1>hello world</h1>
}

ReactDOM.render(<App />, document.querySelector('#root'))
```

next run:

```
npx esbuild app.tsx --serve
```

this bundles your file plus all dependencies, converts Typescript to Javascript, and produces a single `app.js`. load it in your browser to see what that looks like!

finally, we're going to create an empty page. this is a very common pattern in react: the HTML is just a bootstrapping mechanism for loading JS.

make a folder called `www/`, then `www/index.html`:

```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root" />
    <script src="js/app.js"></script>
  </body>
</html>
```

run the following:

```
npx esbuild app.tsx --bundle --servedir=www/ --outdir=www/js
```

congratulations! your first React web app.

to avoid excess, typing, add the following to your `package.json`

```jsonc
  // ...
  "scripts": {
      "start": "esbuild app.tsx --bundle --servedir=www/ --outdir=www/js"
  }
  // ...
```

from now on, you can just type:

```
npm start     # shorthand for `npm run start`
```

> if you are stuck, run `git diff origin/step1`

## step 2: cookie clicker

recreate the cookie clicker game. for reference: https://orteil.dashnet.org/cookieclicker/

check out the Intro to React reference, link above.

should look something like this:

![image](https://user-images.githubusercontent.com/169280/148868473-ba98c4c6-98af-44e0-aafb-48ec63b31c3a.png)


## bonus: prettier

i recommend installing the Prettier extension in VS Code. then, configure format-on-save. one less thing to think about.


## bonus: test

start with:

```
git checkout step2
```

...then, write a unit test for `pluralize`. i recommend `tape`, the most minimal testing libary for npm. once done, you should be able to run

```
npm test
```

...to see your tests run.


## bonus: deploy

add a build script to your `package.json`:

```
  "scripts": {
      // "start" as before
      "build": "esbuild app.tsx --bundle --minify --outdir=www/js"
  }
```

deploy to Netlify, using `npm run build` as the build command.
