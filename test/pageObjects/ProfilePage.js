import { expect } from 'chai';

export default function ProfilePage() {

    /** Element locators */
    let aboutFormLoc = $('div ._1JEVWhKPk5LQvc');
    let avatarLoc = $('div ._8STAxwEhTLw06E ');

    /** Self Verification */
    (function isAt() {
        browser.waitUntil(() => {
            return $$('a[data-tab="profile"]')[0].getText() === 'Profile and Visibility';
        })
    })();

    /**
     * 
     * @param {*} avatarFile path to avatar file
     */
    function changeAvatar(avatarFile) {
        avatarLoc.$$('div')[0].moveTo();
        avatarLoc.$$('div')[0].click();
        expect($('._1N7TDEoHnIqiCA').getText()).to.be.equal('Change Avatar…');
        const fileUpload = $('div .H29TL9_OYTQq4F');
        browser.execute(
            // assign style to elem in the browser
            (el) => el.style.display = 'block',
            // pass in element so we don't need to query it again in the browser
            fileUpload
        );
        fileUpload.waitForDisplayed();
        fileUpload.setValue(avatarFile);
    };

    /**
     * 
     * @param {*} personalObj client information
     */
    function changePersonalInfo(personalObj) {
        let {fullName, initials, userName, bio} = personalObj;
        aboutFormLoc.$$('input')[0].clearValue();
        aboutFormLoc.$$('input')[0].setValue(fullName);
        aboutFormLoc.$$('input')[1].clearValue();
        aboutFormLoc.$$('input')[1].setValue(initials);
        aboutFormLoc.$$('input')[2].clearValue();
        aboutFormLoc.$$('input')[2].setValue(userName);
        aboutFormLoc.$('textarea').clearValue();
        aboutFormLoc.$('textarea').setValue(bio);
        aboutFormLoc.$('button').click();
        browser.pause(5000);
    }

    return {
        /**
         * 
         * @param {*} changeOption: 1- changePersonalInfo, 2- changeAvatar, default: changeAll
         * @param {*} personalObj: client information object
         */
        changeAboutInfo: function(changeOption, personalObj){
           switch(changeOption){
               case 1:
                   changePersonalInfo(personalObj);
                   break;
                case 2:
                    let avatar = personalObj.avatarFile;
                    changeAvatar(avatar);
                    browser.pause(5000);
                    break;
                default:
                    changePersonalInfo(personalObj);
                    changeAvatar(personalObj.avatarFile);
           }
        },

    }
}