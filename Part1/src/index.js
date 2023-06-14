import React from 'react';
import ReactDOM from 'react-dom/client';

const curso = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 'has 10 exercises'
    }, 
    {
      name: 'Using props to pass data',
      exercises: 'has 7 exercises'
    }, 
    {
      name: 'State of a component',
      exercises: 'has 14 exercises'
    }
  ]
}

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
}

const Content = (props) => {
  return (
    <>
      <div>{props.part} {props.total}</div>
      <br/>
    </>
  );
}

const App = () => {

  return (
    <div className="App">
      <Header course= {curso.name}/>
      <br/>
      <Content part={curso.parts[0].name} total={curso.parts[0].exercises}/>
      <Content part={curso.parts[1].name} total={curso.parts[1].exercises}/>
      <Content part={curso.parts[2].name} total={curso.parts[2].exercises}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))
