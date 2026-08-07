import * as dotenv from 'dotenv';
import path from 'path';
 
const environment = process.env.TEST_ENV || 'qa';
 
dotenv.config({
  path: path.resolve(process.cwd(), `.env.${environment}`)
});
 
export const env = {
  baseUrl: process.env.BASE_URL!,
  expectedURL: process.env.EXPECTED_URL!,
  username: process.env.E2E_USERNAME!,
  password: process.env.E2E_PASSWORD!,
  browser: process.env.E2E_BROWSER || 'chromium',
  headless: process.env.E2E_HEADLESS === 'true',
  timeout: Number(process.env.E2E_TIMEOUT) || 30000,
};