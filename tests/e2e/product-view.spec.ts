import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login.page";
import { InventoryPage } from "../../pages/inventory.page";
import testdata from "../../data/testdata.json";
import { logger } from "../../utils/logger";

test.describe("Product View Test", () => {

  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    await page.goto(testdata.url);
    await page.waitForLoadState("domcontentloaded");

    logger.info("Navigated to SauceDemo");
  });

  test("User can view product details", async ({ page }) => {

    await test.step("Login", async () => {
      await loginPage.login(
        testdata.username,
        testdata.password
      );
    });

    await test.step("Open product", async () => {
      await inventoryPage.openFirstProduct();
    });

    await test.step("Verify product page opened", async () => {
      await expect(page).toHaveURL(/inventory-item/);
    });

  });

});