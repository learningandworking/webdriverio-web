import HomePage from '../pageObjects/HomePage.js';
import { expect } from 'chai';

describe('Login Page Spec', () => {
    let homepage, loginpage;

    let invalidAccounts = [
        {"username": "", "password:": "trelloweb@yopmail.com"},
        {"username": "test", "password:": "test"},
    ]
    beforeEach(()=> {
        homepage = HomePage();
        loginpage = homepage.goToLogIn();
    })
    
    invalidAccounts.forEach((test) => {
        it("User cannot login with invalid username and invalid pwd",  () => {
           let loginResult = loginpage.verifyLoginResult(test.username, test.password, false);
           expect(loginResult).to.be.true;
        });
    })

    it("User can login with valid username and valid pwd", () => {
        let loginResult = loginpage.verifyLoginResult("trelloweb@yopmail.com", "trelloweb", true);
        expect(loginResult).to.be.true;
    })
});