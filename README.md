# builtwith
> Scrape data from BuiltWith.com

[![Build Status](https://travis-ci.org/ecrmnn/builtwith.svg?branch=master)](https://travis-ci.org/ecrmnn/builtwith)
[![npm version](https://img.shields.io/npm/v/builtwith.svg)](http://badge.fury.io/js/builtwith)
[![npm version](https://img.shields.io/npm/dm/builtwith.svg)](http://badge.fury.io/js/builtwith)
[![npm version](https://img.shields.io/npm/l/builtwith.svg)](http://badge.fury.io/js/builtwith)

### Installation
```bash
npm install builtwith --save
```

### Usage
Get all upcoming matches
```javascript
const builtWith = require('builtwith');

builtWith('github.com')
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });

//=>  {
//=>    "frameworks": [
//=>      {
//=>        "title": " Ruby on Rails Token",
//=>        "description": "Ruby on Rails is an open-source ..."
//=>      }
//=>    ],
//=>    "email services": [],
//=>    "nameserver providers": [],
//=>    "ssl certificate": [],
//=>    "analytics and tracking": [],
//=>    "javascript libraries": [],
//=>    "mobile": [],
//=>    "document information": [],
//=>    "encoding": [],
//=>    "server information": [],
//=>    "css media queries": []
//=>  }
```

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)