var form = document.getElementById("itemForm");
var date =document.getElementById("dob");
var username =document.getElementById("uname");
var email=document.getElementById("mail");
var password=document.getElementById("pword");
var contact=document.getElementById("phno");
var submit = document.getElementById("btnSubmit");
var male =document.getElementById("male");
var female =document.getElementById("female");
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function getGender (){
    if (male.checked == true) {
        return "male";
    }
   else  {
    return "female";
    }
   
};


function getDate (){
   
    var day = new Date(date.value);
    return day.getDay()

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

form.addEventListener("submit",function(event){
	event.preventDefault();
    console.log(date.value);
    let gender = getGender()
    const day = getDate()
    let akanName = ""
    let days = ""

    days = weekDays[day]

    if ( gender === "male") {
       akanName = maleNames[day]
    }
    else {
        akanName = femaleNames[day]
    }
    alert(`Your Akan Name is ${akanName}   You were Born on a ${days}`)
    clear()
	})
