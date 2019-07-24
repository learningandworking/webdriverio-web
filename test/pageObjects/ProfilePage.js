import {expect} from 'chai';

export default function ProfilePage() {
    
    /** Element locators */


    /** Self Verification */
    (function isAt(){
        browser.waitUntil(() => {
            return $$('a[data-tab="profile"]')[0].getText() === 'Profile and Visibility';
        })
    })();

    return {
        changeAvatar: function (avatarFile) {
            //browser.pause(200000)
            $('.rsiNque2CCqtPE').moveTo();
            $('button._2e97X7K2YRLv4Q').click();
            expect($('._1N7TDEoHnIqiCA').getText()).to.be.equal('Change Avatar…');
            browser.pause(3000)
            //$('span[name="attachment"]').click();
            //browser.ch
            const uploadedFile = browser.uploadFile(avatarFile);
            $$('button._3hhApe7M5RDUB1 span')[0].setValue(uploadedFile)   
            browser.pause(3000);   
        }
    }
}