class CartPage {
  constructor(page) {
    this.page = page;
    this.addToCartBtn = page.locator('button:has-text("ADD TO SHOPPING CART")');
    this.viewInCartBtn = page.locator('button:has-text("VIEW IN CART")');
    this.cartIcon = page.locator("xpath=//*[name()='path' and contains(@d,'M15.55 13c')]");
  }

  async addToCart() {
    try {
      await this.cartIcon.waitFor({ state: 'attached', timeout: 10000 });
      await this.cartIcon.click({ force: true });
      console.log("✅ Clicked on cart icon.");
    } catch (error) {
      await this.page.screenshot({ path: 'cart-icon-error.png', fullPage: true });
      throw new Error("❌ Failed to click on the cart icon.");
    }
  }
}

module.exports = CartPage;
