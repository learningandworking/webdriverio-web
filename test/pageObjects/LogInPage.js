import webdriverio from 'webdriverio';
import { expect } from 'chai';
import DashBoardHomePage from './DashboardHomePage';


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
        expect(browser.getUrl()).contain('/login');
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
                    return result = errorTxt.getText() === failedLoginMsg;
                })
            }
            return result;
        },
        goToSetUpDashBoardHomePage: function() {
            login(userName, password);
            return DashBoardHomePage();
        },
        goToNonSetUpDashBoardHomePage: function() {
            login(userName, password);
            
        }

        
    }

}