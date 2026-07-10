import {test, expect} from "@playwright/test"
import { BASE_URL, ROUTES } from "../utils/testdata"

test.describe("Upload and Download", ()=>{
    test("Should upload file(s)", async ({page})=>{
        await page.goto(`${BASE_URL}${ROUTES.upanddownload}`);
        await expect(page.getByRole('heading', {name: "Upload and Download"})).toBeVisible();
        const fileInput = page.locator('#uploadFile');
        await fileInput.setInputFiles('tests/assets/sampleFile.jpeg');        
        await page.setInputFiles("[Choose File='file-input']", "assets/sampleFile.jpeg")

    })

     test("Should download file(s)", async ({page})=>{
        await page.goto(`${BASE_URL}${ROUTES.upanddownload}`);
        await expect(page.getByRole('heading', {name: "Upload and Download"})).toBeVisible();
        await expect(page.getByRole("button", {name: "Download", exact:true})).toBeEnabled()
        await page.getByRole("button", {name: "Download"}).click();
        
    })
})