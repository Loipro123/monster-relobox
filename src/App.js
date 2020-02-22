import React, {Component} from 'react';
import './App.css';
import {CardList} from './Components/card-list/card-list.component';
import {Input} from './Components/search-input/search-input.component';
class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchChange: ""
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({
      monsters: users
    }))
  }

  setValue = (e) =>{
    this.setState({
      searchChange: e.target.value
    })
  }
  render(){
    const {monsters,searchChange} = this.state;
    const AdjustMonsters = monsters.filter(monster=>
       monster.name.toLowerCase().includes(searchChange.toLowerCase())
    )
    return(
      <div className="App">
        <h1 className='title'>Monster TeloBox</h1>
        <Input placeholder={'Monster search'} handler={this.setValue}></Input>
        <CardList monsters={AdjustMonsters}></CardList>
      </div>
    )
  }
}


export default App;
