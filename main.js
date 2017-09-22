const quiz = [['What is Superman\s real name?', 'Clark Kent'],['What is Batman\s real name?', 'Bruce Wayne'],['What is Wonder Woman\s real name?', 'Diana Prince']];
let score = 0;
function start(quiz) {
    console.log("start " + quiz);
    // initialize score
    for (const [question,answer] of quiz) {
        const response = prompt(question);
        check(response, answer);
    }

    gameOver();
}

// function declaration
function ask(question) {

    return prompt(question);
}


function check (response, answer) {
    if (response === answer) {
        alert('Correct!');
        score++;
    } else {
        alert(`Wrong! The correct name is ${answer} !`);
    }
}

// At the end of the game, report the player's score
function gameOver() {
    alert(`Game Over! Your score is ${score}`);
}

start(quiz);