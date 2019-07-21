import webdriverio from 'webdriverio';
import { expect } from 'chai';

export default function DashboardHomePage() {

    (function isAt() {
        browser.waitUntil(() => {
            return expect(browser.getUrl()).contain('/boards');
        });
    })();
}