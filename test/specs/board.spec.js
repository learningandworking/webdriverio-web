import HomePage from "../pageObjects/HomePage";
import LogInPage from "../pageObjects/LogInPage";
const path = require('path')

describe('Board Detail Page', () => {
    let homepage, dashboardpage, boarddetail;
    let account = {
        email: "trelloweb@yopmail.com",
        password: "trelloweb"
    };
    let boardName = "IT";
    before('Accessing to Dashboard Page', () => {
        homepage = HomePage();
        dashboardpage = homepage.goToLogIn().goToDashBoardPage(account.email, account.password);
    });

    beforeEach('Go to Board Detail Page', () => {
        boarddetail = dashboardpage.goToBoardDetailPage(boardName);
    })

    it("Initial board", () => {
        boarddetail.intialBoardColumns();
    })


})