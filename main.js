const quiz = [{name:'Superman', realName:'Clark Kent'} ,{name:'Batman', realName:'Bruce Wayne'}, {name:'Wonder Woman', realName:'Diana Prince'}];
const game = {
    start(quiz) {
        this.questions = [...quiz];
        this.score = 0;
        for (const question of this.questions) {
            this.question = question;
            this.ask();
        }
        this.gameOver();
     },
    ask() {        
        const question = `What is ${this.question.name}'s real name?`;
        const response = prompt(question);
        const result = this.check(response);
    },
    check (response) {
        const answer = this.question.realName;
        if (response === answer) {
            this.score++;
            return 'Correct!';
        }
        else {
            return `Wrong Answer! The correct answer was ${answer}!`;
        }
    },
    gameOver() {
        this.score === 3 ? alert(`Game Over!' Your score was Perfect (${this.score}/${this.questions.length})`) : alert(`Game Over!' Your score was ${this.score}/${this.questions.length}`);
    }
}

game.start(quiz);