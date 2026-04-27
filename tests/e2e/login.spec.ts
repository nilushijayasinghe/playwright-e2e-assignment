import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login.page";
import testdata from "../../data/testdata.json";
import { logger } from "../../utils/logger";

test.describe("Login Tests", () => {

  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);

    await page.goto(testdata.url);
    await page.waitForLoadState("domcontentloaded");

    logger.info("Navigated to SauceDemo");
  });

  test("Valid login should succeed", async ({ page }) => {

    await loginPage.login("standard_user", "secret_sauce");

    await expect(page).toHaveURL(/inventory/);

    logger.info("Login successful");
  });

  test("Invalid login should show error", async ({ page }) => {

    await loginPage.login("wrong_user", "wrong_pass");

    await expect(page.locator('[data-test="error"]')).toBeVisible();

    logger.info("Login error shown correctly");
  });

});