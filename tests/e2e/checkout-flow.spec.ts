import { test } from "@playwright/test";
import { LoginPage } from "../../pages/login.page";
import { InventoryPage } from "../../pages/inventory.page";
import { CartPage } from "../../pages/cart.page";
import { CheckoutPage } from "../../pages/checkout.page";
import testdata from "../../data/testdata.json";
import { logger } from "../../utils/logger";

test.describe("E2E Checkout Flow", () => {

  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
  cartPage = new CartPage(page);
  checkoutPage = new CheckoutPage(page);

  await page.goto(testdata.url);
  await page.waitForLoadState('domcontentloaded');

  logger.info("Navigated to SauceDemo");
});

  test("User completes checkout successfully", async ({ page }) => {

    logger.info("Test started: Checkout Flow");

    await test.step("Login", async () => {
      await loginPage.login("standard_user", "secret_sauce");
    });

    await test.step("Add item to cart", async () => {
      await inventoryPage.addItem();
      await inventoryPage.verifyItemAdded();
    });

    await test.step("Go to cart", async () => {
      await inventoryPage.goToCart();
    });

    await test.step("Checkout", async () => {
      await cartPage.checkout();
    });

    await test.step("Enter details & finish", async () => {
      await checkoutPage.fillDetails("Nilushi", "Test", "11500");
      await checkoutPage.finishOrder();
    });

    await test.step("Verify order success", async () => {
      await checkoutPage.verifySuccess();
    });

    logger.info("Test completed: Checkout Flow");
  });

});