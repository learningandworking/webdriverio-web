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
    before('BeforeHook in TC: Accessing to Dashboard Page', () => {
        homepage = HomePage();
        dashboardpage = homepage.goToLogIn().goToDashBoardPage(account.email, account.password);
    });

    beforeEach('BeforeEachHook in TC: Go to Board Detail Page', () => {
        boarddetail = dashboardpage.goToBoardDetailPage(boardName);
    })

    it("TC: Initial column cards for a board of a customer", () => {
        boarddetail.intialBoardColumns();
    })


})