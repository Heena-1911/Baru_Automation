// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Disallow test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry only on CI
  retries: process.env.CI ? 2 : 0,

  // Run workers based on environment
  workers: process.env.CI ? 1 : undefined,

  // Use Allure and HTML reporters
  reporter: [
    ['allure-playwright'], // Allure results saved in `allure-results`
    ['html'],              // HTML report for quick view
  ],

  // Common options
  use: {
    headless: true, // Headless Chromium
    browserName: 'chromium',
    screenshot: 'only-on-failure', // Capture screenshot only on test failure
    video: 'retain-on-failure',    // Save video only on failure
    trace: 'retain-on-failure',    // Save Playwright trace only if test fails
    actionTimeout: 10000,          // Max wait time for each action (click, type etc.)
    navigationTimeout: 30000,      // Max timeout for page navigation
    baseURL: 'https://staging.barucabinets.com', // Optional: set base URL
  },

  // Only run in Chromium
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});
