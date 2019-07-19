export default function HomePage(){

    let locatorElements = {
        "topLoginBtn" : '$(href="/login")',
        "topSignUpBtn" : '$(href="/signup")',
        "centerSignUpBtn" : '$(section[id="hero"] a[href="/signup"])'
    }

    return Object.freeze({
        goToLogIn: function(){
            browser.click(locatorElements.topLoginBtn);
            browser.sleep(2000);
        },
    
        goToSignUp: function() {
            browser.click(locatorElements.topSignUpBtn);  
        }
    })
}