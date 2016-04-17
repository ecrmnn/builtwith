'use strict';

const got = require('got');
const cheerio = require('cheerio');

const getUrl = function (url) {
  return new Promise(function (resolve, reject) {
    got('http://builtwith.com/' + url)
      .then(response => {
        resolve(parseHtml(response.body));
      })
      .catch(error => {
        reject(error);
      });
  });
}

const parseHtml = function (html) {
  const $ = cheerio.load(html);

  let currentWorkingTitle;
  const data = {};

  $('.span8 .titleBox, .span8 .techItem').each(function (index, element) {
    /**
     * Parse Title
     */
    if ($(this).hasClass('titleBox')) {
      const title = $(this).find('span').text().toLowerCase();

      if (currentWorkingTitle !== title) {
        currentWorkingTitle = title;
        data[title] = [];
      }
    }

    /**
     * Parse Tech Item
     */
    if ($(this).hasClass('techItem')) {
      const techTitle = $(this).find('h3').text();
      const description = $(this).find('p').text();

      data[currentWorkingTitle].push({title: techTitle, description});
    }
  });

  return data;
}

module.exports = getUrl;