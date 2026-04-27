import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  username = '#user-name';
  password = '#password';
  loginBtn = '#login-button';

 async goto() {
  await this.page.goto('https://www.saucedemo.com/', {
    waitUntil: 'domcontentloaded'
  });

  await this.page.waitForSelector('#user-name', { state: 'visible' });
}

async login(user: string, pass: string) {
  await this.page.goto('https://www.saucedemo.com/');

  await this.page.locator('#user-name').waitFor({ state: 'visible' });

  await this.page.fill('#user-name', user);
  await this.page.fill('#password', pass);
  await this.page.click('#login-button');
};
}
