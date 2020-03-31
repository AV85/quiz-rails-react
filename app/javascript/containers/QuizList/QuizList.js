import React, {Component} from 'react'
import classes from './QuizList.module.sass'
import {NavLink} from "react-router-dom";
import axios from 'axios-on-rails'

class QuizList extends Component {

  renderQuizes() {
    return [1,2,3].map((quiz, index) => {
      return (
        <li
          key={index}
        >
          <NavLink to={'/quiz/' + quiz}>
            Test {quiz}
          </NavLink>
        </li>
      )
    })
  }

  componentDidMount() {
    axios.get('/quiz-list').then((response) => {
      console.log(response.data)
    })
  }

  render() {
    return(
      <div className={classes.QuizList}>
        <div>
          <h1>List tests</h1>
          <ul>
            { this.renderQuizes() }
          </ul>
        </div>
      </div>
    );
  }
}

export default QuizList