import { constants, locator_for_personal_info } from "../../Locators/locators";

class PersonalInfo {
    open () {
        cy.get(locator_for_personal_info.myInfo).click();
    }

    editFirstname () {
        cy.get(locator_for_personal_info.firstName_part_1).clear().type(constants.firstName_part_1);
        cy.get(locator_for_personal_info.firstName_part_2).clear().type(constants.firstName_part_2);
        cy.get(locator_for_personal_info.firstName_part_3).clear().type(constants.firstName_part_3);
    }

   saveChanges () {
        cy.get(locator_for_personal_info.save_button).first().click();
   }

   assertChanges () {
        cy.get(locator_for_personal_info.firstName_part_1).should("have.value", constants.firstName_part_1);
        cy.get(locator_for_personal_info.firstName_part_2).should("have.value", constants.firstName_part_2);
        cy.get(locator_for_personal_info.firstName_part_3).should("have.value", constants.firstName_part_3);
   }

   assertSuccesMessage () {
        cy.get(locator_for_personal_info.succesMessage).should("be.exist").and("be.visible");
   }

}

export default PersonalInfo;
