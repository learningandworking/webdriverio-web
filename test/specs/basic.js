import {HomePage} from '../pageObjects/HomePage.js';


describe('webdriver.io page', () => {
    let homepage;
    it('should have the right title', () => {
        //browser.url('/')
        const title = browser.getTitle();
        assert.strictEqual(title, 'Trello');
    });
    it.only("Clicking on Login Button", () => {
        homepage = HomePage();
        //browser.url('/');
        const title = browser.getTitle();
        assert.strictEqual(title, 'Trello');
        homepage.goToLogIn();

    })
});