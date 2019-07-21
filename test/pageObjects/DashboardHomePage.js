import webdriverio from 'webdriverio';
import { expect } from 'chai';

export default function DashboardHomePage(){

    let BoardIcon = $('a[href="/test21398734/boards"]');

    (function isAt() {
        browser.waitUntil(() => {
        //    return BoardIcon.isDisplayed() === true;
        return expect(browser.getUrl()).contain('/boards');
        })
        //expect(browser.getUrl()).contain('/welcome');
    })();
}