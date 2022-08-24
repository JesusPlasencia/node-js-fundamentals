#!SCRAPING
const puppeteer = require("puppeteer");

(async () => {
  //OUR CODE
  console.log("Launching a browser");
  const browser = await puppeteer.launch({ headless: false });

  //GO TO WIKIPEDIA
  const page = await browser.newPage();
  await page.goto("https://es.wikipedia.org/wiki/Node.js");

  var title = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    console.log(h1.innerHTML);
    return h1.innerHTML;
  });

  console.log(title);

  //CLOSE
  console.log("Closing the browser");
  browser.close();
  console.log("Browser closed");
})();
