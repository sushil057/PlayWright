import { test, expect, type Page } from "@playwright/test";

export async function verifyProducts(page: Page, id: string, name: string, price: string) {
  await page.waitForURL("/collections/all/");
  await expect(page.getByRole("heading", { name: "Products" })).toBeVisible();
  await expect(page.locator("#breadcrumb").getByRole("link", { name: "Products" })).toBeVisible();
  await expect(page.locator(id)).toBeVisible();
  await expect(page.locator(id).getByRole("heading", { level: 3, name: name })).toBeVisible();
  await expect(page.locator(id).getByRole("heading", { level: 4, name: price })).toBeVisible();
}
