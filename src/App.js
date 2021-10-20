// import logo from './logo.svg';
// import './App.css';
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './assets/style.css';
import quizService from "./quizService";
import QuestionBox from "./Componentsss";
import Result from "./Result";


class App extends React.Component {

  state = {
    questionBank: [],
    score: 0,
    response: 0
  };

  getQuestion = () => {

    quizService().then(question => {
      this.setState({
        questionBank: question
      });
    });
  };

  computeAnswer =(answer, correctAnswer) =>{
    if(answer === correctAnswer){
      this.setState({
        score: this.state.score + 1,
      })
    }

    this.setState({
      response: this.state.response < 5 ? this.state.response + 1 : 5
    })

  }

  componentDidMount() {
    this.getQuestion();
  };


  playAgain = ()=>{
    this.getQuestion();
    this.setState({
      score: 0,
      response: 0
    })
  }



  render() {
    return (
      <div className="container">
        <quizService/>
        <div className="title">Online Test</div>
        {

        this.state.questionBank.length > 0 &&
        
        this.state.response < 6 && 

        this.state.questionBank.map(
            // ({question, answers, correct, questionId}) => ( <h4>{question}</h4> )    
            ({question, answers, correct, questionId}) =>
             (
               <QuestionBox  
               question={question}
               options={answers}
               key={questionId} 
               selected={
                 answer => this.computeAnswer(answer, correct)
               } />
             )    
            
            
            )
        
        }
        {/* {this.state.response === 5 ? (<h2>{this.state.score}</h2>): null} */}
        {this.state.response === 5 ? (<Result score={this.state.score} playAgain={this.playAgain} />): null}
      </div>
    );
  }



}

// function App() {
//   return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


//   );
// }

export default App;
