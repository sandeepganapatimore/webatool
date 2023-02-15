import puppeteer from "puppeteer";
import { AxePuppeteer } from "@axe-core/puppeteer";

const analyzeUrl = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setBypassCSP(true);
  await page.goto(url);
  const results = await new AxePuppeteer(page).analyze();
  await page.close();
  await browser.close();
  return results;
};
  
export default analyzeUrl;
