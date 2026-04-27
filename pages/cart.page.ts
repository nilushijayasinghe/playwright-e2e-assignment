import { Page, expect } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  // 🔹 Navigate to cart
  async openCart() {
    await this.page.click(".shopping_cart_link");
  }

  // 🔹 Remove item from cart
  async removeItem() {
    await this.page.click(".cart_button");
  }

  // 🔹 Get all cart items
  async getCartItems() {
    return this.page.locator(".cart_item");
  }

  // 🔹 Optional: click checkout button (you already likely need this)
  async checkout() {
    await this.page.click('[data-test="checkout"]');
  }

  // 🔹 Optional: verify cart has items
  async verifyItemExists() {
    await expect(this.page.locator(".cart_item")).toHaveCount(1);
  }
}