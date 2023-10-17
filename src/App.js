import { Component } from 'react';
// import logo from './logo.svg';
// import CardList from './components/card-list/card-list.component';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

// class App extends Component {
//   // local state: React only know for this coponent and it can read and write.
//   constructor() { 
//     // run the very first time.
//     super();

//     this.state = {
//       name: {firstName: 'Animesh', lastName: 'Kumar'},
//       company: 'Successive'
//     };
//   }
//   render() {
//     // whenever JSX, sees the curly braces {}, it know you want to access JS code. This is so powerful becuse
//     // it can directly use JS code inside html.

//     // Inside JSX, REACT allows you to bind and event handlers..
//     /**
//      *  React only update the value, when I know the component is different. --->>> 
//      * ------->>>>>>>   we dont need to copy the reference, instead of that we need to copy the value.
//      * 
//      * setState: It shallow merge the current object. It has two func. setState(()=>{}, ())
//      */
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Hi {this.state.name.firstName} {this.state.name.lastName}! you work at {this.state.company}
//           </p>
//           <button onClick={() => { 
//             // this.setState({name : {firstName: 'Andrei', lastName: 'Neogagi'}})
//             // console.log(this.state); // Here, many times states is not updated at the first time

//             this.setState(
//               () => {
//               return {
//                 name : {firstName: 'Andrei', lastName: 'Neogagi'}
//               };
//             }, 
//             () => {
//               console.log(this.state);
//             })
//           }}>
//             Change Name
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   // local state: React only know for this coponent and it can read and write.

//   // SPA: Single page Application...

//   constructor() {
//     super();

//     this.state = {
//       monster: [
//           {name: 'Animesh'},
//           {name: 'Deepak'},
//           {name: 'Suraj'},
//           {name: 'Diplai'},
//       ]
//     }
//   }

//   render() {
//     return (
//       <div className='App'>
//         {this.state.monster.map((monster)=>{
//           return <h1>{monster.name}</h1>
//         }
//         )}
//       </div>
//     )
//   }
// }

// class App extends Component {
//   // local state: React only know for this coponent and it can read and write.

//   // SPA: Single page Application...


//   /**
//    *  classes always render the constructor function first, weather it is a java, javascript or any language. 
//    *  then the render() method will run.
//    *  ater that componentDidMount will run: because component will just mount. 
//    * 
//    *  (this is 80% knowing class render and re-render component life cycle)
//    */
  
//   constructor() {
//     super();
//     // the only use of constructor is to initialize the state.
//     // console.log('constructor');
//     this.state = {
//       monster: [],
//       searchField: ''
//     }
//   }

//   // Life-Cycle Method: If our monster array gets a new object, that means we have to update the state and re-render the component.

//   componentDidMount() {
//     // write your code.
//     // we'll fetch the data from the API
//     // console.log('componentDidMount');
//     fetch('https://jsonplaceholder.typicode.com/users') // It is a promise
//     .then((res)=> res.json()) 
//     // every .then returns a value which is still a promise, which we have to resolve
//     .then((users) => {
//       console.log(users)
//       this.setState(()=>{
//         return {
//           monster: users
//         }
//       }, ()=>{ 
//         console.log(this.state);
//       })
//     })
//   } // run the first time, when component comes to the top, it only happens once in component life

//   // It will comes again only when the component will totally remove from the DOM. Actually, it will not 
//   // even the same coponent, it is the instence of the component.



//   render() {
//     // console.log('render');
//     const filterMonsters = this.state.monster.filter((monsters) => {
//       return monsters.name.toLocaleLowerCase().includes(this.state.searchField);
//   })
//     return (
//       <div className='App'>
//         <h1>Monster App</h1>
//         <input className='searchBox' type='search' placeholder='search monster' onChange={(event) => {
//             const searchField = event.target.value.toLocaleLowerCase();
//             /** If you ever want to modify the array, create a new array, copy the same array and modify in that */
//             this.setState(() => {
//               return { searchField }
//             })

//         }}
//         />
//         {filterMonsters.map((monster)=>{
//           return (
//           <div key={monster.id}>
//             <h1>{monster.name}</h1>
//           </div>
//           )
//         }
//         )}
//       </div>
//     )
//   }
// }

class App extends Component {  
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: ''
    }
  }

  onChange=(event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    })

}

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') 
    .then((res)=> res.json()) 
    .then((users) => {
      this.setState(()=>{
        return {
          monster: users
        }
      })
    })
  } 


  render() {
    const { monster, searchField } = this.state;
    const { onChange } = this;
    const filterMonsters = monster.filter((monsters) => {
      return monsters.name.toLocaleLowerCase().includes(searchField);
  })
    return (
      <div className='App' >
        <h1 className='app-title'>Monster App</h1>
        <SearchBox className='searchBox' onChangeHandler={onChange}  placeholder='search monster' />
        <CardList monster={filterMonsters} />
      </div>
    )
  }
}

export default App;
