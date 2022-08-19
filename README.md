# Angular SEO dynamic meta tags

This NodeJS application can easly display angular website with dynamic meta tags. Now we can see a proper meta tags of links shared via Facebook, Twitter etc. Data can be load asynchronous.

## Installation

Build app:

```bash
npm run build
```

Copy files from `./dist` directory to `./src` folder of your angular app.

Edit `angular.json` and add this files to the path `projects/architect/build/options/assets`:

```
"src/app.js",
"src/routes.js",
"src/utils.js",
```

Change `projects/architect/build/options/index` value to `"src/index1.html"` to prevent loading default html file.

Edit your `index.html` file and change this lines:

```html
<title>[[title]]</title>
<meta name="description" content="[[description]]" />
<meta property="og:image" content="[[image]]" />
```

Then change a file name from `index.html` to `index1.html`.

Build you angular app.

Now you can run NodeJs app by

```bash
node ./dist/app.js
```

Open in browser `http://localhost:3000` to see results.
