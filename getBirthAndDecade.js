// I want to create a prompt that will accept a user's age and return to the screen the user's age and how many decades s/he has lived

// let usersYear;
// let result;
// do {
//     usersYear = prompt(`Please enter your year of birth in _ _ _ _`);

// } while (usersYear.length < 4 || isNaN(usersYear) || usersYear.length > 4);



// let date = new Date();
// let year = date.getFullYear();
// let age = parseInt(year - usersYear);
// document.write(`You are ${age} year(s) of age`);
// console.log(typeof (age));

// let aDecade = 10;
// if (age > aDecade) {

//     let div = document.querySelector('#printResult');
//     let decadeValue = (age / aDecade);
//     div = Math.floor(decadeValue);
//     document.write('<br><br> & <br>')
//     div.innerHTML = document.write(`<br> You have lived for ${div} decade(s)`);

//     // aDecade += 10;
// } else {
//     document.write('<br><br> You are either to old or a well growing kid, try after some time');
// }

function calculateAll() {
    let aDecade, usersYear, age, year, decadeValue, decade, text1, text2;

    //Get the value of the input field with id year
    usersYear = document.getElementById("year").value;

    //calculate the user's age
    let date = new Date();  
    year = date.getFullYear();
    age = parseInt(year - usersYear);

    //content to display on the screen
    text1 = 'You are ' + age + ' year(s) of age.';
    document.querySelector('.age').innerHTML = text1;



    //calculating the decade 
    aDecade = 10;
    if (age > aDecade) {
        decade = age / aDecade;
        decadeValue = Math.floor(decade);

        //content to be displayed on he screen as/with result
        text2 = 'You have lived for ' + decadeValue + ' decade(s).';
        document.querySelector('.result').innerHTML = text2;
    } else if (age === aDecade){

        let text3 = 'You are a lucky kid, you have lived exactly a decade';
        document.querySelector('.result').innerHTML = text3;

    } else {
        let text4 = 'You are either to old or a well growing kid, try after some time';
        document.querySelector('.result').innerHTML = text4;
    }
}