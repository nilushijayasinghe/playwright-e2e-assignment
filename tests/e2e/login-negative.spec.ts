import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login.page";
import { logger } from "../../utils/logger";

test.describe("Login Negative Scenarios", () => {

  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);

    await page.goto("https://www.saucedemo.com/");
    await page.waitForLoadState("domcontentloaded");

    logger.info("Navigated to SauceDemo");
  });

  // ❌ Invalid password
  test("Login fails with wrong password", async ({ page }) => {
    await loginPage.login("standard_user", "wrong_password");

    await expect(page.locator('[data-test="error"]'))
      .toContainText("Username and password do not match");

    logger.info("Verified error for wrong password");
  });

  // ❌ Empty username & password
  test("Login fails with empty credentials", async ({ page }) => {
    await loginPage.login("", "");

    await expect(page.locator('[data-test="error"]'))
      .toContainText("Username is required");

    logger.info("Verified error for empty credentials");
  });

  // ❌ Locked user (special SauceDemo case)
  test("Login fails for locked out user", async ({ page }) => {
    await loginPage.login("locked_out_user", "secret_sauce");

    await expect(page.locator('[data-test="error"]'))
      .toContainText("Sorry, this user has been locked out");

    logger.info("Verified error for locked user");
  });

});