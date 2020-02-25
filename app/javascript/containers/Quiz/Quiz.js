import React, {Component} from 'react'
import classes from './Quiz.module.sass'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

class Quiz extends Component {
  state = {
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: 'What will be the result 2 + 2 ?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          {text: '3', id: 1},
          {text: '4', id: 2},
          {text: '5', id: 3},
          {text: '6', id: 4},
          {text: 'I don\'t know', id: 5}
        ]
      },
      {
        question: 'What will be the result 10 + 10 ?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          {text: '10', id: 1},
          {text: '15', id: 2},
          {text: '20', id: 3},
          {text: '30', id: 4},
          {text: 'I don\'t know', id: 5}
        ]
      }
    ]
  };

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState){
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[answerId]){
        results[answerId] = 'success'
      }
      this.setState({
        answerState: {[answerId]: 'success'},
        results
      });
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout)
      }, 1000);

    } else {
      results[question.id] = 'error';
      this.setState({
        answerState: {[answerId]: 'error' },
        results
      })
    }
  };

  isQuizFinished(){
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  retryHendler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {}
    })
  };

  componentDidMount() {
    console.log('Quiz ID = ', this.props.match.params.id)
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>
          {
            this.state.isFinished
              ? <FinishedQuiz
                  results={this.state.results}
                  quiz={this.state.quiz}
                  onRetry={this.retryHendler}
                />
              : <ActiveQuiz
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />
          }
        </div>
      </div>
    );
  }
}

export default Quiz