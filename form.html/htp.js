var form = document.getElementById("itemForm");
var date =document.getElementById("dob");
var username =document.getElementById("uname");
var email=document.getElementById("mail");
var password=document.getElementById("pword");
var contact=document.getElementById("phno");
var submit = document.getElementById("btnSubmit");
var male =document.getElementById("male");
var female =document.getElementById("female");

form.addEventListener("submit",function(event){
	event.preventDefault();
    console.log(date.value);
    getGender()
    getDate()
    clear()
	})


    
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function getGender (){
    if (male.checked == true) {
        console.log("male");
    }
   else if (female.checked == true) {
    console.log("female");
    }
    else {console.log("non checked")}
};


function getDate (){
    var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var day = new Date(date.value);
var dayOfWeekBorn = days[day.getDay()];
console.log(dayOfWeekBorn)
}

function clear () {
    date.value='';
    male.checked=false;
    female.checked=false;
    contact.value='';
    password.value='';
    username.value='';
    email.value='';
}
//var date = document.getElementById("dob");

//    if (getGender() === "male") {
//         newName = maleNames[day.Value]
//         alert("your new name " + maleName);
//    }
//    if (getGender() === "female") {
//     newName = femaleNames[day.Value]
//     alert("your new name " + femaleName);
// }
