# Test info

- Name: Baru - End-to-End Flow
- Location: /home/webosmotic/Documents/BARU/Baru_automation/Baru_automation/tests/Baru.spec.js:9:1

# Error details

```
Error: locator.click: Error: strict mode violation: locator('button[type="button"]') resolved to 23 elements:
    1) <button tabindex="0" type="button" aria-haspopup="true" aria-controls="menu-appbar" aria-label="account of current user" class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeLarge css-1l1167e">…</button> aka getByLabel('account of current user')
    2) <button title="Open" tabindex="-1" type="button" aria-label="Open" class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium MuiAutocomplete-popupIndicator css-uge3vf">…</button> aka getByRole('button', { name: 'Open' })
    3) <button tabindex="0" type="button" class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-306ysv">Help</button> aka getByRole('button', { name: 'Help' })
    4) <button tabindex="0" type="button" class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-qhy99e">Login</button> aka getByRole('banner').getByRole('button', { name: 'Login' })
    5) <button id=":r9:" tabindex="0" type="button" class="MuiButtonBase-root MuiButton-root MuiLoadingButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiLoadingButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-1h5gi56">Signup</button> aka getByRole('button', { name: 'Signup' })
    6) <button tabindex="-1" type="button" class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-1dvjzc8">Home</button> aka getByRole('button', { name: 'Home' })
    7) <button tabindex="-1" type="button" class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-1dvjzc8">Base Cabinets</button> aka getByRole('button', { name: 'Base Cabinets', exact: true })
    8) <button tabindex="-1" type="button" class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-1dvjzc8">Wall Cabinets</button> aka getByRole('button', { name: 'Wall Cabinets', exact: true })
    9) <button tabindex="-1" type="button" class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-1dvjzc8">Tall Cabinets</button> aka getByRole('button', { name: 'Tall Cabinets', exact: true })
    10) <button tabindex="-1" type="button" class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-1dvjzc8">Corner Cabinets</button> aka getByRole('button', { name: 'Corner Cabinets', exact: true })
    ...

Call log:
  - waiting for locator('button[type="button"]')

    at ProjectPage.addNewProject (/home/webosmotic/Documents/BARU/Baru_automation/Baru_automation/Pages/project.page.js:10:34)
    at /home/webosmotic/Documents/BARU/Baru_automation/Baru_automation/tests/Baru.spec.js:23:21
```

# Page snapshot

```yaml
- banner:
  - img "logo"
  - combobox "Search"
  - button "Open"
  - button "Help"
  - button "Login"
  - button "Signup"
  - button "Home"
  - button "Base Cabinets"
  - button "Wall Cabinets"
  - button "Tall Cabinets"
  - button "Corner Cabinets"
  - button "Additional Items"
- img "logo"
- heading "Please sign in" [level=3]
- heading "Email Address" [level=6]
- paragraph: "*"
- textbox "Email Address *": heena.webosmotic@gmail.com
- heading "Password" [level=6]
- paragraph: "*"
- textbox "Password *": Baru123!
- button
- checkbox "Remember me"
- heading "Remember me" [level=6]
- paragraph: Forgot password?
- paragraph: Dont have an account? Signup for free
- button "Login" [disabled]:
  - progressbar "Login":
    - img
  - text: Login
- text: © 2017–2025 Baru Inc. (V1.1.51)
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
   1 | class ProjectPage {
   2 |     constructor(page) {
   3 |       this.page = page;
   4 |       this.projectDropdown = page.locator('button[type="button"]');
   5 |       this.addNewProjectOption = page.locator('li:has-text("Add a New Project")');
   6 |       this.projectNameInput = page.locator('input[name="projectName"]');
   7 |       this.createProjectButton = page.locator('button:has-text("Create")');
   8 |     }
   9 |      async addNewProject(projectName) {
> 10 |       await this.projectDropdown.click();
     |                                  ^ Error: locator.click: Error: strict mode violation: locator('button[type="button"]') resolved to 23 elements:
  11 |       await this.addNewProjectOption.click();
  12 |       await this.projectNameInput.fill(projectName);
  13 |       await this.createProjectButton.click();
  14 |     }
  15 |   }
  16 |    module.exports = ProjectPage;
  17 |  
```