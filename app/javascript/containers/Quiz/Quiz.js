import React, {Component} from 'react'
import classes from './Quiz.module.sass'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"

class Quiz extends Component {
  state = {
    quiz: [
      {
        answers: [
          {text: 'question1'},
          {text: 'question2'},
          {text: 'question3'},
          {text: 'question4'},
          {text: 'question5'}
        ]
      }
    ]
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
          />
        </div>
      </div>
    );
  }
}

export default Quiz