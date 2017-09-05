'use strict';

const builtWith = require('../');
const chai = require('chai');
const expect = require('chai').expect;

describe('Analyze GitHub.com Tech Profile', function () {
  let gitHubTechProfile = [];

  before(function (done) {
    builtWith('github.com')
      .then(response => {
        gitHubTechProfile = response;
        done();
      })
      .catch(err => {
        console.log(err);
      });
  });

  it('Uses Ruby on Rails', function () {
    const frameworksAsString = JSON.stringify(gitHubTechProfile.frameworks);
    const rubyOnRailsCount = frameworksAsString.match(/Ruby on Rails/g).length;

    expect(rubyOnRailsCount).to.be.above(0);
  });
});

describe('Analyze Wordpress.org Tech Profile', function () {
  let wordpressTechProfile = [];

  before(function (done) {
    builtWith('wordpress.org')
      .then(response => {
        wordpressTechProfile = response;
        done()
      })
      .catch(err => {
        console.log(err);
      });
  })

  it('Uses Wordpress', function () {
    const frameworksAsString = JSON.stringify(wordpressTechProfile);
    const wordpressCount = frameworksAsString.match(/WordPress/g).length;

    expect(wordpressCount).to.be.above(0);
  })
});

describe('Analyze Laravel.com Tech Profile', function () {
  let laravelTechProfile = [];

  before(function (done) {
    builtWith('laravel.com')
      .then(response => {
        laravelTechProfile = response;
        done()
      })
      .catch(err => {
        console.log(err);
      });
  })

  it('Uses Mailgun', function () {
    const frameworksAsString = JSON.stringify(laravelTechProfile);
    const laravelCount = frameworksAsString.match(/Mailgun/g).length;

    expect(laravelCount).to.be.above(0);
  })
});