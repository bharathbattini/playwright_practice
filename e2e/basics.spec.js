const { test, expect } = require('@playwright/test');
const { before, beforeEach } = require('node:test');

const atrinaTitle = 'Atrina Technologies | Digital Transformation | Consulting | IT Services';
const headerAboutUsLink = '#menu-item-5061';
const headerOurTeamLink = '#menu-item-5063'

test.describe('Basics of Playwright', () => {

    test.beforeEach('Setup the Browser', async ({ page }) => {

        await page.goto('https://atriina.com/');

    });

    test('Go to a Link and Verify the Title and URL', async ({ page }) => {

        const title = await page.title();
        expect(title).toBe(atrinaTitle);
        await page.locator(headerAboutUsLink).hover();
        await page.locator(headerOurTeamLink).click();
        const url = await page.url();
        expect(url).toContain('our-team');
        await page.goBack();

    });

    test('Enter Text in a Textfield', async ({ page }) => {

        let firstname = await page.getByPlaceholder('Full Name').fill('Bharath');
        await page.getByPlaceholder('Full Name').press('ArrowDown');

    });

    test.afterAll('Tear Down the Browser', async ({ browser }) => {

        await browser.close();

    });

});