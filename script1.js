

// function checkName(){
//     var nom = document.getElementById('nom').value;

//     if (nom.lenght >= 3){
//             document.getElementById
//     }else{

//     }
// }
// console.log(nom)// Function to check if the name entered is at least 3 characters long
function checkName() {
    var nom = document.getElementById('nom').value;
    var warningMessage = document.getElementById('warningMessage');

    // Check if the length of the name is less than 3 characters
    if (nom.length >= 3) {
        warningMessage.style.display = 'none'; 
    } else {
        warningMessage.style.display = 'error'; 
    }
}
