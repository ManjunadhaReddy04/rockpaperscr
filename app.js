let boxess = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

// Initialize scores
let yoursc = 0;
let com = 0;

// Function to get computer's choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3); 
    let compch = boxess[computerChoice];
    return compch.innerText.trim(); // Use .trim() to clean any extra spaces
}

// Function to determine the winner and update the scores
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        // It's a tie, show an alert
        alert("It's a draw!");
        console.log("draw");
        document.getElementById("y").innerText = userChoice;
        document.getElementById("c").innerText = computerChoice;
        return;
    }

    if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ) {
        // User wins
        yoursc++;
        document.getElementById("y").innerText = userChoice;
        document.getElementById("c").innerText = computerChoice;
    } else {
        // Computer wins
        com++;
        document.getElementById("y").innerText = userChoice;
        document.getElementById("c").innerText = computerChoice;
    }
}

// Add click event listeners to each box
boxess.forEach(box => {
    box.addEventListener("click", function() {
        // Get the user's choice from the clicked box
        const userChoice = box.getAttribute("id");
        
        // Get the computer's choice
        const computerChoice = getComputerChoice();
        
        // Determine the winner and update scores
        determineWinner(userChoice, computerChoice);
        
        // Update the displayed scores
        document.getElementById("you").innerText = yoursc;
        document.getElementById("comp").innerText = com;
    });
});

// Reset button logic
reset.addEventListener("click", function() {
    yoursc = 0;
    com = 0;
    
    // Reset the displayed scores
    document.getElementById("you").innerText = yoursc;
    document.getElementById("comp").innerText = com;
});
