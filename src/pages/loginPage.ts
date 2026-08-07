import { Locator, Page } from '@playwright/test';
import { BasePage } from '../base/basePage';
 
export class LoginPage extends BasePage {
  readonly userName: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly title:Locator;
 
  constructor(page: Page) {
    super(page);
    this.userName = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
    this.title = page.locator('.title')
  }
 
  async enterUserName(username: string): Promise<void> {
    await this.userName.fill(username);
  }
 
  async enterPassword(password: string): Promise<void> {
    await this.password.fill(password);
  }
 
  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  } 
}