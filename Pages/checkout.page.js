// Pages/checkout.page.js
class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('label:has-text("First Name")');
    this.lastNameInput = page.locator('label:has-text("Last Name")');
    this.emailInput = page.locator('label:has-text("Email Address")');
    this.addressInput = page.locator('label:has-text("Address")');
    this.cityInput = page.locator('label:has-text("City")');
    this.zipCodeInput = page.locator('label:has-text("Zip Code")');
    this.paymentMethodSelect = page.locator('select[name="payment_method"]');
    this.placeOrderButton = page.locator('button:has-text("PLACE ORDER")');
  }

  async fillCheckoutForm(firstName, lastName, email, address, city, zipCode, paymentMethod) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.addressInput.fill(address);
    await this.cityInput.fill(city);
    await this.zipCodeInput.fill(zipCode);
    await this.paymentMethodSelect.selectOption({ label: paymentMethod });
  }

  async placeOrder() {
    await this.placeOrderButton.click();
    console.log('✅ Order placed');
  }

  async confirmOrder() {
    const confirmButton = this.page.locator('button:has-text("Confirm")');
    await confirmButton.waitFor({ state: 'visible', timeout: 10000 });
    await confirmButton.click();
    console.log('✅ Order confirmed');
  }
}

module.exports = CheckoutPage;
