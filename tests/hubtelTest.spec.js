/*

const {test,expect} = require('@playwright/test');

test('Should check the presence of footer,title and the functionality of the URL of payment/Request money from anyone',async ({page}) =>{

    await page.goto('https://explore.hubtel.com/request-money-from-anyone/');


//const TakePayment_RequestMoneyFromAnyone = page.title();

 await expect(page).toHaveTitle('Request Money From Anyone - Hubtel');



 const pageURL=page.url();
 await expect(page).toHaveURL('https://explore.hubtel.com/request-money-from-anyone/');

const footer = await page.$('footer');

  const footerText = await footer?.textContent();

  expect(footer).not.toBe.null;
  
  expect(footerText).toContain('©2005 - 2023');

  
} 

);



//charge customers in-store

test('To check for Take payment_charge customers in-store page URL,Title and Footer',async ({page}) =>{

    await page.goto('https://explore.hubtel.com/charge-customers-in-store/');


const TakePayment_chargeCustomersInStore = page.title();
 await expect(page).toHaveTitle('Charge customers in store - Hubtel');

 const pageURL=page.url();
 await expect(page).toHaveURL('https://explore.hubtel.com/charge-customers-in-store/');

const footer = await page.$('footer');

  const footerText = await footer?.textContent();

  expect(footer).not.toBe.null;
  
  expect(footerText).toContain('©2005 - 2023');
  
} 

);

//Grow Revenues

test('Should check the presence of footer,title and the functionality of the URL in RaiseUp for Schools page',async ({page}) =>{

    await page.goto('https://explore.hubtel.com/schools/');


const growRevenues_RaiseUpForSchoolsHubtel = page.title();
 await expect(page).toHaveTitle('RaiseUp for Schools - Hubtel');

 const pageURL=page.url();
 await expect(page).toHaveURL('https://explore.hubtel.com/schools/');

const footer = await page.$('footer');

  const footerText = await footer?.textContent();

  expect(footer).not.toBe.null;
  
  expect(footerText).toContain('©2005 - 2023');

} 

);


//Hospital

test('Should check the presence of footer,title and the functionality of the URL in Hubtel for Hospitals page',async ({page}) =>{

    await page.goto('https://explore.hubtel.com/hospitals/');


const growRevenues_HubtelForHospitals = page.title();
 await expect(page).toHaveTitle('Hubtel for Hospitals');

 const pageURL=page.url();
 await expect(page).toHaveURL('https://explore.hubtel.com/hospitals/');

const footer = await page.$('footer');

  const footerText = await footer?.textContent();

  expect(footer).not.toBe.null;
  
  expect(footerText).toContain('©2005 - 2023');
  
} 

);

//Hubtel for Government

test('Should check the presence of footer,title and the functionality of the URL in Hubtel for Government page',async ({page}) =>{

    await page.goto('https://explore.hubtel.com/government/');


const growRevenues_HubtelForGovernment = page.title();
 await expect(page).toHaveTitle('Hubtel for Government');

 const pageURL=page.url();
 await expect(page).toHaveURL('https://explore.hubtel.com/government/');

const footer = await page.$('footer');

  const footerText = await footer?.textContent();

  expect(footer).not.toBe.null;
  
  expect(footerText).toContain('©2005 - 2023');

  await page.close();
  
} 

);

*/
