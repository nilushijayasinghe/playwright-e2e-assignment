import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login.page";
import { InventoryPage } from "../../pages/inventory.page";
import testdata from "../../data/testdata.json";

test("User can logout successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await page.goto(testdata.url);

  // Step 1: Login
  await loginPage.login(testdata.username, testdata.password);

  // Step 2: Open menu
  await inventoryPage.openMenu();

  // Step 3: Logout
  await inventoryPage.logout();

  // Step 4: Verify
  await expect(page).toHaveURL("https://www.saucedemo.com/");
});