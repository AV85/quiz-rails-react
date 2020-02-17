import React from 'react'
import Layout from '../hoc/Layout/Layout'
import Quiz from "../containers/Quiz/Quiz";
import ActiveQuiz from "./ActiveQuiz/ActiveQuiz";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Quiz/>
      </Layout>
    )
  }
}

export default App
