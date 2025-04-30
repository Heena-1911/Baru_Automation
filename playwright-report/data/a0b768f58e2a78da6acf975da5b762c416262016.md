# Test info

- Name: Baru - End-to-End Flow
- Location: /home/webosmotic/Documents/BARU/Baru_automation/Baru_automation/tests/Baru.spec.js:8:1

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('button:has-text("CHECKOUT")') to be visible

    at /home/webosmotic/Documents/BARU/Baru_automation/Baru_automation/tests/Baru.spec.js:38:19
```

# Page snapshot

```yaml
- banner:
  - img "logo"
  - combobox "Search"
  - button "Open"
  - button "My Projects"
  - button "Help"
  - button "My Account"
  - button "My Orders"
  - paragraph: test@1745931523233
  - button
  - button
  - button
  - button "Home"
  - button "Base Cabinets"
  - button "Wall Cabinets"
  - button "Tall Cabinets"
  - button "Corner Cabinets"
  - button "Additional Items"
- paragraph: Any Custom Size Locally Made Cabinets 40% Off Custom Prices Fast Delivery
- paragraph: Base Cabinets
- separator
- button "SEE ALL"
- img "cabinet"
- img "creamCabinet"
- paragraph: Base - Empty
- paragraph: Base Open Cabinet with no Doors, Shelves or Shelf Holes
- paragraph: "W: 6”-48” | H: 12”-48” | D: 6”-36”"
- button "CUSTOMIZE"
- img "creamCabinet"
- paragraph: Base - Open Shelves
- paragraph: Base Open Cabinet with Adjustable Shelves (no Doors)
- paragraph: "W: 6”-36” | H: 12”-48” | D: 6”-36”"
- button "CUSTOMIZE"
- img "creamCabinet"
- paragraph: Base - Left Hinge Door
- paragraph: Base Cabinet with 1 Door - Hinged Left, with Adjustable Shelves
- paragraph: "W: 6”-26” | H: 12”-48” | D: 6”-36”"
- button "CUSTOMIZE"
- img "creamCabinet"
- paragraph: test short 030303
- paragraph: Test 03 long03
- paragraph: "W: 6”-25” | H: 6”-26” | D: 7”-27”"
- button "CUSTOMIZE"
- img "cabinet"
- paragraph: Wall Cabinets
- separator
- button "SEE ALL"
- img "cabinet"
- img "creamCabinet"
- paragraph: wall test 0404 short
- paragraph: wall test 0404 long
- paragraph: "W: 6”-21” | H: 6”-21” | D: 7”-22”"
- button "CUSTOMIZE"
- img "creamCabinet"
- paragraph: Wall - Empty
- paragraph: Wall Cabinet with no Doors or Shelves
- paragraph: "W: 6”-48” | H: 12”-48” | D: 6”-24”"
- button "CUSTOMIZE"
- img "creamCabinet"
- paragraph: Wall - Open Shelves
- paragraph: Open Wall Cabinet with Adjustable Shelves (no Doors)
- paragraph: "W: 6”-48” | H: 12”-48” | D: 6”-24”"
- button "CUSTOMIZE"
- img "creamCabinet"
- paragraph: Wall - Left Hinge Door
- paragraph: Wall Cabinet with Adjustable Shelves and 1 Door - Hinged Left
- paragraph: "W: 6”-48” | H: 12”-48” | D: 6”-24”"
- button "CUSTOMIZE"
- img "cabinet"
- paragraph: Tall Cabinets
- separator
- button "SEE ALL"
- img "cabinet"
- img "creamCabinet"
- paragraph: Tall - Empty
- paragraph: Tall Empty Cabinet with No Doors or Shelves
- paragraph: "W: 6”-42” | H: 36”-96” | D: 6”-36”"
- button "CUSTOMIZE"
- img "creamCabinet"
- paragraph: Tall - Open Shelves
- paragraph: Tall Cabinet with Adjustable Shelves and No Doors
- paragraph: "W: 6”-36” | H: 36”-96” | D: 6”-36”"
- button "CUSTOMIZE"
- img "creamCabinet"
- paragraph: Tall - Left Hinge Door
- paragraph: Tall Cabinet with 1 full-height Door - Hinged Left
- paragraph: "W: 6”-30” | H: 36”-96” | D: 6”-36”"
- button "CUSTOMIZE"
- img "creamCabinet"
- paragraph: Tall - Right Hinge Door
- paragraph: Tall Cabinet with 1 full-height Door - Hinged Right
- paragraph: "W: 6”-30” | H: 36”-96” | D: 6”-36”"
- button "CUSTOMIZE"
- img "cabinet"
- paragraph: Need a custom quote?
- paragraph: Our support team will be happy to assist you with your Project or answer any questions about our products.
- textbox "Name"
- textbox "Email"
- heading "Phone Number*" [level=6]
- img "flag"
- paragraph: "+1"
- textbox "Phone Number"
- textbox "Your inquiry"
- button "SEND"
- img "logo"
- paragraph: Baru Inc.
- paragraph: "1917 S.Taylor Road #34 Cleveland Heights Ohio 44118"
- paragraph: info@hellobaru.com
- paragraph: About Baru
- list:
  - listitem:
    - button "Our company":
      - paragraph: Our company
