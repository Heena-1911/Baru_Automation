// POManager.page.js - Central manager for all page objects

import LoginPage from './login.page';
import ProjectPage from './project.page';
import CartPage from './cart.page';
import CheckoutPage from './checkout.page';
import OrderPage from './order.page';

export default class POManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.projectPage = new ProjectPage(page);
    this.cartPage = new CartPage(page);
    this.checkoutPage = new CheckoutPage(page);
    this.orderPage = new OrderPage(page);
  }

  getLoginPage() {
    return this.loginPage;
  }

  getProjectPage() {
    return this.projectPage;
  }

  getCartPage() {
    return this.cartPage;
  }

  getCheckoutPage() {
    return this.checkoutPage;
  }

  getOrderPage() {
    return this.orderPage;
  }
}
