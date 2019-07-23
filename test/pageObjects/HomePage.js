import LogInPage from './LogInPage';
import SignUpPage from './SignUpPage';


export default function HomePage(){

        let topLoginBtn = $('=Log In');
        let topSignUpBtn = $('=Sign Up');
        let centerSignUpBtn = $('section[id="hero"] a[href="/signup"]');


    return{
        goToLogIn: function(){
            topLoginBtn.click();
            return LogInPage();
        },
    
        goToSignUp: function() {
            topSignUpBtn.click();
            return SignUpPage();
        }
    }
}