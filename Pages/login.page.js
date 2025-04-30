// login.page.js

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async login(email, password) {
    // Click to open the login modal
    await this.page.getByRole('button', { name: 'Login' }).click();

    // Fill login credentials using label-based selectors
    await this.page.getByLabel('Email Address*').fill(email);
    await this.page.getByLabel('Password*').fill(password);

    // Click login button inside the form
    await this.page.locator('form').getByRole('button', { name: 'Login' }).click();

    console.log('🔐 Login submitted');
  }
}

module.exports = LoginPage;
