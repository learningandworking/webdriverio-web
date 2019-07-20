import HomePage from '../pageObjects/HomePage.js';
import assert from 'assert';

describe('webdriver.io page', () => {
    let homepage;
    it('should have the right title', () => {
        
        const title = browser.getTitle();
        assert.strictEqual(title, 'Trello');
    });
    it.only("Clicking on Login Button", () => {
        homepage = HomePage();
        const title = browser.getTitle();
        assert.equal(title, "Trello");
        homepage.goToLogIn();

    })
});