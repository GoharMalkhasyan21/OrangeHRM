import { locators } from "../../Locators/locators";
import { constants } from "../../Locators/locators";

class AuthPage {
    open() {
        cy.visit(locators.url);
    }

    login() {
        cy.get(locators.username).type(constants.username);
        cy.get(locators.password).type(constants.password);
        cy.get(locators.loginButton).click();
    }

    assertLogin() {
        cy.get(locators.dashboard).should("be.exist").and("be.visible");
    }
}

export default AuthPage;
