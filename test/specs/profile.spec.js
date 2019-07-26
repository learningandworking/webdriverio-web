import HomePage from "../pageObjects/HomePage";
const path = require('path')

const dataObj = {
    fullName: "Trello web",
    initials: "usr",
    userName: "trello_webdriverio",
    bio: `Hello how are you`,
    avatarFile: path.join(__dirname, '../data/avatar.png')
};

describe("Dashboard page", () => {

    let homepage, profilepage, dashboardpage
    let account = {
        email: "trelloweb@yopmail.com",
        password: "trelloweb"
    }

    before(() => {
        console.log("before in test spec")
        console.log("file path", dataObj.avatarFile);
        homepage = HomePage();
        dashboardpage = homepage.goToLogIn().goToDashBoardPage(account.email, account.password);
    });

    it("login to dashboard page", () => {
        profilepage = dashboardpage.goToProfilePage();
        profilepage.changeAboutInfo(1, dataObj)
    })
})