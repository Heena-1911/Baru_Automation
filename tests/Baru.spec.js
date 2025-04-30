const { test, expect } = require('@playwright/test');
const LoginPage = require('../Pages/login.page.js');
const ProjectPage = require('../Pages/project.page.js');
const CartPage = require('../Pages/cart.page.js');
const CheckoutPage = require('../Pages/checkout.page.js');
const OrderPage = require('../Pages/order.page.js');

test('Baru - End-to-End Flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const projectPage = new ProjectPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const orderPage = new OrderPage(page);

  // Login
  await page.goto('https://staging.barucabinets.com/');
  await loginPage.login('heena.webosmotic@gmail.com', 'Baru123!');
  console.log('✅ Logged in successfully');

  // Wait for project dropdown
  await expect(projectPage.dropdownIcon).toBeVisible({ timeout: 15000 });

  // Create project
  const uniqueProjectName = `test@${Date.now()}`;
  await projectPage.createProject(uniqueProjectName);
  console.log('✅ Project created');

  // Select project
  await projectPage.selectProject(uniqueProjectName);
  console.log('✅ Project selected');

  // Add item to cart by clicking only the cart icon
  await cartPage.addToCart();
  console.log('✅ Cart icon clicked');

  // Click "CHECKOUT"
const checkoutBtn = page.locator('button:has-text("CHECKOUT")');
await checkoutBtn.waitFor({ state: 'visible', timeout: 15000 });
await checkoutBtn.click();
console.log("✅ Clicked 'CHECKOUT'");

// Click "Confirm"
const confirmBtn = page.locator('button:has-text("Confirm")');
await confirmBtn.waitFor({ state: 'visible', timeout: 10000 });
await confirmBtn.click();
console.log("✅ Clicked 'Confirm'");

// Click all "Next" buttons
const nextButtons = page.locator('button:has-text("Next")');
const count = await nextButtons.count();
for (let i = 0; i < count; i++) {
  await nextButtons.nth(i).click();
  await page.waitForTimeout(500); // delay for stability
}
console.log("✅ Clicked all 'Next' buttons");

// Fill checkout form
await checkoutPage.fillCheckoutForm('John', 'Doe', 'john@example.com', '123 Test St', 'Surat', '395005', 'Stripe');

// Place order
await checkoutPage.placeOrder();

// Final confirm popup
await checkoutPage.confirmOrder();
});
