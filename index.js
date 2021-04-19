let toWalletDetailsPage = document.getElementById("go-to-wallet-details-page");
let mainPage = document.getElementById("main-page");
let walletDetailedPage = document.getElementById("wallet-details-page");
let backToMainPageFromWallet = document.getElementById("back-to-main-pageW");
let toProfileDetailsPage = document.getElementById("toProfileDetailsPage");
let profileDetalisPage = document.getElementById("profileDetails");
let backToMainPageFromProfile = document.getElementById("back-to-main-page");
let getQrCodeImg = document.getElementById("getQrCode");
let qrCodeImg = document.getElementById("qrCode");
let getIcontentImg = document.getElementById("getIcontent");
let iContent = document.getElementById("iContent");
let openProfile = document.getElementById("openProfile");
let profileArrw = document.getElementById("profileArrw");
let warningCancelIcon = document.getElementById("warningCancelIcon");
let warningContainer = document.getElementById("warningContainer");
let iSavingsContent = document.getElementById("iSavingsContent");
let getSavingscontent = document.getElementById("getSavingscontent");
let getFeed = document.getElementById("getFeed");
let dollarFeed = document.getElementById("dollarFeed");
let getSellFaqs = document.getElementById("getSellFaqs");
let SellFaqs = document.getElementById("SellFaqs");
let getBuyFaqs = document.getElementById("getBuyFaqs");
let buyFaqs = document.getElementById("buyFaqs");

getBuyFaqs.onclick = function() {
    buyFaqs.classList.toggle("d-none")
}

getSellFaqs.onclick = function() {
    SellFaqs.classList.toggle("d-none")
}

getFeed.onclick = function() {
    dollarFeed.classList.toggle("d-none")
}

getSavingscontent.onclick = function() {
    iSavingsContent.classList.toggle("d-none")
}

warningCancelIcon.onclick = function() {
    warningContainer.classList.remove("d-md-block");
}

profileArrw.onclick = function() {
    openProfile.classList.toggle("d-none")
}

getIcontentImg.onclick = function() {
    iContent.classList.toggle("d-none")
}

getQrCode.onclick = function() {
    qrCodeImg.classList.toggle("d-none");
}

toWalletDetailsPage.onclick = function() {
    mainPage.classList.add("d-none");
    walletDetailedPage.classList.remove("d-none")
}

backToMainPageFromWallet.onclick = function() {
    mainPage.classList.remove("d-none");
    walletDetailedPage.classList.add("d-none")
}
toProfileDetailsPage.onclick = function() {
    mainPage.classList.add("d-none");
    profileDetalisPage.classList.remove("d-none");
}
backToMainPageFromProfile.onclick = function() {
    mainPage.classList.remove("d-none");
    profileDetalisPage.classList.add("d-none");
}