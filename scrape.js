
// initialise all dependencies
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const express = require('express');


let maxPage=19;

// Function to scrape Oscar-winning movies
async function scrapeNames(page) {
    try {
      const baseURL = `https://www.pornhub.org/pornstars?gender=female&ethnicity=indian&page=${page}`;
      const response = await axios.get(baseURL);
      const $ = cheerio.load(response.data);
  
      const nameData = [];
  
      $('.modelLi.performerCard').each((index, element) => {
        const titleElement = $(element).find('.modelName.performerCardName');
        const title = titleElement.text().trim();
  
        if (title) {
          nameData.push(title);
        }
      });
  
      return nameData;
    } catch (error) {
      console.error('Error scraping:', error);
      return [];
    }
  }
  
  // defining main function which scrapes all pages
  async function main() {
    const allNames = [];
  
    for (let page = 1; page <= maxPage; page++) {
      const names = await scrapeNames(page);
      allNames.push(...names);
    }
  
    // Save scraped data to a JSON file
    const dataPath = path.join(__dirname, 'scrapedName.json');
    fs.writeFileSync(dataPath, JSON.stringify(allNames, null, 2));
    console.log('Scraped Data saved ');
  }
  
  // calling main function, it runs first
  main();