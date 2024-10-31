const locators = {
    url: "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    username: "input[name='username']",
    password: "input[name='password']",
    loginButton: 'button[class*="orangehrm-login-button"]',
    dashboard: "h6[class*='oxd-topbar-header-breadcrumb-module']"
}

const constants = {
    username: "Admin",
    password: "admin123",
    firstName_part_1: "new",
    firstName_part_2: "user",
    firstName_part_3: "admin",
    save_button: 'div[class="oxd-form-actions"] button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]'
}

const locator_for_personal_info = {
    myInfo: '[class="oxd-main-menu"] :nth-child(6) a',
    firstName_part_1: '[name="firstName"]',
    firstName_part_2: '[name="middleName"]',
    firstName_part_3: '[name="lastName"]',
    save_button: 'div[class="oxd-form-actions"] button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]',
    succesMessage: "#oxd-toaster_1"
}

export {locators, constants, locator_for_personal_info};
