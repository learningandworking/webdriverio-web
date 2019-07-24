import HomePage from '../pageObjects/HomePage.js';
import { expect } from 'chai';

describe('Registration and Authentication', () => {
    let homepage, loginpage, signuppage;

    before(() => {
        homepage = HomePage();
    })

    describe('Login features', () => {

        let invalidAccounts = [
            { "username": null, "password": "trelloweb@yopmail.com", "isValidAccount": false },
            { "username": "test", "password": "test", "isValidAccount": true },
        ];

        invalidAccounts.forEach((test) => {
            it(`User cannot login with invalid username: ${test["username"]} and invalid pwd: ${test["password"]}`, () => {
                let loginResult = loginpage.verifyLoginResult(test["username"], test["password"], test["isValidAccount"]);
                expect(loginResult).to.be.true;
            });
        })

        it("User can login with valid username and valid pwd", () => {
            let loginResult = loginpage.verifyLoginResult("trelloweb@yopmail.com", "trelloweb", true);
            expect(loginResult).to.be.true;
            loginpage.goToDashBoardPage("trelloweb@yopmail.com", "trelloweb", true);
        });
    })

    describe.only('Sign-Up features', () => {
        it("User can sign-up and setup board", () => {
            signuppage = homepage.goToSignUp();
            signuppage.signUpData("tre8_yop", "12345678x@X", "tre8@yopmail.com");
        })
    })

});