int color = 464646;
function addToWishList(){
    window.location="wishlist.html"
}

function changeBackground(){
    color = colorInput.value;
}


function createClick() {
const email = EmailBtn.value;
const password = PassBtn.value;

auth.createUserWithEmailAndPassword(email, password).then(function(){
alert("you created an account")}
).catch(function(error){
var errorCode = error.code;
var errorMessage = error.message;
alert(errorMessage);
});
}

function redirect()
{
    window.location="homePage.html"
}

function loginClick() {
const email = EmailBtn.value;
const password = PassBtn.value;

auth.signInWithEmailAndPassword(email,password).then(function(){
redirect();
}).catch(function(error){
var errorCode = error.code;
var errorMessage = error.message;
alert(errorMessage);

});
}

function logoutClick(){
auth.signOut().then(function(){
window.location="loginPage.html"
}).catch(function(error){
var errorCode = error.code;
var errorMessage = error.message;
alert(errorMessage);
});
}

function changeClick() {
const email = EmailBtn.value;
const password = PassBtn.value;

auth.createUserWithEmailAndPassword(email, password).then(function(){
alert("you created an account")}
).catch(function(error){
var errorCode = error.code;
var errorMessage = error.message;
alert(errorMessage);

auth.signInWithEmailAndPassword(email,password).then(function(){
redirect();
}).catch(function(error){
var errorCode = error.code;
var errorMessage = error.message;
alert(errorMessage);
});
}