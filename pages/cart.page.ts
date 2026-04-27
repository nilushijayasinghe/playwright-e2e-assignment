import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  checkoutBtn = 'text=Checkout';

  async checkout() {
    await this.page.click(this.checkoutBtn);
  }
}