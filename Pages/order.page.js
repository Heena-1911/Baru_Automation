class OrderPage {
  constructor(page) {
    this.page = page;
    this.placeOrderButton = page.locator('button.place-order');
    this.confirmOrderButton = page.locator('button.confirm-order');
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }

  async confirmOrder() {
    await this.confirmOrderButton.click();
  }
}

module.exports = OrderPage;
