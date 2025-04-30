# Test info

- Name: Baru - End-to-End Flow
- Location: /home/webosmotic/Documents/BARU/Baru_automation/Baru_automation/tests/Baru.spec.js:8:1

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('button:has-text("CHECKOUT")') to be visible

    at CheckoutPage.proceedToCheckout (/home/webosmotic/Documents/BARU/Baru_automation/Baru_automation/Pages/checkout.page.js:18:40)
    at /home/webosmotic/Documents/BARU/Baru_automation/Baru_automation/tests/Baru.spec.js:37:22
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
  - paragraph: test@1745930558450
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
   1 | // Pages/checkout.page.js
   2 | class CheckoutPage {
   3 |   constructor(page) {
   4 |     this.page = page;
   5 |     this.firstNameInput = page.locator('label:has-text("First Name")');
   6 |     this.lastNameInput = page.locator('label:has-text("Last Name")');
   7 |     this.emailInput = page.locator('label:has-text("Email Address")');
   8 |     this.addressInput = page.locator('label:has-text("Address")');
   9 |     this.cityInput = page.locator('label:has-text("City")');
  10 |     this.zipCodeInput = page.locator('label:has-text("Zip Code")');
  11 |     this.paymentMethodSelect = page.locator('select[name="payment_method"]');
  12 |     this.placeOrderButton = page.locator('button:has-text("PLACE ORDER")');
  13 |     this.proceedToCheckoutButton = page.locator('button:has-text("CHECKOUT")'); // Added locator
  14 |   }
  15 |
  16 |   // Proceed to checkout
  17 |   async proceedToCheckout() {
> 18 |     await this.proceedToCheckoutButton.waitFor({ state: 'visible', timeout: 15000 });
     |                                        ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  19 |     await this.proceedToCheckoutButton.click();
  20 |     console.log('✅ Proceeded to checkout');
  21 |   }
  22 |
  23 |   // Fill in the checkout form
  24 |   async fillCheckoutForm(firstName, lastName, email, address, city, zipCode, paymentMethod) {
  25 |     await this.firstNameInput.fill(firstName);
  26 |     await this.lastNameInput.fill(lastName);
  27 |     await this.emailInput.fill(email);
  28 |     await this.addressInput.fill(address);
  29 |     await this.cityInput.fill(city);
  30 |     await this.zipCodeInput.fill(zipCode);
  31 |
  32 |     // Select payment method
  33 |     await this.paymentMethodSelect.selectOption({ label: paymentMethod });
  34 |   }
  35 |
  36 |   // Submit the order
  37 |   async placeOrder() {
  38 |     await this.placeOrderButton.click();
  39 |     console.log('✅ Order placed');
  40 |   }
  41 |
  42 |   // Verify if the checkout form is visible
  43 |   async isCheckoutFormVisible() {
  44 |     return await this.page.isVisible('form.checkout-form');
  45 |   }
  46 |
  47 |   // Confirm the order
  48 |   async confirmOrder() {
  49 |     const confirmButton = this.page.locator('button:has-text("Confirm")');
  50 |     await confirmButton.waitFor({ state: 'visible', timeout: 10000 });
  51 |     await confirmButton.click();
  52 |     console.log('✅ Order confirmed');
  53 |   }
  54 | }
  55 |
  56 | module.exports = CheckoutPage;
  57 |
```