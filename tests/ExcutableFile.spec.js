#!/usr/bin/env node

import { test, expect } from "@playwright/test";
 
test("Check all Hubtel for Hospitals links excluding links with / or wrong format", async ({
  page,
}) => {
  // Navigate to Hubtel for hospitals page
  await page.goto("https://explore.hubtel.com/hospitals/");
 
  // Find and collect all anchor elements on the page
  const links = await page.$$eval("a", (elements) =>
    elements.map((element) => {
      const href = element.getAttribute("href");
      return href;
    })
  );
 
  // Loop through each link and check if it's working
  for (const link of links) {
    if (link.startsWith("http://") || link.startsWith("https://")) {
      const response = await page.goto(link, { timeout: 3000 * 10 });
 
      const statusCode = await response.status();
 
      expect(statusCode).toBe(200);
    }
  }
});
 