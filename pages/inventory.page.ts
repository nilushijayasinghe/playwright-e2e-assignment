import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  addToCartBtn = 'text=Add to cart';
  cartIcon = '.shopping_cart_link';

  async addItem() {
    await this.page.click(this.addToCartBtn);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }

  async verifyItemAdded() {
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText('1');
  }
}