export class ProjectPage {
  constructor(page) {
    this.page = page;
    this.dropdownIcon = page.locator(`//div[@class='MuiStack-root css-btw0e7']//button[@type='button']//*[name()='svg']`);
    this.addNewProjectOption = page.locator('//li[normalize-space()="Add a New Project"]');
    this.projectNameInput = page.getByLabel('Project name');
    this.createProjectButton = page.getByRole('button', { name: 'Create' });
  }

  async createProject(projectName) {
    // Wait for dropdown icon and click
    await this.dropdownIcon.waitFor({ state: 'visible', timeout: 15000 });
    await this.dropdownIcon.click();

    // Click 'Add a New Project'
    await this.addNewProjectOption.click();

    // Fill and create project
    await this.projectNameInput.fill(projectName);
    await this.createProjectButton.click();
  }

  async selectProject(projectName) {
    // Reopen the dropdown
    await this.page.waitForTimeout(2000); // Optional: wait for creation to reflect
    await this.dropdownIcon.click();

    // Select created project
    const projectOption = this.page.locator(`//p[text()="${projectName}"]`).first();
    await projectOption.waitFor({ state: 'visible', timeout: 10000 });
    await projectOption.click({ force: true });
  }
}
module.exports = ProjectPage;