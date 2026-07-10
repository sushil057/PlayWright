import {test, expect} from '@playwright/test'
import { BASE_URL } from '../../utils/testdata';

test.describe("Homepage", async ()=> {
    test("UI of the homepage", async ({page})=>{
        await page.goto(`${BASE_URL}`)
        await page.goto('https://demoqa.com/');
        await expect(page).toHaveTitle(/demosite/);
        await expect(page.getByRole('link').filter({ hasText: /^$/ })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Selenium Online Training' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Elements' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Forms' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Alerts, Frame & Windows' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Widgets' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Interactions' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Book Store Application' })).toBeVisible();
        await expect(page.getByRole('contentinfo')).toBeVisible();
    })
})