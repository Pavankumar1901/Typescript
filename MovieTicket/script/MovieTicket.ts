export{}
let userId=1000;
class userDetails
{
    userId:number;
    Name:string;
    Age:number;
    MobileNumber:number;
    constructor(paramuserId:number,paramName:string,paramAge:number,paramMobileNumber:number){
        userId++;
        
        this.userId=userId;
        this.Name= paramName;
       


    }

}

class tickets{
    TicketNumber:number;
    MovieName:string;
    SeatCount:number;
    userId:number;


}
let userArrayList:Array<userDetails> =new Array<userDetails>();
let ticketsArrayList:Array<tickets> =new Array<tickets>();
function newuser(){
    (document.getElementById("main") as HTMLDivElement).style.display ="none";
    (document.getElementById("registration") as HTMLDivElement).style.display="block";
    (document.getElementById("login") as HTMLDivElement).style.display ="none" ;
    (document.getElementById("option") as HTMLDivElement).style.display= "none";
    (document.getElementById("booktickets") as HTMLDivElement).style.display = "none";
    (document.getElementById("history") as HTMLDivElement).style.display = "none";


    
}
function userlogin(){
    (document.getElementById("main") as HTMLDivElement).style.display ="none";
    (document.getElementById("registration") as HTMLDivElement).style.display="none";
    (document.getElementById("login") as HTMLDivElement).style.display ="block" ;
    (document.getElementById("option") as HTMLDivElement).style.display= "none";
    (document.getElementById("booktickets") as HTMLDivElement).style.display = "none";
    (document.getElementById("history") as HTMLDivElement).style.display = "none";


}
function validateuser(){
    (document.getElementById("main") as HTMLDivElement).style.display ="none";
    (document.getElementById("registration") as HTMLDivElement).style.display="none";
    (document.getElementById("login") as HTMLDivElement).style.display ="none" ;
    (document.getElementById("option") as HTMLDivElement).style.display= "block";
    (document.getElementById("booktickets") as HTMLDivElement).style.display = "none";
    (document.getElementById("history") as HTMLDivElement).style.display = "none";

}

function booktickets(){
    (document.getElementById("main") as HTMLDivElement).style.display ="none";
    (document.getElementById("registration") as HTMLDivElement).style.display="none";
    (document.getElementById("login") as HTMLDivElement).style.display ="none" ;
    (document.getElementById("option") as HTMLDivElement).style.display= "none";
    (document.getElementById("booktickets") as HTMLDivElement).style.display = "block";
    (document.getElementById("history") as HTMLDivElement).style.display = "none";


}

function showhistory(){
    (document.getElementById("main") as HTMLDivElement).style.display ="none";
    (document.getElementById("registration") as HTMLDivElement).style.display="none";
    (document.getElementById("login") as HTMLDivElement).style.display ="none" ;
    (document.getElementById("option") as HTMLDivElement).style.display= "none";
    (document.getElementById("booktickets") as HTMLDivElement).style.display = "none";
    (document.getElementById("history") as HTMLDivElement).style.display = "block";


}
function confirmticket(){

}
function adduser(){

}