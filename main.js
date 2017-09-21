const quiz = [['What is Superman\s real name?', 'Clark Kent'],['What is Batman\s real name?', 'Bruce Wayne'],['What is Wonder Woman\s real name?', 'Diana Prince']];
let score = 0;  // initialize score
for (const [question,answer] of quiz) {
    const response = prompt(question);
    if (response === answer) {
        alert('Correct!');
        score ++;
    }
    else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
}
// At the end of the game, report the player's score
alert(`Game Over! Your score is ${score}`);