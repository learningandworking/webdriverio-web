import { expect } from "chai";

export default function BoardDetailPage(boardName) {

    /** Element Locators */
    let listColumnCard = $('#board').$$('.js-list')
    let cardListActions = $('.pop-over');
    let addListBtn = $('.js-add-list');
    let addCardBtn = $$('.open-card-composer');

    /** Page properties */

    /** Self Verication */
    (function isAt() {
        browser.waitUntil(() => {
            return $$('.board-header-btn-text')[0].getText() === boardName;
        }, 5000, "The board name is not as expectation")
    })();

    function addColumnList(columnName) {
        let placeholder = $('input[placeholder="Enter list title..."]');
        addListBtn.click();
        placeholder.clearValue();
        placeholder.setValue(columnName);
        $('input[value="Add List"]').click();
        expect($('#board').getText()).contain(columnName);
    };

    function cancelCreateCardList() {
        $('.js-cancel-edit').click();
    };

    function removeColumnCard(el) {
        const columnCardName = el.$('.list-header').getText()
        el.$('.list-header-extras').click();
        expect(cardListActions.$('.pop-over-header-title').getText()).to.equal('List Actions');
        cardListActions.$('.js-close-list').click();
        expect($('#board').getText()).not.contain(columnCardName);
    };

    function addCardItemForColumn(cardTitle, cardColLoc){
        cardColLoc.$$('a')[1].moveTo();
        cardColLoc.$$('a')[1].click();
        cardColLoc.$('.list-card-composer-textarea').click();
        cardColLoc.$('.list-card-composer-textarea').setValue(cardTitle);
        $('input[value="Add Card"]').click();
        expect($('.js-card-details').getText()).to.equal(cardTitle);
    };

    function cancelCreateCardItem() {
        $('.js-cancel').click();
    };

    return {
        intialBoardColumns: function () {
            let title = "ToDO item 1"
            listColumnCard.forEach(element => {
                removeColumnCard(element);
            });
            addColumnList("To Do");
            addColumnList("In-Progress");
            addColumnList("Peer Review");
            addColumnList("Completed");
            cancelCreateCardList();
            addCardItemForColumn(title, $$('.js-list-content')[0]);
            cancelCreateCardItem();
            browser.pause(7000)
        }
    }

}