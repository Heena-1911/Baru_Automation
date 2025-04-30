# Test info

- Name: Baru - End-to-End Flow
- Location: /home/webosmotic/Documents/BARU/Baru_automation/Baru_automation/tests/Baru.spec.js:9:1

# Error details

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button:has-text("ADD TO SHOPPING CART")') to be visible

    at CartPage.addToCart (/home/webosmotic/Documents/BARU/Baru_automation/Baru_automation/Pages/cart.page.js:10:32)
    at /home/webosmotic/Documents/BARU/Baru_automation/Baru_automation/tests/Baru.spec.js:34:18
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
  - paragraph: test@1745560775937
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
   1 | // Pages/cart.page.js
   2 | class CartPage {
   3 |   constructor(page) {
   4 |     this.page = page;
   5 |     this.addToCartButton = page.locator('button:has-text("ADD TO SHOPPING CART")');
   6 |     this.viewCartButton = page.locator('a:has-text("View Cart")');
   7 |   }
   8 |
   9 |   async addToCart() {
> 10 |     await this.addToCartButton.waitFor({ state: 'visible', timeout: 20000 }); // Wait until button visible
     |                                ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  11 |     await this.addToCartButton.click();
  12 |   }
  13 |
  14 |   async viewCart() {
  15 |     await this.viewCartButton.waitFor({ state: 'visible', timeout: 10000 });
  16 |     await this.viewCartButton.click();
  17 |   }
  18 | }
  19 |
  20 | module.exports = CartPage;
  21 |
```