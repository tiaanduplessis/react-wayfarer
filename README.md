
# react-wayfarer
[![package version](https://img.shields.io/npm/v/react-wayfarer.svg?style=flat-square)](https://npmjs.org/package/react-wayfarer)
[![package downloads](https://img.shields.io/npm/dm/react-wayfarer.svg?style=flat-square)](https://npmjs.org/package/react-wayfarer)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/react-wayfarer.svg?style=flat-square)](https://npmjs.org/package/react-wayfarer)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> A naive little router build with wayfarer (492 bytes gzipped)

## Table of Contents

  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [License](#license)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install react-wayfarer
$ # OR
$ yarn add react-wayfarer
```

## Usage

```js
import React from "react";
import ReactDOM from "react-dom";
import Router from "react-wayfarer";

const PageOne = () => (
  <h2>
    Page 1 <a href="/fooper">go to</a>
  </h2>
);
const PageTwo = props => <h2>Page 2 has the name {props.params.name}</h2>;

function App() {
  return (
    <Router>
      <PageOne path="/" />
      <PageTwo path="/:name" />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
    