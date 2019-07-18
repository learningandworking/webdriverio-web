const assert = require('assert');

describe('webdriver.io page', () => {

    it('should have the right title', () => {
        browser.url('/')
        const title = browser.getTitle();
        assert.strictEqual(title, 'Trello');
    });
    // it('should have the value', () => {
        
    //     const title = cc.getTitle();
    //     assert.strictEqual(title, 'Trello');
    // });
});