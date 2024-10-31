import AuthPage from "../pages/authpage";
import PersonalInfo from "../pages/myInfo";

describe ('test orangeHRM auth functionality', () => {
    const authPage = new AuthPage();
    const personalInfo = new PersonalInfo();

    it ('test login actions', () => {
       authPage.open();
       authPage.login();
       authPage.assertLogin();
       personalInfo.open();
       personalInfo.editFirstname();
       personalInfo.saveChanges();
       personalInfo.assertSuccesMessage();
       personalInfo.assertChanges();
    })
})
