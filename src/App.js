import React, {Component} from 'react';
import Header from './components/Header'
import './App.scss';
import Filter from './components/Filter';
import Listings from './components/Listings';
import data from './data/listings'

class App extends Component {
  constructor() {
    super()
    this.state = {
    data,

  }

  this.change = this.change.bind(this)
}
change(event) {
  var name = event.target.name
  var value = event.target.value

  this.setState({
    [name]: value
  }, () => {
    console.log(this.state);
    
  })
  
  
}
render() {
  return (<div>
    <Header />
    <section id='content-area'>
      <Filter change={this.change} />
      <Listings data={this.state.data} />
    </section>
  </div>
   
  );
}
}

export default App;
