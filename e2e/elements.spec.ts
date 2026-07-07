import {test, expect} from '@playwright/test'
import { BASE_URL, ROUTES } from './utils/testdata'

test.describe("Elements Page", async ()=> {
    test("List of different type if UI elements", async ({page})=>{

        await page.goto('https://demoqa.com/');
        await page.getByText('Elements').click();
        await page.getByText('Text Box').click();
        await page.getByText('Check Box').click();
        await page.getByText('Radio Button').click();
        await page.getByText('Web Tables').click();
        await page.getByText('Buttons').click();
        await page.getByRole('link', { name: 'Links', exact: true }).click();
        await page.getByText('Broken Links - Images').click();
        await page.getByText('Upload and Download').click();
        await page.getByText('Dynamic Properties').click();
    });

    test("Text Box", async ({page}) => {
        await page.goto(`${BASE_URL}${ROUTES.elements}`);
        // await page.getByText('Text Box').click();
        await page.getByRole('listitem').filter({ hasText: 'Text Box' }).click();
        await page.getByRole('textbox', { name: 'Full Name' }).fill('First Second');
        await page.getByRole('textbox', { name: 'name@example.com' }).fill('secondfirst@example.com');
        await page.getByRole('textbox', { name: 'Current Address' }).fill('Street: 25, Niva Road');
        await page.locator('#permanentAddress').fill('Lamjung-25 Nepal');
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.getByText('Name:First Second')).toBeVisible();
        await expect(page.getByText('Email:secondfirst@example.com')).toBeVisible();
        await expect(page.getByText('Current Address :Street: 25, Niva Road')).toBeVisible();
        await expect(page.getByText('Permananet Address :Lamjung-25 Nepal')).toBeVisible();
    });
})