// import React, { Component } from 'react';
// import './App.css';

// export default class Ant extends Component {
//     constructor(props) {
//         super(props);

//         //initialize state
//         this.state = ({
//             status: 'calculate?',
//             clicked: false,
//             odds: 0,
//         });
//     }

//     //on mount set ref
//     componentDidMount() {
//         this.props.onRef(this)
//     }

//     //grab odds state
//     odd = () => {
//         return this.state.odds
//     }

//     //calculate odds of an Ant
//     getOdds = () => {

//         const win = () => {

//             let delay = 7000 + Math.random() * 7000
//             let likelihood = Math.random() * (.5 - .01) + .01

//             //calculate odds
//             const odds = (percent) => {

//                 let result = (percent/(1 - percent)) * 100

//                 return result
//             }

//             //return a promise payload
//             return new Promise((resolve, reject) => {

//                 //set delay before calling odds function
//                 setTimeout(() => {
//                   resolve(odds(likelihood));
//                 }, delay);
//             })
//         }

//         //setSate with response from promise
//         win().then(res => {
//             this.setState({
//                 odds: Math.floor(res),
//                 status: 'calculated'
//             })
//         })
//     }

//     //onclick flip state of status to in progress
//     delay = () => {

//         this.setState({
//             clicked: true,
//             status: 'in progress'
//         })

//         //start calculating odds
//         this.getOdds()
//     }

//   render() {
//     return (
//         <div className="ant">
//             <div className="flip-container">
//                 <div className="flipper">
//                     <div className="front">
//                         <div className="left">
//                             <p>{this.props.ant.name}</p>
//                             <h6>{this.props.ant.length} in.
//                             <span> &#8226; </span>
//                             {this.props.ant.weight} oz.
//                             <span> &#8226; </span>
//                             {this.props.ant.color}</h6>
//                         </div>
//                         <div className="right">
//                             <p>{this.state.odds}%</p>
//                             <p>{this.state.status}</p>
//                         </div>
//                     </div>
//                     <div className="back">
//                         <div className="description">
//                             <h2>HIRE ME  😊</h2>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
//   }
// }
