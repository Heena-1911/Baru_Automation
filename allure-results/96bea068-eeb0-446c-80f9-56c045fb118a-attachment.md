# Test info

- Name: Baru - End-to-End Flow
- Location: /home/webosmotic/Documents/BARU/Baru_automation/Baru_automation/tests/Baru.spec.js:8:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('button:has-text("Proceed to Checkout")')

    at CheckoutPage.proceedToCheckout (/home/webosmotic/Documents/BARU/Baru_automation/Baru_automation/Pages/checkout.page.js:38:40)
    at /home/webosmotic/Documents/BARU/Baru_automation/Baru_automation/tests/Baru.spec.js:41:22
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
  - paragraph: test@1745919149064
  - button
  - button "1":
    - paragraph: "1"
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
   5 |     // Locators for checkout form fields
   6 |     this.firstNameInput = page.locator('label:has-text("First Name")');
   7 |     this.lastNameInput = page.locator('label:has-text("Last Name")');
   8 |     this.emailInput = page.locator('label:has-text("Email Address")');
   9 |     this.addressInput = page.locator('label:has-text("Address")');
  10 |     this.cityInput = page.locator('label:has-text("City")');
  11 |     this.zipCodeInput = page.locator('label:has-text("Zip Code")');
  12 |     this.paymentMethodSelect = page.locator('select[name="payment_method"]');
  13 |     this.placeOrderButton = page.locator('button:has-text("PLACE ORDER")');
  14 |     this.proceedToCheckoutButton = page.locator('button:has-text("Proceed to Checkout")');
  15 |   }
  16 |
  17 |   // Fill in the checkout form
  18 |   async fillCheckoutForm(firstName, lastName, email, address, city, zipCode, paymentMethod) {
  19 |     await this.firstNameInput.fill(firstName);
  20 |     await this.lastNameInput.fill(lastName);
  21 |     await this.emailInput.fill(email);
  22 |     await this.addressInput.fill(address);
  23 |     await this.cityInput.fill(city);
  24 |     await this.zipCodeInput.fill(zipCode);
  25 |
  26 |     // Select payment method
  27 |     await this.paymentMethodSelect.selectOption({ label: paymentMethod });
  28 |   }
  29 |
  30 |   // Submit the order
  31 |   async placeOrder() {
  32 |     await this.placeOrderButton.click();
  33 |     console.log('✅ Order placed');
  34 |   }
  35 |
  36 |   // Proceed to checkout
  37 |   async proceedToCheckout() {
> 38 |     await this.proceedToCheckoutButton.click();
     |                                        ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  39 |     console.log('✅ Proceeded to checkout');
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
  50 |     await confirmButton.click();
  51 |     console.log('✅ Order confirmed');
  52 |   }
  53 | }
  54 |
  55 | module.exports = CheckoutPage;
  56 |
```