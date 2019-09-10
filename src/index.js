import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: null };
//   }
//     render() {
//       return (
//         <button className="square" onClick={() => this.props.onClick()} >
//           {this.props.value}
//         </button>
//       );
//     }
//   }
  
//   class Board extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         squares: Array(9).fill(null)
//       }
//     }
//     renderSquare(i) {
//       return <Square value={this.state.squares[i]}  onClick={() => this.handleClick(i)} />;
//     }
  
//     render() {
//       const status = 'Next player: X';
  
//       return (
//         <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
//         </div>
//       </div>
//       );
//     }
//   }
  
  // class Game extends React.Component {
  //   render() {
  //     return (
  //       <div className="game">
  //         <div className="game-board">
  //           <Board />
  //         </div>
  //         <div className="game-info">
  //           <div>{/* status */}</div>
  //           <ol>{/* TODO */}</ol>
  //         </div>
  //       </div>
  //     );
  //   }
  // }
  
//   // ========================================
  
  // ReactDOM.render(
  //   <Game />,
  //   document.getElementById('root')
  // );


// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );


//1
// ReactDOM.render(
// <h1>Hello React </h1>,
// document.getElementById("root")
// );

//2
// const name = "dharm dev"
// const element = <h1>Hi {name}</h1>
// ReactDOM.render(
//   element,
//   document.getElementById("root")
// );


//3
// function formatName(user) {
//   return user.firstname +" "+user.lastname;
// }
// const name = {
//   firstname : "dharm",
//   lastname : "Dev"
// }
// const element = <h1>Hi {formatName(name)} !!!</h1>
// ReactDOM.render(
//   element,
//   document.getElementById("root")
// );


//4
// function formatName(user) {
//   return user.firstname +" "+user.lastname;
// }

// function greeting(user) {
//   if(user) {
//     return <h5>Hello {formatName(user)} !!!</h5>;
//   } else {
//     return <h1>Hello React</h1>;
//   }
// }

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }

// const name = {
//     firstname : "dharm",
//     lastname : "Dev"
// }
// // const element = <h1>Hello {greeting(name)} !!!</h1>
// const element = <Welcome name="Dharm Dev.... "/>;

// ReactDOM.render(
//   element,
//   document.getElementById("root")
// );


//Composing Components

// function Welcome(props) {
//   return <h1>Hello {props.myname}</h1>;
// }

// function App() {
//   return(
//     <div>
//       <Welcome myname="Dharm"></Welcome>
//       <Welcome myname="Ajay"></Welcome>
//       <Welcome myname="Vijay"></Welcome>
//     </div>
//   );
// }

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// )



//State & LifeCycle
// function Clock(props) {
//   return(
//     <div>
//       <h1>It is {props.date.toLocaleTimeString()}</h1>
//     </div>
//   );
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
//   componentDidMount() {
//     console.log("componentDidMount");
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
//   componentWillUnmount() {
//     console.log("componentWillUnmount");
//     clearInterval(this.timerID);
//   }
//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <a href="#" onClick={handleClick}>Click It</a>
//       </div>
//     )
//   }
// }


// function App() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// function tick(){
//   ReactDOM.render(
//     <Clock></Clock>,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked");
  }
}


