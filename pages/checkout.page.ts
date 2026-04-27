import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  // Step 1: Fill customer details + continue to overview page
  async fillDetails(first: string, last: string, zip: string) {
    await this.page.locator('#first-name').fill(first);
    await this.page.locator('#last-name').fill(last);
    await this.page.locator('#postal-code').fill(zip);

    // IMPORTANT: moves to next page (this was missing in your code)
    await this.page.locator('#continue').click();
  }

  // Step 2: Finish order on overview page
  async finishOrder() {
    await this.page.locator('#finish').click();
  }

  // Step 3: Verify success message
  async verifySuccess() {
    await expect(this.page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');
  }
}