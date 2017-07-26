[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f881e79421544fff94ff913412bc28ed)](https://www.codacy.com/app/Liftit/liftit-npm-es5-skeleton?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Liftitapp/liftit-npm-es5-skeleton&amp;utm_campaign=Badge_Grade) [![Build Status](https://semaphoreci.com/api/v1/liftit/liftit-npm-es5-skeleton/branches/master/shields_badge.svg)](https://semaphoreci.com/liftit/liftit-npm-es5-skeleton)

# Liftit npm ES5 Skeleton

## Features

- Node optimized ES5 transpilation with [Babel](https://github.com/babel/babel)
- Code monitoring and auto server restart with [nodemon](https://github.com/remy/nodemon)
- ES5+ Testing via [babel-register](https://github.com/babel/babel/tree/master/packages/babel-register) with [Mocha](https://github.com/mochajs/mocha) & [Chai](https://github.com/chaijs/chai)
- ES5 aware, minifier based on rollup [rollup](https://github.com/rollup/rollup)
- HTML Test Report via [mochawesome](https://github.com/adamgruber/mochawesome)
- Code Linting with [ESLint](https://github.com/eslint/eslint)
- Sourcemap generation
- Vulnerability scan via [nsp](https://github.com/nodesecurity/nsp)
- Check for latest versions of dependencies via [ncu](https://github.com/tjunnone/npm-check-updates)
- Husky to run git hooks [Husky](https://github.com/typicode/husky)
- npm scripts included to run quick tasks

## Setup

- **Step 1:** `git clone https://github.com/Liftitapp/liftit-npm-es5-skeleton.git <YourProjectName>`
- **Step 2:** `cd <YourProjectName> && npm install`
- **Step 3:** `start hacking`

## npm runners

| Runner | Description |
| --- | --- |
| `npm start src` | executes the project with live reload enabled via `nodemon` and transpiled with `babel|node`
| `npm run debug src` | executes the project with debug flag enabled
| `npm run benchmark` | runs benchmark tests with `benchmark.js`
| `npm run benchmark:watch` | runs benchmark tests with `benchmark.js` and watch for file changes
| `npm run lint` | code linting with `eslint`
| `npm run lint:fix` | fixes all problems automatically with `eslint`
| `npm test` | runs tests with `mocha` and `chai` with spec as reporter
| `npm run test:watch` | runs tests with `mocha` and `chai` and watch for changes
| `npm run test:reporter` | runs tests with `mocha` and `chai` with `list` reporter
| `npm run test:export` | exports tests results as html files in the `./reports` folder via `mochasome`
| `npm run build` | transpiles and minifies ES6+ code and create sourcemaps with `babel` & `babili`
| `npm run scan:security` | runs vulnerability tests via the node security platform `nsp`
| `npm run scan:updates` | checks for latest versions of dependencies via `ncu`
| `npm run precommit` | runs git hooks with`Husky`
| `npm run prepush` | runs git hooks with`Husky`
| `npm run postmerge` | runs git hooks with`Husky`
| `npm run postrewrite` | runs git hooks with`Husky`

## License

MIT ©

Copyright 2017 [Liftit](https://liftit.co)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.