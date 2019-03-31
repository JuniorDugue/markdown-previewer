import React, { Component } from 'react';
import './App.css';

const initialMarkdown = `
###Headers

# Header 1
## Header 2
### Header 3
`
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Markdown Previewer</div>
          <div className="container">
            <div className="left">
              <textarea id="editor" />
            </div>
            <div className="right">
              <div id="preview" />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
