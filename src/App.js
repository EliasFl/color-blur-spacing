import React, { Component } from 'react';
import './App.css';

import SpacingControl from './Components/SpacingControl/SpacingControl';
import BlurControl from './Components/BlurControl/BlurControl';
import ColorControl from './Components/ColorControl/ColorControl';

class App extends Component {
  state = {
    controls: {
      spacing: 10,
      blur: 0,
      base: '#ffc600'
    }
  }

  handleChange = (event) => {
    const controls = {...this.state.controls};
    controls[event.target.name] = event.target.value;

    this.setState({
      controls
    });
  }

  render() {
    const imgStyles = {
      background: this.state.controls.base,
      padding: `${this.state.controls.spacing}px`,
      filter: `blur(${this.state.controls.blur}px)`,
    }

    return (
      <div className="App">
        <h3>Update CSS variables with React</h3>

        <div className='controls'>
          <SpacingControl
            onChange={this.handleChange} 
            value={this.state.controls.spacing}
          />
          <BlurControl
            value={this.state.controls.blur}
            onChange={this.handleChange}
          />
          <ColorControl
            value={this.state.controls.base}
            onChange={this.handleChange}
          />
        </div>

        <img 
          style={imgStyles} 
          src='https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9c2bca0bb61f47e9da0fa59ec698c981&auto=format&fit=crop&w=800&q=500' 
          alt='Desktop of a programmer'
        />
      </div>
    );
  }
}

export default App;
