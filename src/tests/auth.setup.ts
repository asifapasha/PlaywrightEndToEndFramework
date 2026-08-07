import { env } from '../config/env';
import { test as setup, expect } from '../base/baseTest';
import path from 'path';
 
const authFile = path.join(__dirname, '../../playwright/.auth/user.json');
 
setup('authenticate', async ({ page, loginPage }) => {
  await page.goto(env.baseUrl);
  await loginPage.enterUserName(env.username)
  await loginPage.enterPassword(env.password);
   await loginPage.clickLoginButton();

   const currentUrl = await page.url();
    console.log(currentUrl);
    await page.waitForTimeout(5000);
 
    expect(currentUrl).toContain(env.expectedURL);
  
  await page.context().storageState({ path: authFile });
});
 3