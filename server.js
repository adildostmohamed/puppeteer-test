const puppeteer = require('puppeteer');
const HEAP_COOKIE = require('./utils/cookie');

const search_submission_trigger = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.setCookie(HEAP_COOKIE);
  await page.click('.btn--search-alt');
  await page.type('.search-form__input', 'Headless Chrome');
  await page.keyboard.press('Enter');
  console.log('New Page URL:', page.url());
  await browser.close();
};

for (let i = 0; i < 10; i++) {
  search_submission_trigger();
}
