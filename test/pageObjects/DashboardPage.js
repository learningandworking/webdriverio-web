
import { expect } from 'chai';
import ProfilePage from './ProfilePage';
import BoardDetailPage from './BoardDetailPage';

export default function DashboardPage(isSetUp = true) {

    /** Element locators */
    let boardTypeSelection = $('.welcome--select');
    let diveRightInBtn = $('.welcome--cta-container--button .welcome--cta-container--button-blue');

    let topLeftIconName = $('button[data-test-id="header-member-menu-button"]');
    let headerMember = {
        popUpPanel: $('div[data-test-id="header-member-menu-popover"]'),
        Options: {
            profileOpt: $('a[data-test-id="header-member-menu-profile"]')
        }
    };

        /** Page properties */

        /** Self Verification */
        (function isAtWelcomeBoard() {
            browser.pause(3000);
            if (isSetUp === false) {
                browser.waitUntil(() => {
                    return expect(browser.getUrl()).contain('/welcome');
                }, 5000, "The current Url cannot match condition");   
            }
            else {
                browser.waitUntil(() => {
                    return expect(browser.getUrl()).contain('/boards');
                }, 5000, "The current Url cannot match condition");
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
        goToProfilePage: function() {
            topLeftIconName.click();
            headerMember.popUpPanel.waitForDisplayed(2000);
            headerMember.Options.profileOpt.click();
            return ProfilePage();
            
        },
        goToBoardDetailPage: function(boardName) {
            $(`.boards-page-board-section div[title=${boardName}]`).click();
            return BoardDetailPage(boardName);
        }
    };
}
