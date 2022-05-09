const playwright = require('playwright');
const {expect, default: test } = require('@playwright/test');


test.describe('test', () => {

  test('The URL of the main page should be https://spacee.com/ and Navigating to the Space logo on top takes you to the homepage', async ({ page }) => { 
    test.setTimeout(120000);
    //Code execution happens within in here
    const browser = await playwright["chromium"].launch({
        headless: false
    });

    //context
    const context = await browser.newContext();


    //navigate to the page
    await page.goto("https://spacee.com/",{ timeout: 30000000 });

    //checking if clicking on spacee button takes us to homepage
    await page.locator('[aria-label="home"] img').click();
    await expect(page).toHaveURL('https://www.spacee.com/');
  })


  test(' Navigating on the contact us button on homage displays a form  and Form on the contact us page can be filled out and submitted.', async ({ page }) => { 
    test.setTimeout(120000);
    await page.goto("https://spacee.com/",{ timeout: 30000000 });

    //checking if contact us button displays a form
    await page.locator('div[role="banner"] >> text=Contact Us').click();
    await expect(page).toHaveURL('https://www.spacee.com/contact-spacee');
  // Click input[name="first_name"]
  await page.locator('input[name="first_name"]').click();
  // Fill input[name="first_name"]
  await page.locator('input[name="first_name"]').fill('akash');
  // Press Tab
  await page.locator('input[name="first_name"]').press('Tab');
  // Fill input[name="last_name"]
  await page.locator('input[name="last_name"]').fill('balu');
  // Press Tab
  await page.locator('input[name="last_name"]').press('Tab');
  // Fill input[name="company"]
  await page.locator('input[name="company"]').fill('tesla');
  // Press Tab
  await page.locator('input[name="company"]').press('Tab');
  // Fill input[name="email"]
  await page.locator('input[name="email"]').fill('tesla@gmail.com');
  // Press Tab
  await page.locator('input[name="email"]').press('Tab');
  // Fill [placeholder="HoverTouch \/ Deming \/ Other"]
  await page.locator('[placeholder="HoverTouch \\/ Deming \\/ Other"]').fill('hovertouch');
  // Press Tab
  await page.locator('[placeholder="HoverTouch \\/ Deming \\/ Other"]').press('Tab');
  // Fill textarea[name="\30 0N3s00000QE8Gr"]
  await page.locator('textarea[name="\\30 0N3s00000QE8Gr"]').fill('okah');

  await page.locator('input:has-text("Submit")').click();
  })


//testing pagein action form
// Go to https://www.spacee.com/
test('Form under see Spacee in Action on the homepage can be filled and submitted.', async ({ page }) => { 
  test.setTimeout(120000);
await page.goto('https://www.spacee.com/',{ timeout: 30000000 });
// Click input[name="first_name"]
await page.locator('input[name="first_name"]').click();
// Fill input[name="first_name"]
await page.locator('input[name="first_name"]').fill('aloo');
// Press Tab
await page.locator('input[name="first_name"]').press('Tab');
// Fill input[name="last_name"]
await page.locator('input[name="last_name"]').fill('roti');
// Press Tab
await page.locator('input[name="last_name"]').press('Tab');
// Fill input[name="company"]
await page.locator('input[name="company"]').fill('facebook');
// Press Tab
await page.locator('input[name="company"]').press('Tab');
// Fill input[name="email"]
await page.locator('input[name="email"]').fill('facebook@gmail.com');
// Press Tab
await page.locator('input[name="email"]').press('Tab');
// Fill [placeholder="HoverTouch \/ Deming \/ Other"]
await page.locator('[placeholder="HoverTouch \\/ Deming \\/ Other"]').fill('deming');
// Press Tab
await page.locator('[placeholder="HoverTouch \\/ Deming \\/ Other"]').press('Tab');
// Fill textarea[name="\30 0N3s00000QE8Gr"]
await page.locator('textarea[name="\\30 0N3s00000QE8Gr"]').fill('cookie');
// Click input:has-text("Submit")
await page.locator('input:has-text("Submit")').click();

await page.goto('https://www.spacee.com/');


  
})
});