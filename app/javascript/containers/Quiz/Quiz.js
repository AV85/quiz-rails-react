import React, {Component} from 'react'
import classes from './Quiz.module.sass'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: 'What will be the result 2 + 2 ?',
        rightAnswerId: 2,
        answers: [
          {text: '3', id: 1},
          {text: '4', id: 2},
          {text: '5', id: 3},
          {text: '6', id: 4},
          {text: 'I don\'t know', id: 5}
        ]
      }
    ]
  };

  onAnswerClickHandler = (answerId) => {
    console.log('Answer Id: ', answerId)
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    );
  }
}

export default Quiz