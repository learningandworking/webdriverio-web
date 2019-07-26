import {expect} from "chai";

export default function BoardDetailPage(boardName) {

    /** Element Locators */
    let listColumnCard = $('#board').$$('.js-list')
    let cardListActions = $('.pop-over');
    let addListBtn = $('.js-add-list');

    /** Self Verication */
    (function isAt(){
        console.log("board header ======: ", $$('.board-header-btn-text')[0].getText()), 
        browser.waitUntil(() => {
            return $$('.board-header-btn-text')[0].getText() === boardName;
        })
    })();

    function addColumnList(columnName){
        addListBtn.click();
        let placeholder = $('input[placeholder="Enter list title..."]')
        placeholder.then(el => {
            el.clearValue();
            el.setValue(columnName);
            $('input[value="Add List"]').click();
            expect($('#board').getText()).contain(columnName);
        })
    };

    function removeColumnCard(el) {
        const columnCardName = el.$('.list-header').getText()
        el.$('.list-header-extras').click();
        expect(cardListActions.$('.pop-over-header-title').getText()).to.equal('List Actions');
        cardListActions.$('.js-close-list').click();
        expect($('#board').getText()).not.contain(columnCardName);
    }

    return {
        intialBoardColumns: function(){
            console.log("length of listColumnCard ========", listColumnCard.length)
            listColumnCard.forEach(element => {
                removeColumnCard(element);
            });
            addColumnList("ToDo");
            addColumnList("In-Progress");
            addColumnList("Peer Review");
            addColumnList("Completed");
            browser.pause(5000);
        }
    }

}