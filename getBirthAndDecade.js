// I want to create a prompt that will accept a user's age and return to the screen the user's age and how many decades s/he has lived

let usersYear;
let result;
do {
    usersYear = prompt(`Please enter your year of birth in _ _ _ _`);

} while (usersYear.length < 4 || isNaN(usersYear) || usersYear.length > 4);



let date = new Date();
let year = date.getFullYear();
let age = parseInt(year - usersYear);
document.write(`You are ${age} year(s) of age`);
console.log(typeof (age));

let aDecade = 10;
if (age > aDecade) {

    let div = document.querySelector('#printResult');
    let decadeValue = (age / aDecade);
    div = Math.floor(decadeValue);
    document.write('<br><br> & <br>')
    div.innerHTML = document.write(`<br> You have lived for ${div} decade(s)`);

    // aDecade += 10;
} else {
    document.write('<br><br> You are either to old or a well growing kid, try after some time');
}