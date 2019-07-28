# webdriverio-web

The project is using webdriverio framewrork to explore automation testing for Trello.com page 

### 1. How to install webdriverio:
  - Check out this page: https://webdriver.io/docs/gettingstarted.html

### 2. Overview what existing on the package.json:
  - Webdriverio framework:
  
    - Test runner: mocha
    
    - Report: spec
    
    - services: selenium-standalone, with 2 types of browsers: firefox and chrome.
    
  - Eslint:
      <pre><code>
      
     {
      "env": {
          "es6": true,
          "node": true,
          "mocha": true
      },
      "globals": {
          "Atomics": "readonly",
          "SharedArrayBuffer": "readonly"
      },
      "parserOptions": {
          "ecmaVersion": 2018,
          "sourceType": "module"
      },
      "rules": {},
      "plugins": [
          "wdio"
      ],
      "extends": [
          "plugin:wdio/recommended",
          "eslint:recommended"
      ]
    }
      </pre></code>
