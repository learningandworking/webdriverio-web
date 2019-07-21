import HomePage from '../pageObjects/HomePage.js';
import { expect } from 'chai';

describe('Login Page Spec', () => {
    let homepage, loginpage;

    beforeEach(()=> {
        homepage = HomePage();
        loginpage = homepage.goToLogIn();
    })
    it("User cannot login with invalid username and invalid pwd",  () => {
       let loginResult = loginpage.verifyLoginResult("m", "trelloweb", false);
       expect(loginResult).to.be.true;
    });

    it("User can login with valid username and valid pwd", () => {
        let loginResult = loginpage.verifyLoginResult("trelloweb@yopmail.com", "trelloweb", true);
        expect(loginResult).to.be.true;
    })
});