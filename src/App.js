import React from 'react';
import './App.css';

class App extends React.Component {
  state = {

  }


  componentDidMount() {
  }

  sendMessageToParentApp = (e, msg) => {
    if (window.top) {
      window.top.postMessage("Message from child application", "*");
    }
  }

  render() {
    return (
      <div className="parent-div">
        This is child application
        <div>
          <button type="button" className="btn-success" onClick={this.sendMessageToParentApp}>Send Message</button>
        </div>
      </div>

    );
  }
}

export default App;