- paragraph: Store
- list:
  - listitem:
    - button "Base cabinets":
      - paragraph: Base cabinets
  - listitem:
    - button "Wall cabinets":
      - paragraph: Wall cabinets
  - listitem:
    - button "Tall cabinets":
      - paragraph: Tall cabinets
  - listitem:
    - button "Corner cabinets":
      - paragraph: Corner cabinets
  - listitem:
    - button "Oven cabinets":
      - paragraph: Oven cabinets
  - listitem:
    - button "Additional Items":
      - paragraph: Additional Items
- paragraph: Support
- list:
  - listitem:
    - button "FAQ":
      - paragraph: FAQ
  - listitem:
    - button "Request support":
      - paragraph: Request support
- paragraph: Get notified on discounts, special promotions and new products.
- textbox "Enter your email address"
- button "SUBSCRIBE TO NEWSLETTER"
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 | const LoginPage = require('../Pages/login.page.js');
   3 | const ProjectPage = require('../Pages/project.page.js');
   4 | const CartPage = require('../Pages/cart.page.js');
   5 | const CheckoutPage = require('../Pages/checkout.page.js');
   6 | const OrderPage = require('../Pages/order.page.js');
   7 |
   8 | test('Baru - End-to-End Flow', async ({ page }) => {
   9 |   const loginPage = new LoginPage(page);
  10 |   const projectPage = new ProjectPage(page);
  11 |   const cartPage = new CartPage(page);
  12 |   const checkoutPage = new CheckoutPage(page);
  13 |   const orderPage = new OrderPage(page);
  14 |
  15 |   // Login
  16 |   await page.goto('https://staging.barucabinets.com/');
  17 |   await loginPage.login('heena.webosmotic@gmail.com', 'Baru123!');
  18 |   console.log('✅ Logged in successfully');
  19 |
  20 |   // Wait for project dropdown
  21 |   await expect(projectPage.dropdownIcon).toBeVisible({ timeout: 15000 });
  22 |
  23 |   // Create project
  24 |   const uniqueProjectName = `test@${Date.now()}`;
  25 |   await projectPage.createProject(uniqueProjectName);
  26 |   console.log('✅ Project created');
  27 |
  28 |   // Select project
  29 |   await projectPage.selectProject(uniqueProjectName);
  30 |   console.log('✅ Project selected');
  31 |
  32 |   // Add item to cart by clicking only the cart icon
  33 |   await cartPage.addToCart();
  34 |   console.log('✅ Cart icon clicked');
  35 |
  36 |   // Click "CHECKOUT"
  37 | const checkoutBtn = page.locator('button:has-text("CHECKOUT")');
> 38 | await checkoutBtn.waitFor({ state: 'visible', timeout: 15000 });
     |                   ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  39 | await checkoutBtn.click();
  40 | console.log("✅ Clicked 'CHECKOUT'");
  41 |
  42 | // Click "Confirm"
  43 | const confirmBtn = page.locator('button:has-text("Confirm")');
  44 | await confirmBtn.waitFor({ state: 'visible', timeout: 10000 });
  45 | await confirmBtn.click();
  46 | console.log("✅ Clicked 'Confirm'");
  47 |
  48 | // Click all "Next" buttons
  49 | const nextButtons = page.locator('button:has-text("Next")');
  50 | const count = await nextButtons.count();
  51 | for (let i = 0; i < count; i++) {
  52 |   await nextButtons.nth(i).click();
  53 |   await page.waitForTimeout(500); // delay for stability
  54 | }
  55 | console.log("✅ Clicked all 'Next' buttons");
  56 |
  57 | // Fill checkout form
  58 | await checkoutPage.fillCheckoutForm('John', 'Doe', 'john@example.com', '123 Test St', 'Surat', '395005', 'Stripe');
  59 |
  60 | // Place order
  61 | await checkoutPage.placeOrder();
  62 |
  63 | // Final confirm popup
  64 | await checkoutPage.confirmOrder();
  65 | });
  66 |
```