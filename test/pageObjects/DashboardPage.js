
import { expect } from 'chai';
export default function DashboardPage(isSetUp = true) {
    
    /** Element locators */
    let boardTypeSelection = $('.welcome--select');
    let diveRightInBtn = $('button[.welcome--cta-container--button welcome--cta-container--button-blue]')

    /** Page properties */

    /** Self Verification */
    (function isAtWelcomeBoard() {
        if (isSetUp === false) {
            expect($('.welcome--card').waitForDisplayed()).to.be.true;
            expect($('h1').getText()).to.equal(username);
        }
        else {
            browser.waitUntil(() => {
                return expect(browser.getUrl()).contain('/boards');
            });
        }
        ;
    })();
    return {
        chooseBoardType: function () {
            let value = boardTypeSelection.getValue();
            boardTypeSelection.selectByAttribute(value, 'project-management')
            diveRightInBtn.click();
            expect(browser.getUrl()).contain('/boards');
        }
    };
}
