import webdriverio from 'webdriverio'; // show auto suggestion of webdriverio
import { expect } from 'chai';
import DashBoardPage from "../pageObjects/DashboardPage";


export default function LogInPage() {

    /** Element locators*/

    const headLineTxt = $('h1');
    let emailText = $('#user');
    let pwdText = $('#password');
    let loginBtn = $('#login');
    let errorTxt = $('#error');

    /** Page properties*/
    const failedLoginMsg = `There isn't an account for this username`;

    /** Self verfication*/
    (function isAt() {
        browser.waitUntil(() => {
            return expect(browser.getUrl()).contain('/login');
        })
        expect(headLineTxt.getText()).to.be.equal('Log in to Trello');
    })();

    function login(userName, password) {
        emailText.setValue(userName);
        pwdText.setValue(password);
        loginBtn.click();
    }

    return {
        verifyLoginResult: function (userName, password, isPassedLogin) {
            let result = true;
            login(userName, password);
            if(!isPassedLogin){
                browser.waitUntil(() => {
                    return result = errorTxt.isEnabled() === true;
                }, 3000, "There is no error msg found")
            }
            return result;
        },
        
        goToDashBoardPage: function(userName, password, isBoardSetUp) {
            login(userName, password);
            return DashBoardPage(isBoardSetUp);
        },

        goToSignUpPage: function() {
            return SignUpPage();
        }

        
    }

}