import { expect } from 'chai';
import LogInPage from './LogInPage';

export default function SignUpPage() {

    /** Element locators*/
    let nameField = $('input[id="name"]');
    let emailField = $('#email');
    let pwdField = $('#password');
    let signUpBtn = $('#signup');
    let signInLink = $('="or sign in to your account');

    /** Page Properties */
    let pageHeadline = 'Create a Trello Account'

    /** Self Verification */
    (function isAt(){
        browser.waitUntil(() => {
            return expect(browser.getUrl()).contain('/signup')
        })
    })()

    return {
        signUpData: function(username, pwd, email) {
            nameField.setValue(username);
            pwdField.setValue(pwd);
            emailField.setValue(email);
            signUpBtn.click();
            browser.pause(2000);
            return LogInPage();
        }
    }
}