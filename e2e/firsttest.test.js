import {test, expect} from '@playwright/test'

test('Checks the title of the page', async ({page})=> {
    // Go to the main page
    await page.goto('https://the-internet.herokuapp.com/')
    await expect(page).toHaveTitle(/The Internet/);

});

test('A/B Testing is present', async ({page})=> {
    // Check if A/B testing button is present or not
    await page.goto('https://the-internet.herokuapp.com/')
    const abtetsing = await page.getByRole('link', {name: 'A/B Testing'});
    await abtetsing.click();

    await expect(page).toHaveTitle(/The Internet/)
    const heading = page.getByRole('heading', { level: 3});
    await expect(heading).toHaveText('A/B Test Variation 1');

    const paragraph = page.getByRole('paragraph');
    await expect(paragraph).toBeDefined();
});