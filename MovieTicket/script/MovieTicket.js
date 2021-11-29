"use strict";
exports.__esModule = true;
var userId = 1000;
var userDetails = /** @class */ (function () {
    function userDetails(paramuserId, paramName, paramAge, paramMobileNumber) {
        userId++;
        this.userId = userId;
        this.Name = Name;
        th;
    }
    return userDetails;
}());
var tickets = /** @class */ (function () {
    function tickets() {
    }
    return tickets;
}());
var userArrayList = new Array();
var ticketsArrayList = new Array();
function newuser() {
    document.getElementById("main").style.display = "none";
    document.getElementById("registration").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("option").style.display = "none";
    document.getElementById("booktickets").style.display = "none";
    document.getElementById("history").style.display = "none";
}
function userlogin() {
    document.getElementById("main").style.display = "none";
    document.getElementById("registration").style.display = "none";
    document.getElementById("login").style.display = "block";
    document.getElementById("option").style.display = "none";
    document.getElementById("booktickets").style.display = "none";
    document.getElementById("history").style.display = "none";
}
function validateuser() {
    document.getElementById("main").style.display = "none";
    document.getElementById("registration").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("option").style.display = "block";
    document.getElementById("booktickets").style.display = "none";
    document.getElementById("history").style.display = "none";
}
function booktickets() {
    document.getElementById("main").style.display = "none";
    document.getElementById("registration").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("option").style.display = "none";
    document.getElementById("booktickets").style.display = "block";
    document.getElementById("history").style.display = "none";
}
function showhistory() {
    document.getElementById("main").style.display = "none";
    document.getElementById("registration").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("option").style.display = "none";
    document.getElementById("booktickets").style.display = "none";
    document.getElementById("history").style.display = "block";
}
function confirmticket() {
}
function adduser() {
}
