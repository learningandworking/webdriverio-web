import {expect} from 'chai';
import webdriverio from 'webdriverio';

export default function LogInPage(){

    const headLineTxt = 'Log in to Trello';
    let emailText = $('#user');
    let pwdText = $('#password');
    let loginBtn = $('login');

    (function isAt(){
        browser.waitUntil(() => {
            return browser.getText('<h1>') === headLineTxt;
        }, 5000, 'Headline does not display correctly');
        expect(emailText.isDisplayed()).to.be.true;
        //browser.debug();
        expect(pwdText.isDisplayed()).to.be.true;
        //expect(loginBtn.isDisplayed()).to.be.true;
    })();
    
}