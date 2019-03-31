import React from 'react';
import './App.css';

const initialMarkdown = `
### Headers

# Header 1
## Header 2
### Header 3
`
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      markdown: initialMarkdown
    }
  }

  render() {
    return (
      <div className="App">
          <h1>Markdown Previewer</h1>
          <div className="container">
            <div className="left">
              <textarea id="editor" />
            </div>
            <div className="right">
              <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
