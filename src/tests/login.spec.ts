import { test, expect } from '../base/baseTest';
import { env } from '../config/env';
 
test.describe('Login', () => {
 
  test('Verify that user lands on inventory page after the login ', async ({ page,loginPage }) => {
    await page.goto(env.expectedURL)
    await page.waitForTimeout(5000);
    expect(loginPage.title).toBeVisible();
  });
 
});
 