# builtwith
> Scrape data from BuiltWith.com

[![Travis](https://img.shields.io/travis/ecrmnn/builtwith.svg?style=flat-square)](https://travis-ci.org/ecrmnn/builtwith.svg?branch=master)
[![npm version](https://img.shields.io/npm/v/builtwith.svg?style=flat-square)](http://badge.fury.io/js/builtwith)
[![npm downloads](https://img.shields.io/npm/dm/builtwith.svg?style=flat-square)](http://badge.fury.io/js/builtwith)
[![npm license](https://img.shields.io/npm/l/builtwith.svg?style=flat-square)](http://badge.fury.io/js/builtwith)

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

### Related
- [builtwith-cli](https://github.com/ecrmnn/builtwith-cli) - CLI for this module

### License
MIT © [Daniel Eckermann](http://danieleckermann.com)