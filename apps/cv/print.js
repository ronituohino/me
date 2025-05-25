import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({
    // Keep same platform because pdf prints look different
    browser: "firefox",
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto("http://localhost:5173");

  await page.setViewport({ width: 1920, height: 1080 });
  await page.pdf({
    path: "../website/public/ronituohino-resume.pdf",
    format: "A4",
    printBackground: true,
  });

  await browser.close();
})();

export {};
