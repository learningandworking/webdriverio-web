import { expect } from "chai";

export default function BoardDetailPage(boardName) {

    /** Element Locators */
    let listColumnCard = $('#board').$$('.js-list');
    let cardListActions = $('.pop-over');
    let addListBtn = $('.js-add-list');
    //let addCardBtn = $$('.open-card-composer');

    /** Page properties */

    /** Self Verication */
    (function isAt() {
        browser.waitUntil(() => {
            return $$('.board-header-btn-text')[0].getText() === boardName;
        }, 5000, "The board name is not as expectation")
    })();

    /**
     * 
     * @param {Number} columnIndex
     * 
     * 
     * 1 - To Do column ; 2 - In-Progress column
     * 
     * 3 - Peer Review column ; 4 - Completed column
     */
    function chooseCardColumn(columnIndex) {
        let cardColLoc;
        switch (columnIndex) {
            case 1:
                cardColLoc = $$('.js-list-content')[0];
                break;
            case 2:
                cardColLoc = $$('.js-list-content')[1];
                break;
            case 3:
                cardColLoc = $$('.js-list-content')[2];
                break;
            case 4:
                cardColLoc = $$('.js-list-content')[3];
                break;
            default:
                cardColLoc = $$('.js-list-content')[0];
                break;
        }
        return cardColLoc;
    }

    function addColumnList(columnName) {
        let placeholder = $('input[placeholder="Enter list title..."]');
        addListBtn.click();
        placeholder.clearValue();
        placeholder.setValue(columnName);
        $('input[value="Add List"]').click();
        expect($('#board').getText()).contain(columnName);
    }

    function cancelCreateCardList() {
        $('.js-cancel-edit').click();
    }

    function removeColumnCard(el) {
        const columnCardName = el.$('.list-header').getText()
        el.$('.list-header-extras').click();
        expect(cardListActions.$('.pop-over-header-title').getText()).to.equal('List Actions');
        cardListActions.$('.js-close-list').click();
        expect($('#board').getText()).not.contain(columnCardName);
    }

    function addCardItemForColumn(cardTitle, cardColLoc) {
        cardColLoc.$$('a')[1].moveTo();
        cardColLoc.$$('a')[1].click();
        cardColLoc.$('.list-card-composer-textarea').click();
        cardColLoc.$('.list-card-composer-textarea').setValue(cardTitle);
        $('input[value="Add Card"]').click();
        expect($('.js-card-details').getText()).to.equal(cardTitle);
    }

    function cancelCreateCardItem() {
        $('.js-cancel').click();
    }

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
            addCardItemForColumn(title, chooseCardColumn(1));
            cancelCreateCardItem();
        },
        dragCardItem: function (orgColName) {
            const orgFirstCardItem = chooseCardColumn(orgColName).$$('.js-card-details')[0];
            let orgCardText = orgFirstCardItem.getText();
            orgFirstCardItem.dragAndDrop(chooseCardColumn(2).$('.js-card-details'));
            expect(chooseCardColumn(2).getText()).to.contain(orgCardText);
        }
    }

}