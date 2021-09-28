var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100
var playerAttack = 10

// how to log multiple values
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// creates function
var fight = function() {
    // alerts players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // subtract the value of 'playerAttack' from the value 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

    // log a resulting message to the console so we know that it worked
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " +enemyHealth + " health remaining."
    );
    
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // subtract the value of 'enemyAttack' from the value 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;

    // log a resulting message to the console so we know it worked
    console.log(enemyName + " attacked " + playerName + ". " +playerName + " now has " + playerHealth + " health remaining.");

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
};
// executes funtion
fight();

//check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
}
