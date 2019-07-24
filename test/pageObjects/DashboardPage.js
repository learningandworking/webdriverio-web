
import { expect } from 'chai';
export default function DashboardPage(isSetUp = true) {

    /** Element locators */
    let boardTypeSelection = $('.welcome--select');
    let diveRightInBtn = $('.welcome--cta-container--button .welcome--cta-container--button-blue');

        /** Page properties */

        /** Self Verification */
        (function isAtWelcomeBoard() {
            if (isSetUp === false) {
                //$('.welcome--card').waitForDisplayed();
                browser.waitUntil(() => {
                    return expect(browser.getUrl()).contain('/welcome');
                });   
            }
            else {
                browser.waitUntil(() => {
                    return expect(browser.getUrl()).contain('/boards');
                });
            }
            ;
        })();

    function chooseBoardType(selectedValue) {
        let value = boardTypeSelection.getValue();
        boardTypeSelection.selectByAttribute(value, selectedValue)
        diveRightInBtn.click();
        expect(browser.getUrl()).contain('/boards');
    }
    return {
        accessDashBoard: function (boardType, isNeededHelp = false) {
            chooseBoardType(boardType);
            if (!isNeededHelp) {
                $('data-test-id="board-name-input"').setValue("board name");
                $('data-test-id="continue-button"').click();
                $('data-test-id="continue-button"').click();
            }
            diveRightInBtn.click();
        },
    };
}
