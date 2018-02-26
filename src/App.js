import React, { Component } from 'react';
// import Ant from './Ant.js'

import './App.css';

export default class App extends Component {
    constructor() {
        super()

        //initialize state
        this.state = ({
            ants: [],
            loaded: false,
            runners: []
        });
    }

    //fetch data and setState with response
    getData = () => {
        fetch('https://cors-anywhere.herokuapp.com/https://guarded-shore-81814.herokuapp.com/graphql?query=%23%20Welcome%20to%20GraphiQL%0A%23%0A%23%20GraphiQL%20is%20an%20in-browser%20tool%20for%20writing%2C%20validating%2C%20and%0A%23%20testing%20GraphQL%20queries.%0A%23%0A%23%20Type%20queries%20into%20this%20side%20of%20the%20screen%2C%20and%20you%20will%20see%20intelligent%0A%23%20typeaheads%20aware%20of%20the%20current%20GraphQL%20type%20schema%20and%20live%20syntax%20and%0A%23%20validation%20errors%20highlighted%20within%20the%20text.%0A%23%0A%23%20GraphQL%20queries%20typically%20start%20with%20a%20%22%7B%22%20character.%20Lines%20that%20starts%0A%23%20with%20a%20%23%20are%20ignored.%0A%23%0A%23%20An%20example%20GraphQL%20query%20might%20look%20like%3A%0A%23%0A%23%20%20%20%20%20%7B%0A%23%20%20%20%20%20%20%20field(arg%3A%20%22value%22)%20%7B%0A%23%20%20%20%20%20%20%20%20%20subField%0A%23%20%20%20%20%20%20%20%7D%0A%23%20%20%20%20%20%7D%0A%23%0A%23%20Keyboard%20shortcuts%3A%0A%23%0A%23%20%20%20%20%20%20%20Run%20Query%3A%20%20Ctrl-Enter%20(or%20press%20the%20play%20button%20above)%0A%23%0A%23%20%20%20Auto%20Complete%3A%20%20Ctrl-Space%20(or%20just%20start%20typing)%0A%23%0A%0A%7B%0A%20%20ants%7B%0A%20%20%20%20name%0A%20%20%20%20length%0A%20%20%20%20color%0A%20%20%20%20weight%0A%20%20%7D%0A%7D')
        .then(res => res.json())
        .then(res => {
            this.setState({
                ants: res.data.ants,
                loaded: true
            })
        })
    }

    //on mount fetch data
    componentDidMount() {
        this.getData()

    }

  //   //onClick determine odds
  //   odds = () => {

  //       //run all odds simultaneously
  //       this.ant0.delay()
  //       this.ant1.delay()
  //       this.ant2.delay()
  //       this.ant3.delay()
  //       this.ant4.delay()

  //       //call wiiners function very 1 second
  //       setInterval(() => {
  //           this.winners()
  //       }, 100)
  //   }


  //   //retrieve odds from each ant using refs
  //   winners = () => {

  //       //set eah odd to a variable for easy use
  //       let ant0 = this.ant0.odd()
  //       let ant1 = this.ant1.odd()
  //       let ant2 = this.ant2.odd()
  //       let ant3 = this.ant3.odd()
  //       let ant4 = this.ant4.odd()

  //       //input into array
  //       let arr = [ant0,ant1,ant2,ant3,ant4]

  //       //sort array greatest to least
  //       arr.sort((a,b) => {return b-a})
  //       this.setState({
  //           runners: arr
  //       })
  //   }

  // render() {

  //   //ANTS
  //   //**************************************************************************
  //   let a0 = this.state.loaded ?
  //               <Ant onRef={ref => (this.ant0 = ref)} ant={this.state.ants[0]} />
  //           :
  //           null

  //   let a1 = this.state.loaded ?
  //               <Ant onRef={ref => (this.ant1 = ref)} ant={this.state.ants[1]} />
  //           :
  //           null

  //   let a2 = this.state.loaded ?
  //               <Ant onRef={ref => (this.ant2 = ref)} ant={this.state.ants[2]} />
  //           :
  //           null

  //   let a3 = this.state.loaded ?
  //               <Ant onRef={ref => (this.ant3 = ref)} ant={this.state.ants[3]} />
  //           :
  //           null

  //   let a4 = this.state.loaded ?
  //               <Ant onRef={ref => (this.ant4 = ref)} ant={this.state.ants[4]} />
  //           :
  //           null

  //   //**************************************************************************

  //   //odd results greatest to least
  //   let results =   <div id='runner'>
  //                       <h5>high chance</h5>
  //                       {this.state.loaded ?
  //                           this.state.runners.map((x,i) => {
  //                               return (
  //                                   <div key={i}>
  //                                       {x}%
  //                                   </div>
  //                               )
  //                           })
  //                       :
  //                       null
  //                       }
  //                       <h5>low chance</h5>
  //                   </div>

    return (
        <div>
            <div className="container1">
            //     <div className="container">
            //     <div className="heading">
            //         <h3 id="h3one">ANT</h3>
            //         <h3 id="h3two">ODDS of WINNING</h3>
            //     </div>
            //     <hr/>
            //     {a0}
            //     {a1}
            //     {a2}
            //     {a3}
            //     {a4}
            //     </div>
            // </div>

            // <div id="button">
            //     <button onClick={this.odds}> calculate </button>
            // </div>

            // {results}
        </div>
    );
  }
}
