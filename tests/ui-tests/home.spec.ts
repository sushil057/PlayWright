import { test, expect, type Page } from "@playwright/test";

let page: Page;

test.describe("Home Page", async () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto("/");
  });
  test("Search button is visble and functions", async () => {
    const searchButton = page.getByRole("textbox", { name: "Search" });
    await expect(searchButton).toBeVisible();
    await searchButton.fill("Grey Jacket");
    await page.locator("#search-submit").click();
    await expect(page.getByRole("heading", { name: "Search Results" })).toBeVisible();
    await expect(page.getByText("Showing Results for Grey Jacket")).toBeVisible();
  });

  test("Nav bar elements are visible", async () => {
    await expect(page.getByRole("banner").getByRole("link", { name: "Search" })).toBeVisible();
    await expect(page.getByRole("banner").getByRole("link", { name: "About Us" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Log In" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Sign up" })).toBeVisible();
  });

  test("Header contents are shown", async () => {
    await expect(page.locator("#logo").getByAltText("Sauce Demo")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Just a demo site showing off what sauce can do." })).toBeVisible();
  });

  test("Cart and Check Out buttons are shown", async () => {
    const miniCart = page.locator("#minicart");
    await expect(miniCart.getByRole("link", { name: "Cart" })).toBeVisible();
    await expect(miniCart.getByRole("link", { name: "Cart" })).toBeEnabled();

    await expect(miniCart.getByRole("link", { name: "Check Out" })).toBeVisible();
    await expect(miniCart.getByRole("link", { name: "Check Out" })).toBeEnabled();
  });

  test("Different page categories are shown clearly", async () => {
    const categoryNames = ["Home", "Catalog", "Blog", "About Us", "Wish List", "Refer a Friend"];
    for (const categoryName of categoryNames) {
      await expect(page.locator("#main-menu").getByRole("link", { name: categoryName }).first()).toBeVisible();
      await expect(page.locator("#main-menu").getByRole("link", { name: categoryName }).first()).toBeEnabled();
    }
  });

  test("Social Media links are shown and functional", async () => {
    const socialMedias = [".facebook", ".twitter", ".instagram", ".twitter", ".rss"];
    for (const socialMedia of socialMedias) {
      await expect(page.locator("#social").locator(socialMedia).first()).toBeVisible();
      await expect(page.locator("#social").locator(socialMedia).first()).toBeEnabled();
    }
  });

  test("Products are shown in the page", async () => {
    const images = ["#product-1", "#product-2", "#product-3"];
    for (const image of images) {
      await expect(page.locator(image)).toBeVisible();
    }
  });

  test("Footer is shown in the page", async () => {
    await expect(page.getByRole("heading", { name: "Footer" })).toBeVisible();
    const search = page.locator("nav").nth(2).getByRole("link", { name: "Search" });
    await expect(search).toBeVisible();
    await expect(search).toBeEnabled();

    const aboutUs = page.locator("nav").nth(2).getByRole("link", { name: "About Us" });
    await expect(aboutUs).toBeVisible();
    await expect(aboutUs).toBeEnabled();
  });

  test("About Us section is visible with sauce link", async () => {
    await expect(page.locator("#footer-content").getByRole("heading", { name: "About Us" })).toBeVisible();
    await expect(page.locator("#footer-content").getByText("This is a demo site created for Sauce,")).toBeVisible();
    const sauceLink = page.locator("#footer-content").getByRole("link", { name: "Sauce" });
    await expect(sauceLink).toBeVisible();
    await expect(sauceLink).toBeEnabled();
  });

  test("Payment methods are shown in the page", async () => {
    const paymentMethods = await page.locator("#payment-methods");
    await expect(paymentMethods.getByAltText("we accept Amex"));
    await expect(paymentMethods.getByAltText("we accept Visa"));
    await expect(paymentMethods.getByAltText("we accept Mastercard"));
  });
  test("Copywright text and cart link is shown", async () => {
    const legals = page.locator(".legals");
    await expect(legals).toBeVisible();
    await expect(legals).toHaveText(/Copyright © 2026 Sauce Demo/);
    await expect(legals.getByRole("link", { name: "Shopping Cart by Shopify" })).toBeVisible();
    await expect(legals.getByRole("link", { name: "Shopping Cart by Shopify" })).toBeEnabled();
  });
  test("Search and About us is shown at the end of the page", async () => {
    const lastOne = page.locator(".six");
    await expect(lastOne.getByRole("link", { name: "Search" })).toBeVisible();
    await expect(lastOne.getByRole("link", { name: "Search" })).toBeEnabled();

    await expect(lastOne.getByRole("link", { name: "About Us" })).toBeVisible();
    await expect(lastOne.getByRole("link", { name: "About Us" })).toBeEnabled();
  });
});
