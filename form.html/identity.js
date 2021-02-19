
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


    var birthDate = document.getElementById("datepicker").nodeValue;
    var date = newDate(birthDate);

    var gender = document.getElementsByName("gender");
    var gender_value;
        for (var i = 0; i < genders.length; i++) {
            if (genders[1].checked) { gender_value = "female";}
            if (genders[0].checked) { gender_value = "male";}
        }
gti

switch (gender_value) {
    case "female":
        if (dayOfBirth == 0) {
            document.getElementById("display").innerHTML ="Day:" + day[0] + "name:" + femaleNames[0];
        }
        if (dayOfBirth == 1) {
            document.getElementById("display").innerHTML ="Day:" + day[1] + "name:" + femaleNames[1];
        }
        if (dayOfBirth == 2) {
            document.getElementById("display").innerHTML ="Day:" + day[2] + "name:" + femaleNames[2];
        }
        if (dayOfBirth == 3) {
            document.getElementById("display").innerHTML ="Day:" + day[3] + "name:" + femaleNames[3];
        }
        if (dayOfBirth == 4) {
            document.getElementById("display").innerHTML ="Day:" + day[4] + "name:" + femaleNames[4];
        }
        if (dayOfBirth == 5) {
            document.getElementById("display").innerHTML ="Day:" + day[5] + "name:" + femaleNames[5];
        }
        if (dayOfBirth == 6) {
            document.getElementById("display").innerHTML ="Day:" + day[6] + "name:" + femaleNames[6];
        }
    case "male":
        if (dayOfBirth == 0) {
            document.getElementById("display").innerHTML ="Day:" + day[0] + "name:" + maleNames[0];
        }
        if (dayOfBirth == 1) {
            document.getElementById("display").innerHTML ="Day:" + day[1] + "name:" + maleNames[1];
        }
        if (dayOfBirth == 2) {
            document.getElementById("display").innerHTML ="Day:" + day[2] + "name:" + maleNames[2];
        }
        if (dayOfBirth == 3) {
            document.getElementById("display").innerHTML ="Day:" + day[3] + "name:" + maleNames[3];
        }
        if (dayOfBirth == 4) {
            document.getElementById("display").innerHTML ="Day:" + day[4] + "name:" + maleNames[4];
        }
        if (dayOfBirth == 5) {
            document.getElementById("display").innerHTML ="Day:" + day[5] + "name:" + maleNames[5];
        }
        if (dayOfBirth == 6) {
            document.getElementById("display").innerHTML ="Day:" + day[6] + "name:" + maleNames[6];
        }
}
