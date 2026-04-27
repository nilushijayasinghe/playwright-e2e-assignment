import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login.page";
import { InventoryPage } from "../../pages/inventory.page";
import { CartPage } from "../../pages/cart.page";
import testdata from "../../data/testdata.json";

test("User can remove item from cart", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await page.goto(testdata.url);

  // Step 1: Login
  await loginPage.login("standard_user", "secret_sauce");

  // Step 2: Add item
  await inventoryPage.addItem();

  // Step 3: Open cart
  await cartPage.openCart();

  // Step 4: Remove item
  await cartPage.removeItem();

  // Step 5: Verify
  await expect(await cartPage.getCartItems()).toHaveCount(0);
});