  import { expect, Locator, Page } from '@playwright/test';
 
  export class BasePage {
    readonly page: Page;
 
    constructor(page: Page) {
      this.page = page;
    }
 
    async navigate(url: string = '/') {
      await this.page.goto(url);
      await this.page.waitForTimeout(5000);
    }
 
    async click(locator: Locator): Promise<void> {
      await locator.click();
    }
 
    async fill(locator: Locator, value: string): Promise<void> {
      await locator.fill(value);
    }
 
    async clear(locator: Locator): Promise<void> {
      await locator.clear();
    }
 
    async waitForVisible(locator: Locator): Promise<void> {
      await locator.waitFor({ state: 'visible' });
    }
 
    async waitForHidden(locator: Locator): Promise<void> {
      await locator.waitFor({ state: 'hidden' });
    }
 
    async waitForEnabled(locator: Locator): Promise<void> {
      await expect(locator).toBeEnabled();
    }
 
    async expectToBeVisible(locator: Locator): Promise<void> {
      await expect(locator).toBeVisible();
    }
 
    async expectToBeHidden(locator: Locator): Promise<void> {
      await expect(locator).toBeHidden();
    }
 
    async expectToBeEnabled(locator: Locator): Promise<void> {
      await expect(locator).toBeEnabled();
    }
    async expectText(locator: Locator, text: string): Promise<void> {
      await expect(locator).toHaveText(text);
    }
 
    async expectValue(locator: Locator, value: string): Promise<void> {
      await expect(locator).toHaveValue(value);
    }
 
    async expectAttribute(locator: Locator, attribute: string, value: string): Promise<void> {
      await expect(locator).toHaveAttribute(attribute, value);
    }
 
    async hover(locator: Locator): Promise<void> {
      await locator.hover();
    }
 
    async scrollTo(locator: Locator): Promise<void> {
      await locator.scrollIntoViewIfNeeded();
    }
 
    async selectByValue(locator: Locator, value: string): Promise<void> {
      await locator.selectOption(value);
    }
 
    async selectByText(locator: Locator, text: string): Promise<void> {
      await locator.selectOption(text);
    }
 
  async selectByLabel(locator: Locator, label: string): Promise<void> {
      await locator.selectOption(label);
    }
 
    async takeScreenshot(name: string): Promise<void> {
      await this.page.screenshot({ path: `screenshots/${name}.png`,
      fullPage: true,
      quality: 100,
      type: 'png',
      clip: {
        x: 0,
        y: 0,
        width: 1920,
        height: 1080,
      },
      });
    }
 
  }